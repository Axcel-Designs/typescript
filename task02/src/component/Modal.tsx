import type { PropsWithChildren } from "react";
interface Props {
  isVisible: boolean; onClose: () => void; children: PropsWithChildren;
}

export default function Modal({ children, isVisible, onClose }: Props) {
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
            <div className="">Modal{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
