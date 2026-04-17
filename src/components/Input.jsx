export default function Input({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="mb-5">
      <fieldset className="border border-gray-300 rounded-lg px-3 pb-2">
        <legend className="text-xs text-[#6C25FF] px-1">{label}</legend>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pt-1 pb-1 outline-none text-sm"
        />
      </fieldset>
    </div>
  )

}