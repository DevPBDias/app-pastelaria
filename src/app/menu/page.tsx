import ChoiceBtn from "@/components/ChoiceBtn";
import LightLogo from "@/components/LightLogo";
import OrderBtn from "@/components/OrderBtn";
import React from "react";

const Menu = () => {
  return (
    <main className="px-36 py-28 content-center-col gap-16">
      <OrderBtn />
      <h1 className="font-medium text-6xl text-center w-1/2">
        COMECE O SEU PEDIDO, ESCOLHENDO O QUE DESEJA ABAIXO.
      </h1>
      <section className="w-1/2 content-center-row flex-wrap gap-32">
        <ChoiceBtn
          name="PASTEL SALGADO"
          route="/pastel-salgado"
          sizeText="text-2xl"
        />
        <ChoiceBtn
          name="PASTEL DOCE"
          route="/pastel-doce"
          sizeText="text-2xl"
        />
        <ChoiceBtn name="CESTA DE PASTÉIS" route="/cesta" sizeText="text-2xl" />
        <ChoiceBtn name="BEBIDAS" route="/bebidas" sizeText="text-2xl" />
      </section>
      <LightLogo />
    </main>
  );
};

export default Menu;
