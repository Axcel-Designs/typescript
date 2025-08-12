import type { PropsWithChildren } from "react";

type ModalProps = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

function closeModal (){
  if()
}

export default function Modal({ children, isVisible, onClose }: ModalProps) {
  if (!isVisible) return null;
  return (
    <>
      <section className="fixed inset-0 flex flex-col justify-around items-center bg-black/60 backdrop-blur-sm">
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
