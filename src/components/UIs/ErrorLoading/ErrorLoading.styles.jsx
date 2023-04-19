import styled from "styled-components";

export const ErrorLoadingContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorText = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  max-width: 581px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Button = styled.button`
  min-width: 158px;
  height: 38px;
  background: #f16e00;
  border: none;
  box-shadow: 0px 101px 80px rgba(0, 0, 0, 0.07),
    0px 42.1954px 33.4221px rgba(0, 0, 0, 0.0543167),
    0px 22.5597px 17.869px rgba(0, 0, 0, 0.0514083),
    0px 12.6468px 10.0172px rgba(0, 0, 0, 0.0477214),
    0px 6.7166px 5.32008px rgba(0, 0, 0, 0.0399575),
    0px 2.79493px 2.21381px rgba(0, 0, 0, 0.0253409);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffffff;
`;
