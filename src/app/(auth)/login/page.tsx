import { LoginForm } from "@/components/forms/login";

export default function LoginPage() {
  return (
    <div className="px-8 py-16 container mx-auto max-w-screen-lg space-y-8">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Entrar na sua conta</h1>
      </div>

      <LoginForm />
    </div>
  );
}
