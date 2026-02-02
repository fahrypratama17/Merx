import Image from "next/image";
import Link from "next/link";
import Button from "@/shared/components/Button";

const navLink = [
  {
    id: 1,
    label: "Home",
    href: "#Home",
  },
  {
    id: 2,
    label: "Why Merx",
    href: "#Why-Merx",
  },
  {
    id: 3,
    label: "Features",
    href: "#Features",
  },
];

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Image
            src={"/assets/logo-white.svg"}
            alt={"logo"}
            width={30}
            height={30}
          />
          <Link href={"#Hero"}>Merx</Link>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            {navLink.map((link) => (
              <li key={link.id} className="group relative">
                <Link href={link.href}>
                  <span className="nav-link">{link.label}</span>
                  <span className="underlined-animation" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          text={"Join Merx"}
          icon={"/assets/login-icon.svg"}
          width={20}
          height={20}
          className={
            "bg-backgroundClr text-navbar flex items-center gap-2 rounded-xl p-2 px-6"
          }
        />
      </div>
    </header>
  );
};

export default Navbar;
