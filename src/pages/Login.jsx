import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Signin to your PopX account</h1>
      <p className="text-gray-500 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div className="mt-6">
        <Input label="Email Address" placeholder="Enter email address" />
        <Input label="Password" placeholder="Enter password" type="password" />
      </div>

      <Button text="Login" disabled />
    </div>
  );
}