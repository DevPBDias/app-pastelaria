import Link from "next/link";

interface BtnProps {
  route: string;
  name: string;
  sizeText: string;
}

const ChoiceBtn = ({ route, name, sizeText }: BtnProps) => {
  return (
    <Link
      className="bg-light text-primary content-center h-12 py-2 px-12 rounded-xl"
      href={`${route}`}
    >
      <p className={`font-bold ${sizeText}`}>{name}</p>
    </Link>
  );
};

export default ChoiceBtn;
