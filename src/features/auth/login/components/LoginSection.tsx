"use client";

import BuyerForm from "@/features/auth/login/components/BuyerForm";
import { ChevronLeft } from "lucide-react";
import { useIsMobile } from "@/shared/hooks/use-mobile";
import Link from "next/link";

const LoginSection = () => {
  return (
    <div className="bg-card relative mx-auto w-full max-w-[90%] overflow-hidden rounded-4xl border shadow-2xl lg:max-w-[50%]">
      <Link href="/">
        <div className="absolute top-10 left-10 cursor-pointer rounded-full border p-2 shadow-xl transition-transform duration-300 hover:scale-105">
          {useIsMobile(768) ? (
            <ChevronLeft />
          ) : (
            <div className="flex">
              <ChevronLeft /> Back to Home{" "}
            </div>
          )}
        </div>
      </Link>

      <BuyerForm />
    </div>
  );
};

export default LoginSection;
