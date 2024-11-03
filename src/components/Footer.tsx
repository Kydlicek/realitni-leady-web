import Link from "next/link";
import { CaptionMakerButton } from "@/components/ActionLink";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        {/* Logo or Company Name */}
        <div className="text-lg font-semibold">
          <a href="/">Realitní Leady</a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-gray-400">
          <Link href="/" className="" prefetch={false}>
            Domů
          </Link>
          <Link href="/contact" className="" prefetch={false}>
            Kontakt
          </Link>
          <Link href="/pricing" className="" prefetch={false}>
            Ceník
          </Link>
        </div>

        {/* Social Links */}
        {/* <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            Instagram
          </a>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} Realitní Leady. Všechna práva
        vyhrazena.
      </div>
    </footer>
  );
};

export default Footer;
