import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { createUser } from "../services/auth";
import { Link } from "react-router-dom";

const signupSchema = z.object({
  name: z.string().max(25, "name must not be more than 25 character"),
  email: z.string().nonempty("cannot be left empty").email("invalid email"),
  password: z.string().min(8, "cannot be less than 8 character"),
});

type SignupData = z.infer<typeof signupSchema>;

export interface SignupPageProps {}

const SignupPage: React.FC<SignupPageProps> = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const createuser = createUser();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupData) => {
    createuser.mutate(data);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm"
      >
        <Card className="rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Create Account with Joel"s App
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name")}
                  required
                  className={`rounded-xl ${
                    errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                />
                <span className="text-red-500 my-2">
                  {errors.name?.message}
                </span>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  required
                  className={`rounded-xl ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                <span className="text-red-500 my-2">
                  {" "}
                  {errors.email?.message}
                </span>
              </div>

              <div className="space-y-1 relative">
                <label className="text-sm font-medium">Password</label>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password")}
                  required
                  className={`rounded-xl ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                <span className="text-red-500 my-2">
                  {errors.password?.message}
                </span>

                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-9 cursor-pointer text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <Button
                type="submit"
                className="w-full rounded-xl py-2 text-base font-semibold"
              >
                Sign Up
              </Button>
            </form>
            <p className="text-center">
              <Link
                className="my-4 text-blue-700 hover:text-blue-400 text-center"
                to="/login"
              >
                Already have an account?
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SignupPage;
