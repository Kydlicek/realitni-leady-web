import {
  BookOpenIcon,
  ChevronRightIcon,
  MessagesSquareIcon,
  ThumbsUpIcon,
} from "lucide-react";

export default function IconSectionDescriptionOnLeftIconBlocksOnRight() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="container min-w-full py-24 lg:py-32">
        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4 ml-10 ">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Proč jsme tou správnou volbou pro tvůj růst
            </h2>
            <p className="mt-3 text-gray-800">
              Naše platforma je navržena pro realitní makléře, jako ty, kteří
              chtějí růst a rozvíjet své podnikání. Spojujeme tě přímo s lidmi,
              kteří právě teď chtějí prodat nebo pronajmout svou nemovitost.
              Díky našim specializovaným nástrojům získáš přímý přístup k
              leadům, které můžeš snadno přeměnit na dlouhodobé klienty.
              Soustřeď svou energii na to, co umíš nejlépe – uzavírat výhodné
              obchody a budovat si pověst spolehlivého odborníka.
            </p>
            {/* <Button className="mt-10 w-4/12">
              <RegisterLink className="flex items-center">
                Get started
                <ChevronRightIcon className="w-5 h-5 ml-2 " />
              </RegisterLink>
            </Button> */}
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <BookOpenIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Přímý přístup k aktivním zájemcům
                </h3>
                <p className="mt-1 text-gray-800">
                  Spojujeme tě s lidmi, kteří jsou připraveni jednat – prodat
                  nebo pronajmout svou nemovitost. Díky tomu získáš okamžité
                  obchodní příležitosti.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  bg-primary text-primary-foreground">
                <MessagesSquareIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Přizpůsob si leady podle svých preferencí
                </h3>
                <p className="mt-1 text-gray-800">
                  Vyberte si lokalitu, typ nemovitosti i zaměření na prodej nebo
                  pronájem. Získáš tak leady, které přesně odpovídají tvojí
                  obchodní strategii.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <ThumbsUpIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Všechny informace o klientovi na dosah ruky
                </h3>
                <p className="mt-1 text-gray-800">
                  Zaměř se plně na hovor – všechny potřebné detaily o klientovi
                  ti dodáme na jednom místě. Máš tak vždy po ruce vše, co
                  potřebuješ pro efektivní komunikaci.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
