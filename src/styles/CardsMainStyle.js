import styled from "styled-components";

export const StyledCards = styled.section`
  padding: 2rem 0;
  background-color: #f9f9f9;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
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
    min-height: 550px;
    margin: 1rem 1rem;
    padding: 1rem 2rem;
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

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      min-height: 130px;
    }

    p {
      font-size: 1.2rem;
      color: #333;
    }

    img {
      width: 100%;
      max-height: 150px;
      margin-bottom: 1rem;
    }
  }
`;
