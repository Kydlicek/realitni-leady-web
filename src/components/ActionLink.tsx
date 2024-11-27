import Link from "next/link";
import { Button } from "../components/ui/button";

interface LoginButtonProps {
  text?: string;
  className?: string; // Optional className prop for custom styling
}

export function LoginButton({
  text = "Chci Leady",
  className = "",
}: LoginButtonProps) {
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
