import { SignOutButton } from "@/components/buttons/sign-out";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <div className="px-8 py-16 container mx-auto max-w-screen-lg space-y-8">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-destructive">Acesso negado</h1>
          <p>Você precisa estar logado para acessar esta página.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-8 py-16 container mx-auto max-w-screen-lg space-y-8">
      <SignOutButton />

      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Perfil do usuário</h1>
      </div>

      <pre className="text-sm overflow-clip">
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </div>
  );
}
