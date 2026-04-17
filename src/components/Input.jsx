export default function Input({ label, placeholder, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="text-sm text-purple-600 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  );
}