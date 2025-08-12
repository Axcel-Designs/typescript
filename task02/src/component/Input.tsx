import type { InputType } from "../types/types";

export default function Input({ type, holder, id, label, value, change }: InputType) {
  return (
    <div className='ring-2 rounded-lg py-1 px-2 flex gap-4'>
      <label htmlFor={id} >{label}</label>
      <input type={type} placeholder={holder} name={id} id={id} value={value} onChange={change} required
      className="grow outline-none"/>
    </div>
  )
}
