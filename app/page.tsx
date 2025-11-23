import WaldiumHero from "@/components/WaldiumHero";
import WaldiumHeroMobile from "@/components/WaldiumHeroMobile";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between p-4 bg-white gap-16">
        <div className="w-full flex items-center justify-center">
          <WaldiumHero className="hidden lg:flex" />
          <WaldiumHeroMobile className="flex lg:hidden"/>
        </div>
      </main>
    </div>
  );
}
