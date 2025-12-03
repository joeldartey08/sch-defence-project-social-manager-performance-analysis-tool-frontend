import { motion } from "framer-motion";
import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { getCode } from "../../services/auth";

const codeSchema = z.object({
  email: z.string().nonempty("cannot be left empty").email("invalid email"),
  code: z
    .string()
    .min(6, "must be 6 digits")
    .max(6, "must not exceed 6 digits"),
});

type CodeData = z.infer<typeof codeSchema>;

const GetCode = () => {
  const getcode = getCode();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<CodeData>({
    resolver: zodResolver(codeSchema),
  });

  const onSubmit = (data: CodeData) => {
    getcode.mutate(data);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm"
      >
        <Card className="rounded-2xl text-black shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Get Email Verification Code
            </CardTitle>
          </CardHeader>
          <p className="ny-4">
            A Verification code will be sent to mail...Provide the email you
            registered with !!
          </p>

          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  {errors.email?.message}
                </span>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Verification Code</label>
                <Input
                  type="text"
                  placeholder="Enter your code"
                  {...register("code")}
                  required
                  className={`rounded-xl 
                    errors.code
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                <span className="text-red-500 my-2">
                  {errors.code?.message}
                </span>
              </div>

              <Button
                type="submit"
                className="w-full rounded-xl py-2 text-base font-semibold"
              >
                Receive Code
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default GetCode;
