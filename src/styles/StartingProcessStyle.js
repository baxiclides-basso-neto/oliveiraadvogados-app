import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  background-color: #000;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;

  > h2 {
    color: #fff;
    margin-bottom: 2rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;

  }
`;

export const Card = styled.div`
  background-color: rgba(168, 150, 140, 0.55);
  width: 90%;
  min-height: 230px;
  border-radius: 0 10px 0px 10px;
  color: white;
  margin-bottom: 1rem;
  padding: 1rem 1rem 0;
  transition: 1s ease-out;

  &:hover{
    background-color: rgba(101, 78, 70, 0.8);
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 150%;
`;

export const IconImage = styled(Image)`
  background-color: #fff;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ContactButtonLegalProcess = styled.button`
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

export const ContactButtonIcon = styled(Image)`
  margin-right: 1rem;
  filter: invert(1);
`;
