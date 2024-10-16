import ChoiceBtn from "@/components/ChoiceBtn";
import LightLogo from "@/components/LightLogo";
import OrderBtn from "@/components/OrderBtn";
import React from "react";

const Basket = () => {
  return (
    <main className="px-36 py-28 content-center-col gap-16">
      <OrderBtn />
      <h1 className="font-regular text-6xl text-center w-1/2">
        ESCOLHA A CESTA DE PASTEL COM A QUANTIDADE DESEJADA.
      </h1>
      <section className="w-1/2 content-center-row flex-wrap gap-32">
        <ChoiceBtn
          name="SUCOS NATURAIS"
          route="/drinks/organic"
          sizeText="text-2xl"
        />
        <ChoiceBtn
          name="REFRIGERANTES E CERVEJAS"
          route="/drinks/refri-beer"
          sizeText="text-2xl"
        />
      </section>
      <LightLogo />
    </main>
  );
};

export default Basket;
