import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Button from "@/shared/components/Button";

const BuyerForm = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Image src={"/assets/Logo.png"} alt={"logo"} width={150} height={150} />
      <div className="pb-10 text-center">
        <h1 className="text-2xl font-semibold">Welcome Back</h1>
        <p>Buy and sell in one calm, trusted marketplace.</p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="relative flex flex-col gap-2">
          <label className="font-semibold" htmlFor="name">
            Email Address
          </label>
          <input
            type="email"
            id="name"
            placeholder="name@example.com"
            className="rounded-full border p-2 pr-10 pl-5"
            required
          />
        </div>
        <div className="relative flex flex-col gap-2">
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <input
            type={isHidden ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            className="rounded-full border p-2 pr-10 pl-5"
            required
          />
          <p className="absolute top-0 right-0 cursor-pointer text-sm font-semibold text-blue-500 transition-colors duration-300 hover:text-blue-700">
            Forgot Password?
          </p>
          <div
            onClick={() => setIsHidden(!isHidden)}
            className="absolute right-2 bottom-2 cursor-pointer"
          >
            {isHidden ? <EyeOff /> : <Eye />}
          </div>
        </div>
      </div>
      <div className="w-full max-w-[50%] px-10 pt-10">
        <Button
          href={"/"}
          text={"Sign In"}
          icon={"/assets/Right-icon.svg"}
          width={20}
          height={20}
          className={
            "text-textBtn flex justify-center gap-2 rounded-full border bg-blue-500 px-10 py-2"
          }
        />
      </div>
      <div className="flex items-center gap-4 py-10">
        <div className="bg-muted/40 h-0.5 w-50" />

        <div>
          <p className="text-muted/70 uppercase">or continue with</p>
        </div>

        <div className="bg-muted/40 h-0.5 w-50" />
      </div>
      <div className="grid w-full max-w-md grid-cols-2 gap-6">
        <div className="flex w-full max-w-xl cursor-pointer justify-center rounded-full border p-2">
          <Image
            src={"/assets/Google.svg"}
            alt={"Google"}
            width={20}
            height={20}
            className=""
          />
        </div>
        <div className="flex w-full max-w-xl cursor-pointer justify-center rounded-full border p-2">
          <Image
            src={"/assets/Github.svg"}
            alt={"Google"}
            width={20}
            height={20}
          />
        </div>
      </div>
      <div>
        <h1 className="pt-5">
          Don't have an account?{" "}
          <Link
            href="/"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Join the Marketplace
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default BuyerForm;
