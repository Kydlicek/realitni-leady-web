import Link from "next/link";
import { Button } from "../components/ui/button";

interface CaptionMakerButtonProps {
  text: string;
}

export function CaptionMakerButton({ text }: CaptionMakerButtonProps) {
  return (
    <Button>
      <Link
        href="https://captionmaker.kinde.com/knock-knock"
        target="_blank" // opens link in a new window
        rel="noopener noreferrer" // improves security
      >
        {text}
      </Link>
    </Button>
  );
}
