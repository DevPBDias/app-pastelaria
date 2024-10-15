import Image from "next/image";
import logo from "@/assets/icons/light_Logo.png";

const LightLogo = () => {
  return (
    <Image
      src={logo}
      alt="light logo for food company"
      quality={100}
      priority
      className="w-72 h-72 object-cover"
    />
  );
};

export default LightLogo;
