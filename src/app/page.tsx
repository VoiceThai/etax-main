import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex gap-5 justify-end">
        <UserButton />
        <ThemeToggle />
      </div>
      <h1 className="text-blue-500">ETAX Main Application Home Page</h1>
      <h1 className="font-kanit">ETAX Main Application Home Page ภาษาไทย</h1>
      <Button variant="destructive">Click here</Button>
    </div>
  );
}
