import Link from "next/link";

interface BtnProps {
  route: string;
  name: string;
  sizeText: string;
}

const ChoiceBtn = ({ route, name, sizeText }: BtnProps) => {
  return (
    <Link
      className="bg-light text-primary content-center-col h-64 w-64 rounded-xl shadow-xl"
      href={`${route}`}
    >
      <p className={`font-bold ${sizeText} text-secondary w-2/3 text-center`}>
        {name}
      </p>
    </Link>
  );
};

export default ChoiceBtn;
