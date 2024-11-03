import Link from "next/link";
import { Button } from "../components/ui/button";

interface CaptionMakerButtonProps {
  text?: string;
  className?: string; // Optional className prop for custom styling
}

export function CaptionMakerButton({
  text = "Chci Leady",
  className = "",
}: CaptionMakerButtonProps) {
  return (
    <Link
      href="https://captionmaker.kinde.com/knock-knock"
      target="_blank" // Opens link in a new window
      rel="noopener noreferrer" // Improves security
      // Optional styling for Link itself
    >
      <Button className={className}>{text}</Button>
    </Link>
  );
}
