"use client";

import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const LoginSection = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="bg-card relative mx-auto w-full max-w-[90%] overflow-hidden rounded-4xl border shadow-2xl lg:max-w-[50%]">
      <div className="flex flex-col items-center justify-center p-8">
        <Image src={"/assets/Logo.png"} alt={"logo"} width={150} height={150} />
        <div className="text-center">
          <h1>Welcome Back</h1>
          <p>Buy and sell in one calm, trusted marketplace.</p>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div>
            <input
              type="email"
              id="name"
              placeholder="Enter your email"
              className="rounded-full border p-2 pr-10"
              required
            />
          </div>
          <div className="relative">
            <input
              type={isHidden ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="rounded-full border p-2 pr-10"
              required
            />
            <div
              onClick={() => setIsHidden(!isHidden)}
              className="absolute top-2 right-2 cursor-pointer"
            >
              {isHidden ? <EyeOff /> : <Eye />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
