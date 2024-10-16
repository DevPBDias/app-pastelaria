import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/icons/Logo.png";

const Home = () => {
  return (
    <main className="hero-bg-color w-full h-dvh content-center-col">
      <section className="content-center gap-12">
        <Image
          src={logo}
          alt="logo for food company"
          quality={100}
          priority
          className="w-[35vw] h-[60vh] object-cover"
        />
        <Link className="main-cta" href="/menu">
          Começar
        </Link>
      </section>
    </main>
  );
};

export default Home;
