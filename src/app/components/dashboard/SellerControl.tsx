import SellerData from "@/app/dashboard/sellerdata/page";
import prisma from "@/app/lib/db-supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";


async function getData() {
  const [seller, products] = await Promise.all([
    prisma.seller.findMany({
      select: {
        id: true,
      },
    }),

    prisma.product.findMany({
      select: {
        id: true,
      },
    }),
  ]);

  return {
    seller,
    products,
  };
}

export async function SellerControl() {
  const { seller, products } = await getData();

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Sellers</CardTitle>
            <User2 className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{seller.length}</p>
            <p className="text-xs text-muted-foreground">Total Sellers Signed Up</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Products</CardTitle>
            <PartyPopper className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{products.length}</p>
            <p className="text-xs text-muted-foreground">
              Total Products created By Sellers
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="h-4 w-4 text-blue-500" />
          </CardHeader>
        </Card>
      </div>
      <div>
      <SellerData/>
      </div>
      </>
  );
}