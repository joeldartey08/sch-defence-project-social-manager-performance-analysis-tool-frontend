import { useMutation } from "@tanstack/react-query";
import api from "./api";
import type { CodeData, LoginData } from "../types";
import { useToastStore } from "../store/useToastStore";
import { useNavigate } from "react-router-dom";

export const userLogin = () => {
  const toast = useToastStore();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: LoginData) => {
      toast.showToast("loading", "Login in process..");

      const res = await api.post("/auth/signin", data);

      return res.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("sch_token", data.token);
      toast.showToast("success", "Login was sucessfull!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    },
    onError: (error) => {
      toast.showToast("error", error.message || "Something went wrong");
    },
  });
};

export const createUser = () => {
  const toast = useToastStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: LoginData) => {
      toast.showToast("loading", "Creating account...");
      const res = await api.post("/auth/signup", data);
      console.log(data);

      return res.data;
    },
    onSuccess: (data) => {
      toast.showToast("success", "Account created successfully!");
      console.log(data);

      setTimeout(() => {
        navigate("/get-code");
      }, 3000);
    },
    onError: (error) => {
      const message = error.message;

      console.log(error);

      toast.showToast("error", message);
    },
  });
};

export const getCode = () => {
  const toast = useToastStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: CodeData) => {
      toast.showToast("loading", "sending verification code....");
      const res = await api.post("/auth/verify-mail", data);
      console.log(data);

      return res.data;
    },
    onSuccess: (data) => {
      toast.showToast("success", "Account Verification Successfully!");
      console.log(data);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    },
    onError: (error) => {
      const message = error.message;

      console.log(error);

      toast.showToast("error", message);
    },
  });
};

export const fetchUser = async () => {
  const token = localStorage.getItem("sch_token");

  if (!token) return null;

  const res = await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res);

  return res.data.user;
};

export const getAnalytics = async () => {
  try {
    const [channel, videos, analytics] = await Promise.all([
      api.get("/connect/youtube/channel"),
      api.get("/connect/youtube/videos"),
      api.get("/connect/youtube/analytics"),
    ]);

    console.log({channel, videos, analytics});
    return {channel, videos, analytics}
  } catch (error) {
    console.error(error);
  }
};
