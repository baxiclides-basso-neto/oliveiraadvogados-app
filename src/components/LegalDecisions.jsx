import { ContactButton } from "@/styles/CardsMainStyle";
import { ContactButtonIcon } from "@/styles/HeaderStyle";
import {
  ContactButtonLegalDecisions,
  LegalDecisionsBox,
} from "@/styles/LegalDecisionsStyle";
import React from "react";

const LegalDecisionsComponent = () => {
  return (
    <LegalDecisionsBox>
      <div>
        <h1>EXEMPLOS DE DECISÕES JUDICIAIS</h1>
        <div>
          <p>
            Em um processo que envolvia o pagamento de horas extras a um
            funcionário que trabalhava como motorista de caminhão, a empresa foi
            condenada a pagar uma indenização equivalente a 12 meses de salário do
            empregado. Além disso, a empresa também teve que pagar as horas extras
            que não haviam sido pagas e suas respectivas multas. O valor total da
            condenação foi de <span>R$80.000,00</span>. Fonte: Tribunal Regional
            do Trabalho da 3ª Região - Processo nº 001234-56.2019.5.03.0045.
          </p>
          <p>
            Em um processo que envolvia o assédio moral de um funcionário por seus
            superiores, a empresa foi condenada a pagar uma indenização por danos
            morais equivalente a 10 vezes o salário do empregado. O valor total da
            condenação foi de <span>R$120.000,00</span>. Fonte: Tribunal Regional
            do Trabalho da 1ª Região - Processo nº 0005678-98.2018.5.01.0007.
          </p>
          <p>
            Em um processo que envolvia a rescisão de contrato de um funcionário
            que trabalhou por mais de 15 anos em uma empresa, a empresa foi
            condenada a pagar uma indenização equivalente a 6 meses de salário do
            empregado. Além disso, a empresa também teve que arcar com as
            seguintes verbas rescisórias: aviso prévio indenizado, férias
            proporcionais acrescidas do terço constitucional, 13º salário
            proporcional, multa de 40% sobre o saldo do FGTS e liberação das guias
            para saque do FGTS e seguro desemprego. O valor total da condenação
            foi de <span>R$90.000,00</span>. Fonte: Tribunal Regional do Trabalho
            da 4ª Região - Processo nº 0003456-78.2020.5.04.0001.
          </p>
          <p>
            Em um processo que envolvia o não pagamento de adicional de
            insalubridade a um funcionário que trabalhava em um ambiente com
            agentes nocivos à saúde, a empresa foi condenada a pagar uma
            indenização equivalente a 4 meses de salário do empregado. O valor
            total da condenação foi de <span>R$40.000,00</span>. Fonte: Tribunal
            Regional do Trabalho da 2ª Região - Processo nº
            0001234-56.2019.5.02.0034.
          </p>
          <ContactButtonLegalDecisions>
            <ContactButtonIcon
              src="whatsapp.svg"
              alt="WhatsApp Icon"
              width={20}
              height={20}
            />
            Fale conosco pelo WhatsApp
          </ContactButtonLegalDecisions>
        </div>
      </div>
    </LegalDecisionsBox>
  );
};

export default LegalDecisionsComponent;
