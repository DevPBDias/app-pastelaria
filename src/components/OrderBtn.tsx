import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const OrderBtn = () => {
  return (
    <Link
      className="bg-secondary text-primary border-2 border-[var(--terciary)] content-center h-12 py-2 px-12 rounded-xl"
      href="/cart"
    >
      <p className="font-bold text-2xl">Ver pedido</p>
      <ShoppingBag color="#ea6a1f" size={24} />
    </Link>
  );
};

export default OrderBtn;
