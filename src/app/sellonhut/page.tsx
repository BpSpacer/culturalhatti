import { Card } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db-supabase";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import SellerSignup from "../seller-signup/page";

// Fetching the user data from Prisma
async function getUserData(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { stripeConnectedLinked: true },
  });

  return user;
}

export default async function SellerRoute() {
  noStore();

  const session = await getKindeServerSession();

  if (!session) {
    redirect("/api/auth/register?");
  }

  const user = await session.getUser();

  if (!user) {
    redirect("/api/auth/register?");
  }

  const userData = await getUserData(user.id);

  if (userData?.stripeConnectedLinked === false) {
    redirect("/billing");
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
      <Card>
        <SellerSignup />
      </Card>
    </section>
  );
}
