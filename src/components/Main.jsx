import React from "react";
import CardsMain from "./CardsMain";
import LegalDecisionsComponent from "./LegalDecisions";
import StartingProcessComponent from "./StartingProcess";

const MainComponent = () => {
  return (
    <>
      <CardsMain />
      <LegalDecisionsComponent/>
      <StartingProcessComponent/>
    </>
  );
};

export default MainComponent;
