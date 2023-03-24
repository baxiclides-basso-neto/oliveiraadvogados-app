import { ContactButton, StyledCards } from "@/styles/CardsMainStyle";
import { ContactButtonIcon } from "@/styles/HeaderStyle";
import Image from "next/image";
import React from "react";

const CardsMain = () => {
  return (
    <StyledCards>
      <h2>
        Conheça os direitos que um advogado trabalhista pode defender em seu
        nome:
      </h2>
      <div className="card-list">
        <div className="card">
          <Image
            src="/saudeImg.jpg"
            alt="saude no trabalho"
            width={250}
            height={250}
          />
          <h3>
            Direitos trabalhistas relacionados à saúde e segurança no trabalho
          </h3>
          <p>
            Seu advogado pode ajudá-lo a garantir que seu ambiente de trabalho
            seja seguro e saudável, além de protegê-lo contra práticas
            discriminatórias ou de retaliação.
          </p>
        </div>
        <div className="card">
          <Image
            src="/remuneracaoImg.jpg"
            alt="Remuneracao no trabalho"
            width={250}
            height={250}
          />
          <h3>Direitos trabalhistas relacionados à remuneração e benefícios</h3>
          <p>
            Seu advogado pode ajudá-lo a garantir que você receba a remuneração
            correta, incluindo horas extras e outros benefícios previstos em
            lei.
          </p>
        </div>
        <div className="card">
          <Image
            src="/salarioFamiliaImg.jpg"
            alt="Salario Família"
            width={250}
            height={250}
          />
          <h3>Direitos trabalhistas relacionados ao salário-família</h3>
          <p>
            Seu advogado pode ajudá-lo a garantir que você receba o
            salário-família correto, que é um benefício pago pela Previdência
            Social para os trabalhadores de baixa renda com filhos menores de 14
            anos.
          </p>
        </div>
        <div className="card">
          <Image
            src="/estabilidadeImg.webp"
            alt="Estabilidade no emprego"
            width={250}
            height={250}
          />
          <h3>Direitos trabalhistas relacionados à estabilidade no emprego</h3>
          <p>
            Seu advogado pode ajudá-lo a garantir que você não seja demitido
            injustamente e que seus direitos de estabilidade no emprego sejam
            respeitados.
          </p>
        </div>
        <div className="card">
          <Image
            src="/feriasImg.jpg"
            alt="Direito de férias"
            width={250}
            height={250}
          />
          <h3>
            Direitos trabalhistas relacionados à jornada de trabalho e férias
          </h3>
          <p>
            Seu advogado pode ajudá-lo a garantir que suas horas de trabalho
            sejam respeitadas, incluindo intervalos e férias remuneradas.
          </p>
        </div>
      </div>
      <ContactButton>
          <ContactButtonIcon
            src="whatsapp.svg"
            alt="WhatsApp Icon"
            width={20}
            height={20}
          />
          Fale conosco pelo WhatsApp
        </ContactButton>
    </StyledCards>
  );
};

export default CardsMain;
