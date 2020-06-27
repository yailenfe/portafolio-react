import styled from "styled-components"

const PRIMARY_COLOR = "green";

export const Button = styled.button`
  display: inline-block;
  color: ${PRIMARY_COLOR};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: 3px;
  display: block;
`;

export const FilledButton = styled(Button)`
  color: white;
  background: ${PRIMARY_COLOR};
`;

export const RoundeddButton = styled(Button)`
    border-radius: 30px;
`;

export const RoundedFilleddButton = styled(FilledButton)`
    border-radius: 30px;
`;
