import React from "react";

import {
  Container,
  Card,
  Paragraph,
  Title,
  IconImage,
  ContactButtonLegalProcess,
  ContactButtonIcon,
} from "@/styles/StartingProcessStyle";

const StartingProcessComponent = () => {
  return (
    <Container>
      <h2>Como Iniciar o Processo</h2>
      <div>
        <Card>
          <IconImage
            src="/FaleConosco.svg"
            alt="Fale Conosco"
            width={20}
            height={20}
          />
          <Title>Fale conosco</Title>
          <Paragraph>
            Entre em contato conosco clicando no botão abaixo e agende uma
            reunião. Estamos prontos e preparados para lhe atender com a
            qualidade e eficiência!
          </Paragraph>
        </Card>
        <Card>
          <IconImage
            src="/Orientacao.svg"
            alt="Orientacao"
            width={20}
            height={20}
          />
          <Title>Orientação</Title>
          <Paragraph>
            Iremos fornecer orientações claras e precisas sobre todo o processo,
            todo o suporte e direcionamento necessário.
          </Paragraph>
        </Card>
        <Card>
          <IconImage
            src="/Solution.svg"
            alt="Solution"
            width={20}
            height={20}
          />
          <Title>Solução</Title>
          <Paragraph>
            Através de nossa vasta experiência, buscaremos as melhores
            alternativas, levando em conta a complexidade única da sua situação.
            Conte conosco para lutar pelos seus interesses e defender a sua
            causa.
          </Paragraph>
        </Card>
        <ContactButtonLegalProcess>
          <ContactButtonIcon
            src="whatsapp.svg"
            alt="WhatsApp Icon"
            width={20}
            height={20}
          />
          Fale conosco pelo WhatsApp
        </ContactButtonLegalProcess>
      </div>
    </Container>
  );
};

export default StartingProcessComponent;
