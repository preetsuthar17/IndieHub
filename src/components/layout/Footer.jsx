import Link from "next/link";
import { Syne } from "next/font/google";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <>
      <footer
        className={`${syne.variable} font-[family-name:var(--font-syne)] border-t py-5 px-5 flex items-center`}
      >
        <p className="flex items-center gap-1">
          <span className="opacity-80">Built with ❤️ by</span>{" "}
          <Link
            href="https://x.com/nott_preett"
            target="_blank"
            className="underline"
          >
            preett
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
