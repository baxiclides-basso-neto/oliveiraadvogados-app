import React from "react";

import {
  HeaderWrapper,
  ContactButton,
  ContactButtonIcon,
  HeaderContent,
  HeaderDescSection,
  LogoSection,
  LogoText,
  SubTitle,
  Title,
  BackgroundImage,
} from "@/styles/HeaderStyle";

const HeaderComponent = () => {
  return (
    <HeaderWrapper>
      <BackgroundImage />
      <HeaderContent>
        <LogoSection>
          <LogoText>Logo</LogoText>
        </LogoSection>
        <HeaderDescSection>
          <Title>
            Escritório Especializado em Direito Trabalhista
          </Title>
          <SubTitle>
            Defendendo seus direitos trabalhistas desde 1988
          </SubTitle>
          <ContactButton>
            <ContactButtonIcon
              src="whatsapp.svg"
              alt="WhatsApp Icon"
              width={20}
              height={20}
            />
            Fale conosco pelo WhatsApp
          </ContactButton>
        </HeaderDescSection>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
