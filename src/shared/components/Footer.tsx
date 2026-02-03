import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer p-10">
      <div className="flex flex-col items-center justify-center gap-7">
        <h1 className="title !text-backgroundClr">Merx</h1>
        <p className="subtitle !text-backgroundClr-2/80">
          Where every product finds its place, and every seller finds their
          space.
        </p>
        <Image
          src={"/assets/Logo-white.svg"}
          alt={"celestia"}
          width={100}
          height={100}
        />
        <p className="muted uppercase">
          &copy; {new Date().getFullYear()} Fahry | Merx
        </p>
      </div>
    </footer>
  );
};

export default Footer;
