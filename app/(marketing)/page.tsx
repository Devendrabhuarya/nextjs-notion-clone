import { Button } from "@/components/ui/button";
import Image from "next/image";
import Heading from './_components/heding';
import Heroes from './_components/heroes';
import Footer from './_components/footer';

export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center 
      md:justify-start text-center  gap-y-8 flex-1 px-6 pb-10 dark:bg-[#1F1F1F]">
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
}
