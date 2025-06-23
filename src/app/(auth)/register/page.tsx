import { RegisterForm } from "@/components/forms/register";

export default function RegisterPage() {
  return (
    <div className="px-8 py-16 container mx-auto max-w-screen-lg space-y-8">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Criar uma conta</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
