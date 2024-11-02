import {
  BookOpenIcon,
  ChevronRightIcon,
  MessagesSquareIcon,
  ThumbsUpIcon,
} from "lucide-react";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function IconSectionDescriptionOnLeftIconBlocksOnRight() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="container min-w-full py-24 lg:py-32">
        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4 ml-10 ">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Proč jsme tou správnou volbou
            </h2>
            <p className="mt-3 text-muted-foreground">
              Naše platforma je navržena tak, aby podpořila váš růst jako
              realitního makléře. Spojujeme vás přímo s lidmi, kteří chtějí
              prodat nebo pronajmout svou nemovitost, a poskytujeme vám
              nástroje, které vám pomohou efektivně oslovit nové klienty. Díky
              našim kvalitním leadům můžete soustředit svou energii na to, co
              umíte nejlépe – uzavírat obchody a budovat si pověst nejlepšího
              makléře.
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
                <p className="mt-1 text-muted-foreground">
                  Spojujeme vás s lidmi, kteří právě teď chtějí prodat nebo
                  pronajmout svou nemovitost.
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
                  Úspora času a energie
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Díky ověřeným kontaktům můžete přeskočit složité kroky hledání
                  nových klientů a zaměřit se přímo na ty, kteří opravdu
                  potřebují vaše služby.
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
                  Budování důvěryhodné pověsti
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Naše kvalitní leady vám umožní soustředit se na uzavírání
                  obchodů, což posiluje vaši pověst odborníka, kterému klienti
                  mohou důvěřovat.
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
