"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BaseCard from "../cards/BaseCard";
import BaseInput from "../BaseInput";
import BaseFormInput from "../inputs/BaseFormInput";
import BaseButton from "../buttons/BaseButton";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = ({
  onSubmit,
  loading,
}: {
  onSubmit?: (data: any) => void;
  loading?: boolean;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs | any>();

  const handleFormSubmit = (data: any) => {
    if (onSubmit) onSubmit(data);
  };

  return (
    <BaseCard className="max-w-md mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div>
          <BaseFormInput
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Email"
            additionalCSS="rounded-full max-md:rounded-3xl"
            error={`${errors.email?.message || ""}`}
          />
        </div>
        <div>
          <BaseFormInput
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            placeholder="Password"
            additionalCSS="rounded-full max-md:rounded-3xl"
            error={`${errors.password?.message || ""}`}
          />
        </div>
        <BaseButton
          buttonType="submit"
          disabled={loading}
          additionalCSS="w-full"
        >
          {loading ? "Submitting..." : "Login"}
        </BaseButton>
      </form>
    </BaseCard>
  );
};

export default LoginForm;
