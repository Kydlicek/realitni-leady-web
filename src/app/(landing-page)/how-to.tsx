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
            imageSrc="/img/screen-ordering.png"
            altText="remax"
            title="Vyber si leady podle lokality"
            description="Zvol si počet a lokalitu leadů, které nejlépe odpovídají vašim
              potřebám."
          />
          <LeadCard
            imageSrc="/img/rema.png"
            altText="remax"
            title="Leady dorazí přímo na tvůj profil"
            description="Objednávku ti doručíme přímo na tvůj profil, takže máš
                všechny kontakty připravené k použití bez čekání."
          />
          <LeadCard
            imageSrc="/icons/form.svg"
            altText="remax"
            title="Oslov svoje budoucí klienty"
            description="Kontaktuj klienty, kteří mají zájem o prodej nemovitosti a
              nabídni jim své odborné služby. Každý lead je příležitost k
              úspěšnému obchodu!"
          />
        </div>
        {/* End Grid */}
        <div className="flex justify-center mt-24">
          <CaptionMakerButton text="Začni zdarma" className="w-full" />
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
    <div className="flex flex-col gap-6 p-9 bg-gray-50 ">
      <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
      <p className="text-gray-800">{description}</p>
      {/* <div className="flex justify-center">
        <Image
          src={imageSrc} // Dynamic image path or URL
          alt={altText} // Dynamic alt text for accessibility
          width={250} // Set width as needed
          height={150} // Set height as needed
          priority // (Optional) If you want this image to load immediately
        />
      </div> */}
    </div>
  );
};
