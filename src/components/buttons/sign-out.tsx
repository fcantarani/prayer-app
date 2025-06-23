"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";

export const SignOutButton = () => {
  const router = useRouter();

  async function handleClick() {
    await signOut({
      fetchOptions: {
        onError: (context) => {
          toast.error(context.error.message || "Erro ao sair.");
        },
        onSuccess: () => {
          toast.success("Você saiu com sucesso.");
          router.push("/auth/login");
        },
      },
    });
  }

  return (
    <Button onClick={handleClick} size="sm" variant="destructive">
      Sair
    </Button>
  );
};
