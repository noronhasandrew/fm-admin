import styled from "styled-components";

function InputContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #87b2c7;
  background-color: #f2f8fa;
  border-radius: 3px;
  padding: 1rem;
  margin: 1rem 0 0.5rem 0;
`;

export default InputContainer;
