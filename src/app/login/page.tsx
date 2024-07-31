"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { PersonIcon } from "@radix-ui/react-icons";
import UserAuthForm from "@/components/user-auth-form";

export default function LoginPage() {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Link
                href="/"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-4 top-4 md:left-8 md:top-8"
                )}
            >
                <>
                    <ChevronLeft className="h-6 w-6" />
                    Back
                </>
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] border-black border-2 p-6 rounded-xl">
                <div className="flex flex-col space-y-2 text-center">
                    <PersonIcon className="mx-auto h-12 w-12 text-brand" />
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Welcome to Anon Chats
                    </h1>
                </div>
                <UserAuthForm />
            </div>
        </div>
    );
}
