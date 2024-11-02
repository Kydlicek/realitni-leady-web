import Why from "@/app/(landing-page)/why";
import Hero from "@/app/(landing-page)/hero";
import How from "@/app/(landing-page)/how-to";
export default function LandingPage() {
  return (
    <div className="m-5 md:m-20 md:mb-0 mt-0 md:mt-0">
      <Hero />
      <Why />
      <How />
    </div>
  );
}
