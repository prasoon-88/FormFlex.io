import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <>
      <div className="my-4">
        <h1 className="text-3xl font-semibold">
          Let's get <span className="day-blue-500">creative</span>
        </h1>
        <p className="mt-2 text-xs text-slate-400 "> login page for website</p>
        <form>
          <div className="mt-4">
            <Input
              type="email"
              placeholder="Email"
              className="mt-2 mb-2 bg-transparent px-12 rounded active:border-green-500 ease-in duration-300 drop-shadow-lg"
            ></Input>
            <Input
              type="password"
              placeholder="Password"
              className="mb-4 bg-transparent px-12 rounded active:border-green-500 ease-in duration-300 drop-shadow-lg"
            ></Input>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <Checkbox id="terms" className="bg-noble-black-500" />
              <label htmlFor="terms" className="mx-2 cursor:pointer text-sm">
                Remember me
              </label>
            </div>
            <Link href="#" className="cursor:pointer  text-sm">
              Forget Password ?
            </Link>
          </div>
            <Button className="w-full rounded-sm bg-stem-green-500 text-black hover:bg-stem-gereen-500 ">log in</Button>
            <div className="flex w-full justify-between my-6">
                <Button>Google Account</Button>
                <Button>Apple Account</Button>
            </div>
        </form>
      </div>
    </>
  );
  
};

export default Login;
