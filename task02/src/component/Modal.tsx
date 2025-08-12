import type { PropsWithChildren } from "react";

export default function Modal({ children }: PropsWithChildren) {
  return (
    <>
      <section className="fixed inset-0 flex justify-around items-center bg-black/60 backdrop-blur-sm">
        <div className="min-h-100 min-w-100 bg-white rounded-xl flex flex-col relative z-10 p-4">
          <div className="bg-white">Modal{children}</div>
        </div>
      </section>
    </>
  );
}
