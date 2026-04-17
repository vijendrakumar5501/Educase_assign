import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    nav("/account");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Signin to your PopX account</h1>

      <div className="mt-6">
        <Input
          label="Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button
        text="Login"
        onClick={handleLogin}
        disabled={!email || !password}
      />
    </div>
  );
}