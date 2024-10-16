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
          name="CESTA COM 6 PASTÉIS"
          route="/basket/6-made"
          sizeText="text-2xl"
        />
        <ChoiceBtn
          name="CESTA COM 8 PASTÉIS"
          route="/basket/8-made"
          sizeText="text-2xl"
        />
        <ChoiceBtn
          name="CESTA COM 10 PASTÉIS"
          route="/basket/10-made"
          sizeText="text-2xl"
        />
        <ChoiceBtn
          name="CESTA COM 12 PASTÉIS"
          route="/basket/12-made"
          sizeText="text-2xl"
        />
      </section>
      <LightLogo />
    </main>
  );
};

export default Basket;
