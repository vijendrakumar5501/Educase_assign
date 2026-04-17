import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const nav = useNavigate();
  return (
    <div className="flex flex-col justify-end h-full p-6">
      <div>
        <h1 className="text-2xl font-bold">Welcome to PopX</h1>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet</p>
      </div>

      <div className="mt-6 space-y-3">
        <button onClick={() => nav("/signup")} className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-purple-500">
          Create Account
        </button>
        <button onClick={() => nav("/login")} className="w-full py-3 rounded-lg bg-purple-200 text-purple-700 font-semibold">
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
