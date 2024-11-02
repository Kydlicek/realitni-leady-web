// CaptionMakerButton.jsx
import Link from "next/link";
import { Button } from "../components/ui/button";

export function CaptionMakerButton({ text }) {
  return (
    <Button>
      <Link
        href="https://captionmaker.kinde.com/knock-knock"
        target="_blank" // otevře odkaz v novém okně
        rel="noopener noreferrer" // zvyšuje bezpečnost
      >
        {text}
      </Link>
    </Button>
  );
}
