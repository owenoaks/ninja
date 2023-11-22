import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GoogleIcon from "../../../public/google.svg";

export default function Login() {
  return (
    <div className="mt-4 rounded bg-black/80 py-10 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Login</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Login
          </Button>
        </div>
      </form>

      <div>
        New to Netflix{" "}
        <Link className="text-white hover:underline" href="/sign-up">
          SignUp now!
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant="outline" size="icon">
          <GithubIcon className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Image src={GoogleIcon} alt="Google icon" className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
