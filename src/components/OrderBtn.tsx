import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const OrderBtn = () => {
  return (
    <Link
      className="bg-primary text-terciary border-2 border-[var(--terciary)] content-center-row h-12 w-60 rounded-xl gap-4 absolute top-9 right-9 shadow-lg"
      href="/cart"
    >
      <p className="font-bold text-2xl">Ver pedido</p>
      <ShoppingBag color="#ea6a1f" size={24} />
    </Link>
  );
};

export default OrderBtn;
