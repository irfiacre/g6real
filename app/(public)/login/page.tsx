"use client";
// import { loginUser, registerUser } from "@/services/backend";
import LoginForm from "@/src/components/forms/LoginForm";
// import { decodeJwt } from "@/util/helpers";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AuthPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [signedUp, setSignedUp] = useState<boolean>(false);
  const router = useRouter();

  const handleFormSubmitted = async (data: any) => {
    router.push('dashboard')
    // const { email, password } = data;
    // setLoading(true);
    // if (data.firstName && !signedUp) {
    //   const { firstName, lastName } = data;
    //   const result = await registerUser({
    //     email,
    //     password,
    //     firstName,
    //     lastName,
    //     role: "customer",
    //   });
    //   if (result?.status === 201) setSignedUp(true);
    //   setLoading(false);
    //   return;
    // }
    // const result = await loginUser({ email, password });
    // setLoading(false);
    // const details = decodeJwt(result?.result?.token);
    // localStorage.setItem(
    //   "userDetails",
    //   JSON.stringify({
    //     firstName: details.firstName,
    //     lastName: details.lastName,
    //     email: details.email,
    //     id: details.id,
    //     role: details.role,
    //     token: result?.result?.token
    //   })
    // );
    // if (details.role === "admin") {
    //   router.push("/dashboard");
    // }else{
    //   router.push("/");
    // }
  };
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <LoginForm
        onSubmit={handleFormSubmitted}
        loading={loading}
      />
    </div>
  );
};

export default AuthPage;
