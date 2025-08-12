import type { ButtonType } from "../types/types";

export default function Button({ label, type }: ButtonType) {
  return (
    <div>
      <button
        // onClick={click}
        className="border-2 py-1 px-4 rounded-lg hover:bg-gray-200"
        type={type}
      >
        {label}
      </button>
    </div>
  );
}

