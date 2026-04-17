import Input from "../components/Input";
import Button from "../components/Button";

export default function Signup() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Create your PopX account</h1>

      <div className="mt-6">
        <Input label="Full Name*" placeholder="Marry Doe" />
        <Input label="Phone number*" placeholder="Marry Doe" />
        <Input label="Email address*" placeholder="Marry Doe" />
        <Input label="Password*" placeholder="Marry Doe" type="password" />
        <Input label="Company name" placeholder="Marry Doe" />

        <div className="mt-4">
          <p className="text-sm font-medium">Are you an Agency?*</p>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" defaultChecked /> Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" /> No
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button text="Create Account" />
      </div>
    </div>
  );
}