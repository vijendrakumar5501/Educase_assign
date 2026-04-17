

export default function Input({ label, placeholder, type = "text" }) {
  return (
    <div className="mb-5">
      <fieldset className="border border-gray-300 rounded-lg px-3 pb-2 focus-within:border-purple-500">
        <legend className="text-xs text-purple-600 px-1">
          {label}
        </legend>

        <input
          type={type}
          placeholder={placeholder}
          className="w-full pt-1 pb-1 outline-none text-sm"
        />
      </fieldset>
    </div>
  );
}
