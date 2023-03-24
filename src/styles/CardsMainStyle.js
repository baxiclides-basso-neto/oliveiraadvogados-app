import styled from "styled-components";

export const StyledCards = styled.section`
  padding: 2rem 0;
  background-color: #f9f9f9;
  color: #7b3f12;
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }

  .card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .card {
    position: relative;
    width: 280px;
    min-height: 520px;
    margin: 1rem 1rem;
    padding: 1rem 2rem 0;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    &:nth-child(odd) {
      animation: slide-in-left 0.5s forwards;
    }

    &:nth-child(even) {
      animation: slide-in-right 0.5s forwards;
    }

    @keyframes slide-in-left {
      0% {
        opacity: 0;
        transform: translateX(-100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slide-in-right {
      0% {
        opacity: 0;
        transform: translateX(100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    img {
      width: 100%;
      max-height: 150px;
      margin-bottom: 1rem;
    }
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    min-height: 100px;
  }

  p {
    font-size: 1.2rem;
    text-align: justify;
  }
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 320px;
  width: 320px;
  height: 3rem;
  margin-top: 1rem;
  margin-left: 0;
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
