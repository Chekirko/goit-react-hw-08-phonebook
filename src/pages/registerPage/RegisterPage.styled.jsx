import styled from '@emotion/styled';

export const RegWrapper = styled.div`
  padding: 20px;
  margin-left: auto;
  border: 1px solid black;
  border-radius: 10%;
  background-color: #ff7a05;
  width: 400px;
`;

export const RegTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 26px;
  text-align: center;
`;

export const ErrorText = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
  color: white;
`;

export const RegisterForm = styled.form`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  width: 320px;
  height: 270px;
  padding: 10px;
  margin-bottom: 40px;
  outline: 1px solid black;
  border-radius: 10%;
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
  margin: 0 auto;
  margin-top: 30px;
  width: 200px;
  cursor: pointer;
  background-color: black;
  border-radius: 10%;
  color: white;
`;
