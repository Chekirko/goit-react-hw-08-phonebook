import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  padding: 10px;
  margin-bottom: 40px;
  outline: 1px solid black;
  border-radius: 10%;
  /* justify-content: center; */
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  font-size: 30px;
`;

export const FormInput = styled.input`
  margin-bottom: 20px;
  height: 60px;
  font-size: 16px;
  letter-spacing: 0.03em;
`;

export const SubmitBtn = styled.button`
  display: block;
  width: 100px;
  cursor: pointer;
  background-color: black;
  border-radius: 10%;
  color: white;
`;
