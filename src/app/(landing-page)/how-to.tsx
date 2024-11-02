import Image from "next/image";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { CaptionMakerButton } from "@/components/ActionLink";

export default function IconSectionDescriptionOnLeftIconBlocksOnRight() {
  return (
    <>
      {/* Icon Blocks */}

      <div className="container min-w-full py-24 lg:py-32">
        {/* Grid */}
        <h2 className="scroll-m-20  pb-2 text-3xl mb-16 font-semibold  text-center">
          Jak to funguje
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* End Col */}

          <LeadCard
            imageSrc="/icons/form.svg"
            altText="remax"
            title="Vyberte si leady podle vaší lokality"
            description="Zvolte si počet a lokalitu leadů, které nejlépe odpovídají vašim
              potřebám."
          />
          <LeadCard
            imageSrc="/img/rema.png"
            altText="remax"
            title="Leady dorazí přímo na váš profil"
            description="Vaše objednávka je doručena přímo na váš profil, takže máte
                všechny kontakty připravené k použití bez čekání."
          />
          <LeadCard
            imageSrc="/icons/form.svg"
            altText="remax"
            title="Oslovte vaše budoucí klienty"
            description="Kontaktujte klienty, kteří právě teď hledají pomoc makléře, a
              nabídněte jim své odborné služby. Každý lead je příležitost k
              růstu!"
          />
        </div>
        {/* End Grid */}
        <div className="flex justify-center">
          <CaptionMakerButton text="Začněte zdarma" />
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}

interface CardWithForm {
  title: string;
  description: string;
  altText: string;
  imageSrc: string;
}

const LeadCard = ({ imageSrc, altText, title, description }: CardWithForm) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="flex justify-center">
        <Image
          src={imageSrc} // Dynamic image path or URL
          alt={altText} // Dynamic alt text for accessibility
          width={250} // Set width as needed
          height={80} // Set height as needed
          priority // (Optional) If you want this image to load immediately
        />
      </div>
    </div>
  );
};
