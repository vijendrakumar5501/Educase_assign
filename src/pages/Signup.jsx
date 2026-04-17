import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Signup() {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "",company:"" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    let err = {};
    if (!form.name) err.name = "Required";
    if (!form.phone) err.phone = "Required";
    if (!form.email) err.email = "Required";
    if (!form.password) err.password = "Required";

    setErrors(err);

    if (Object.keys(err).length === 0) {
      nav("/account");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Create your PopX account</h1>

      <div className="mt-6">
        <Input label="Full Name*" name="name" value={form.name} onChange={handleChange} error={errors.name} />
        <Input label="Phone number*" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} />
        <Input label="Email address*" name="email" value={form.email} onChange={handleChange} error={errors.email} />
        <Input label="Password*" type="password" name="password" value={form.password} onChange={handleChange} error={errors.password} />
          <Input label="Company Name" name="company" value={form.company} onChange={handleChange} />
      </div>

      <Button text="Create Account" onClick={handleSignup} disabled={!form.name || !form.phone || !form.email || !form.password} />
    </div>
  );
}
