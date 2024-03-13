import styled from "styled-components";

const Loading = styled.h3`
  &:before {
    content: "Carregando...";
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    animation: blink 1.5s infinite;

    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }

    }
`;

export default Loading;
