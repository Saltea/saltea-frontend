import React from 'react';
import {
  ContactContainer,
  InputContainer,
  ContactTitle,
  CommonInput,
  SendButton
} from '../style/contact'; 

const Login = () => {
  return (
    <ContactContainer >
      <ContactTitle>Get in here.</ContactTitle>
      <InputContainer>
        <CommonInput type="text" placeholder="Username" />
        <CommonInput type="text" placeholder="Password" />
        <SendButton>Login</SendButton>
      </InputContainer>
    </ContactContainer>
  );
};
export default Login;