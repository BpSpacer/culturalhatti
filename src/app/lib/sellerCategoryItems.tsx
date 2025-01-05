import { ChefHat, Globe, PartyPopper } from "lucide-react";
import { ReactNode } from "react";

interface iAppProps {
  name: string;
  title: string;
  image: ReactNode;
  id: number;
}

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "saraiki",
    title: "Saraiki",
    image: <Globe />,
  },
  {
    id: 1,
    name: "sindhi",
    title: "Sindhi",
    image: <ChefHat />,
  },
  {
    id: 2,
    name: "pujnabi",
    title: "Punjabi",
    image: <PartyPopper />,
  },
  {
    id: 3,
    name: "pashtun",
    title: "Pashtun",
    image: <Globe />,
  },
  {
    id: 4,
    name: "balochi",
    title: "Balochi",
    image: <ChefHat />,
  },
  {
    id: 5,
    name: "kashmiri",
    title: "Kashmiri",
    image: <PartyPopper />,
  },
];
