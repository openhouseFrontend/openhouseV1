import Link from "next/link";
import Image from "next/image";

const footerColumns = [
  {
    title: "Buyers",
    links: ["Browse homes", "Home loans", "Locality insights"],
  },
  {
    title: "Sellers",
    links: ["List property", "Free valuation", "Seller dashboard"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Privacy policy"],
  },
];

export function HomeFooter() {
  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/D-logo.png"
              alt="Openhouse logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-3 text-sm text-primary-foreground/75">
              Openhouse helps buyers find beautiful homes in Gurugram with trust, speed, and
              transparency.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-primary-foreground/90">
                {column.title}
              </h3>
              <div className="mt-3 space-y-2 text-sm text-primary-foreground/75">
                {column.links.map((link) => (
                  <Link key={link} href="#" className="block hover:text-primary-foreground">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-4 text-xs text-primary-foreground/65 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 Openhouse Technologies Pvt. Ltd.</p>
          <p className="mt-1 sm:mt-0">Made for home buyers in Gurugram</p>
        </div>
      </div>
    </footer>
  );
}
