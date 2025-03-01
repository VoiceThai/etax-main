import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/shared/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="text-blue-500">Hello from ETAX Main Application !</h1>
      <h1 className="font-kanit">Hello from ETAX Main Application ภาษาไทย !</h1>
      <Button variant="destructive">Click here</Button>
    </div>
  );
}
