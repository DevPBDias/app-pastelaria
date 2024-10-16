import ChoiceBtn from "@/components/ChoiceBtn";
import LightLogo from "@/components/LightLogo";
import OrderBtn from "@/components/OrderBtn";
import React from "react";

const Menu = () => {
  return (
    <main className="px-36 py-28 content-center-col gap-16">
      <OrderBtn />
      <h1 className="font-regular text-6xl text-center w-1/2">
        <strong className="font-bold text-6xl text-center">1° PASSO:</strong>{" "}
        ESCOLHA O TAMANHO DO PASTEL QUE DESEJA ABAIXO.
      </h1>
      <section className="w-1/2 content-center-row flex-wrap gap-32">
        <ChoiceBtn
          name="3 INGREDIENTES 15CM - R$ 17,00"
          route="/salt/ingredients"
          sizeText="text-2xl"
        />
        <ChoiceBtn
          name="4 INGREDIENTES 20CM - R$ 21,00"
          route="/salt/ingredients"
          sizeText="text-2xl"
        />
        <ChoiceBtn
          name="5 INGREDIENTES 25CM - R$ 25,00"
          route="/salt/ingredients"
          sizeText="text-2xl"
        />
        <ChoiceBtn
          name="PASTEL PRONTO 15CM - R$ 15,00"
          route="/salt/made"
          sizeText="text-2xl"
        />
      </section>
      <LightLogo />
    </main>
  );
};

export default Menu;
