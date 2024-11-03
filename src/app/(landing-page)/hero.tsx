import { Button } from "@/components/ui/button";
import { CaptionMakerButton } from "@/components/ActionLink";
import Image from "next/image";
export default function HeroSectionWithEmailInput() {
  return (
    <>
      {/* Hero */}
      <div className="container min-w-full py-24 lg:py-24">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Realitní leady
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Propojíme tě s lidmi, kteří chtějí prodat nebo pronajmout svou
              nemovitost
            </p>
            <div className="mt-5 lg:mt-8 flex flex-col sm:items-center gap-2 sm:flex-row sm:gap-3">
              <CaptionMakerButton text="Vyzkoušet zdarma " />
            </div>
            {/* Brands */}
            <div className="mt-6 lg:mt-12">
              <span className="text-xs font-medium uppercase">
                Používáno makléři:
              </span>
              <div className="lg:col-span-4 mt-10 lg:mt-0 ">
                <div className="mt-4 flex gap-x-8">
                  <Image
                    src="/img/MM-resized.png" // Path for local images or URL for external
                    alt="M&M realitní společnost"
                    width={120} // Set width
                    height={60} // Set height
                    priority // (Optional) If you want this image to load immediately
                  />
                  {/* sdasld;'asl;'asdl */}
                  <Image
                    src="/img/rema.png" // Path for local images or URL for external
                    alt="remax realitní společnost"
                    width={150} // Set width
                    height={100} // Set height
                    priority // (Optional) If you want this image to load immediately
                  />
                </div>
              </div>
            </div>
            {/* End Brands */}
          </div>
          {/* End Col */}
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <Image
              className="w-full rounded-xl"
              src="/img/hero.jpg"
              alt="Image Description"
              width={700}
              height={540}
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}
