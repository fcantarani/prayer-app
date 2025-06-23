import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <main>
        <div>
          <h1>Você não está logado</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div>
        <h1>Você está logado</h1>
      </div>
    </main>
  );
}
