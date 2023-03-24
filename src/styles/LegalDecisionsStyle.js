import styled from "styled-components";

export const LegalDecisionsBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  color: #7b3f12;
  padding: 0 1rem;
  border: 1px solid transparent;

  > h1 {
    text-align: center;
    padding: 0 1rem;
    font-size: 1.8rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      text-align: justify;
      background-color: #fff;
      padding: 0.5rem;
      border-radius: 4px;

      span {
        font-weight: bolder;
      }
    }
  }
`;

export const ContactButtonLegalDecisions = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 320px;
  width: 320px;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background-color: #25d366;
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    animation-name: growAndShrink;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    background-color: #fff;
    color: #25d366;
    border: 1px solid #25d366;
    cursor: pointer;
  }

  @keyframes growAndShrink {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;
