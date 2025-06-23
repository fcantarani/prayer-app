"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signUp } from "@/lib/auth-client";

export const RegisterForm = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name) return toast.error("Por favor, insira seu nome.");
    if (!email) return toast.error("Por favor, insira seu e-mail.");
    if (!password) return toast.error("Por favor, insira sua senha.");

    await signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onRequest: () => {
          toast.loading("Registrando...");
        },
        onResponse: () => {
          toast.success("Conta criada com sucesso!");
        },
        onError: (context) => {
          toast.error(context.error.message || "Erro ao criar conta.");
        },
        onSuccess: () => {
          window.location.href = "/auth/login"; // Redirect to login page
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" name="name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
      </div>
      <Button type="submit" className="w-full">
        Registrar
      </Button>
    </form>
  );
};
