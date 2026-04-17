import { Camera } from "lucide-react";
import Ellipse from "../assets/Ellipse.png"

export default function Account() {
  return (
    <div className="bg-[#F7F8F9] min-h-full">
      <div className="bg-white p-4 ">
        <h1 className="text-lg font-semibold">Account Settings</h1>
      </div>

      <div className="bg-[#F7F8F9] p-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={Ellipse}
              className="w-16 h-16 rounded-full object-cover"
            />

            {/* Camera Icon */}
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1.5 rounded-full">
              <Camera size={14} className="text-white" />
            </div>
          </div>

          <div>
            <p className="font-semibold">Marry Doe</p>
            <p className="text-gray-600 text-sm">Marry@Gmail.com</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>

        
      </div>
    </div>
  );
}