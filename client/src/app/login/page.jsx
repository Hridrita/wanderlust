"use client";
import { authClient } from "@/lib/auth-client";
import { ObjectAlignBottom } from "@gravity-ui/icons";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast, Toaster } from "sonner";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });
    console.log(data, error);

    if (data) {
      toast.success("Logged In successfully!");
      redirect("/");
    }

    if (error) {
      toast.error(error.message || "Something went wrong, please try again.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <Toaster position="top-right" richColors />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-gray-500 mt-2">
          Resume your adventure with Wanderlust
        </p>
      </div>

      <Card className="w-full max-w-lg p-10 shadow-lg rounded-none border border-gray-200">
        <Form onSubmit={onSubmit} className="flex flex-col gap-6">
          <TextField isRequired name="email" type="email">
            <Label className="font-semibold text-gray-700">Email Address</Label>
            <Input placeholder="Enter your email" className="mt-1" />
            <FieldError />
          </TextField>

          <TextField isRequired name="password" type="password">
            <Label className="font-semibold text-gray-700">Password</Label>
            <Input placeholder="Create a password" className="mt-1" />
            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="w-full bg-[#00a8c6] text-white font-bold h-12 rounded-none"
          >
            Sign In
          </Button>

          <div className="text-center text-sm text-gray-600">
            Or continue with
          </div>

          <Button
            variant="bordered"
            className="w-full rounded-none h-12 border-gray-300 font-semibold"
          >
            <FcGoogle size={20} /> Sign Up With Google
          </Button>

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href={"/signup"} className="text-[#00a8c6] font-bold">
              Sign Up
            </a>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
