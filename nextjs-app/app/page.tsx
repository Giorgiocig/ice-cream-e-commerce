import { Button } from "@/components/ui/button";
import { getHomePage } from "./data/loaders";
import { notFound } from "next/navigation";
import { HeroSection } from "./components/blocks/HeroSection";

const dataLoader = async () => {
  const data = await getHomePage();
  if (!data) notFound();
  return { ...data.data };
};

export default async function Home() {
  const data = await dataLoader();
  const blocks = data?.blocks || [];
  console.log(blocks);

  return (
    <div className="min-h-screen">
      <HeroSection {...blocks[0]} />
    </div>
  );
}
