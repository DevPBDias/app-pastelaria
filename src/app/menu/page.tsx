import ChoiceBtn from "@/components/ChoiceBtn";
import LightLogo from "@/components/LightLogo";
import OrderBtn from "@/components/OrderBtn";
import React from "react";

const Menu = () => {
  return (
    <main>
      <OrderBtn />
      <h1>COMECE O SEU PEDIDO, ESCOLHENDO O QUE DESEJA ABAIXO.</h1>
      <section>
        <ChoiceBtn
          name="PASTEL SALGADO"
          route="/pastel-salgado"
          sizeText="font-3xl"
        />
        <ChoiceBtn
          name="PASTEL DOCE"
          route="/pastel-doce"
          sizeText="font-3xl"
        />
        <ChoiceBtn name="CESTA DE PASTÉIS" route="/cesta" sizeText="font-3xl" />
        <ChoiceBtn name="BEBIDAS" route="/bebidas" sizeText="font-3xl" />
      </section>
      <LightLogo />
    </main>
  );
};

export default Menu;
