import type { PropsWithChildren } from "react";

type ModalProps = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function Modal({ children, isVisible, onClose }: ModalProps) {
  function closeModal (e){
    if (e.target.id === 'modalSec') { onClose() }
  }
  if (!isVisible) return null;
  return (
    <>
      <section id="modalSec" className="fixed inset-0 flex flex-col justify-around items-center bg-black/60 backdrop-blur-sm" onClick={closeModal}>
        <div className="flex flex-col bg-white rounded-xl p-4">
          <div
            className="place-self-end text-xl font-bold cursor-pointer"
            onClick={onClose}
          >
            X
          </div>
          <div className="min-h-100 min-w-100 flex flex-col relative z-10 ">
            <div className="">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
