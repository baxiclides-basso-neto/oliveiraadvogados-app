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
`;

export const Card = styled.div`
  background-color: rgba(168, 150, 140, 0.55);

  border-radius: 0 10px 0px 10px;
  color: white;
  margin-bottom: 1rem;
  padding: 1rem;
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
  padding: 0.5rem;
  border-radius: 50%;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.2);
  }
`;
