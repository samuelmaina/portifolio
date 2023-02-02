import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #cacdd2;
  padding: 20px;
  width: 95%;
  border-radius: 5px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin: 0;
  }
`;

export const StyledLabel = styled.label`
  margin-top: 20px;
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${(props) => (props.invalid ? "red" : "black")};
`;

export const Required = styled.span`
  margin-top: 20px;
  margin-right: 5px;
  font-weight: bold;
  color: red;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
  opacity: ${(props) => (!props.enabled ? 0.5 : 1)};
`;

export const StyledAlert = styled.div`
  padding: 10px;
  background-color: ${(props) => (props.isPositive ? "green" : " red")};
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`;
