export default function Button({ text, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 rounded-lg font-semibold text-white transition 
      ${disabled ? "bg-gray-300 cursor-not-allowed" : "bg-gradient-to-r from-purple-600 to-purple-500"}`}
    >
      {text}
    </button>
  );
}