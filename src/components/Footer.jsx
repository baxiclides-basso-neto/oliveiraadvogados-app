import React from "react";
import Image from "next/image";
import { Footer } from "@/styles/FooterStyle";
const FooterComponent = () => {
  return (
    <Footer>
      <h4>Rua das Acácias, 123 - Centro, São Paulo/SP, 01010-010, Brasil</h4>
      <div>
        <div>
          <Image
            src="phone-solid.svg"
            alt="Íconte do telefone"
            width={20}
            height={20}
          />
          <span>(11)9998-0076</span>
        </div>
      </div>
      <div>
        <div>
          <Image
            src="envelope-solid.svg"
            alt="Íconte do telefone"
            width={20}
            height={20}
          />
          <span>contato@fernandesesilvaadv.com.br</span>
        </div>
      </div>
      <h5>&copy; Todos os direitos reservados</h5>
    </Footer>
  );
};

export default FooterComponent;
