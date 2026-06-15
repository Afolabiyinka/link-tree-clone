import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import CustomInput from "@/modules/auth/components/custom-input";
import { ArrowRight, User } from "lucide-react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <form className="space-y-4 text-center w-md">
        <h1 className="text-center text-3xl font-semibold mb-6 flex items-center gap-2 justify-center">
          <User className="" size={30} />
          Sign into your account
        </h1>

        <CustomInput icon="Mail" type="email" placeholder="Email Address" />
        <CustomInput icon="Lock" type="password" placeholder="Password" />
        <div className="w-full flex items-center gap-1">
          <Checkbox id="checkbox" />
          <Label htmlFor="checkbox">Remember me</Label>
        </div>
        <Button size={`lg`} className="w-full">
          Log In
        </Button>

        <p>
          Dont have an account yet?{" "}
          <Link
            href={`/signup`}
            className="text-primary hover:underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
