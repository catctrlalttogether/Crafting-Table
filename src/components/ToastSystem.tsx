import React, { useEffect, useState } from 'react';
import { ItemSprite } from './ItemSprite';
import { sound } from '../utils/audio';

export interface ToastMessage {
  id: string;
  type?: 'advancement' | 'info' | 'success';
  title: string;
  description: string;
  itemId?: string;
  duration?: number;
}

// Global emitter event for toasts
type ToastListener = (toast: ToastMessage) => void;
const listeners: ToastListener[] = [];

export const showToast = (toast: Omit<ToastMessage, 'id'>) => {
  const toastWithId: ToastMessage = {
    ...toast,
    id: Math.random().toString(36).substring(2, 9),
    duration: toast.duration || 3500,
  };
  listeners.forEach((l) => l(toastWithId));
};

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleAdd = (toast: ToastMessage) => {
      setToasts((prev) => [...prev, toast]);
      if (toast.type === 'advancement') {
        sound.playLevelUp();
      } else {
        sound.playPop();
      }

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, toast.duration || 3500);
    };

    listeners.push(handleAdd);
    return () => {
      const idx = listeners.indexOf(handleAdd);
      if (idx !== -1) listeners.splice(idx, 1);
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
          className="pointer-events-auto cursor-pointer bg-[#292929] border-2 border-[#454545] border-t-[#5c5c5c] border-l-[#5c5c5c] border-r-[#181818] border-bottom-[#181818] rounded-xs p-3 shadow-[0_8px_24px_rgba(0,0,0,0.85),0_4px_0_#141414] flex items-center gap-3 animate-fadeIn transform transition-all hover:scale-102"
        >
          {/* Item or Trophy Icon */}
          <div className="minecraft-slot w-11 h-11 flex items-center justify-center shrink-0 rounded-xs shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)]">
            {toast.itemId ? (
              <ItemSprite id={toast.itemId} size="md" />
            ) : (
              <div className="w-6 h-6 bg-[#F2C94C] rounded-xs flex items-center justify-center text-black font-pixel text-xs font-bold shadow-xs">
                ★
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0 pr-1">
            <div className="font-pixel text-[10px] tracking-wider uppercase text-[#F2C94C] flex items-center gap-1">
              <span>{toast.title}</span>
            </div>
            <p className="font-heading text-xs font-semibold text-[#F1F1F1] truncate mt-0.5">
              {toast.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
