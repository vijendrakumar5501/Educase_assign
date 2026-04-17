export default function Button({ text, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 rounded-lg font-semibold text-white transition 
      ${disabled ? "bg-gray-300" : "bg-gradient-to-r from-purple-600 to-purple-500 hover:opacity-90"}`}
    >
      {text}
    </button>
  );
}