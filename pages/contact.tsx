import React from 'react';
import {
  ContactContainer,
  InputContainer,
  ContactTitle,
  CommonInput,
  Remark,
  SendButton
} from '../style/contact';

const Contact = () => {
  return (
    <ContactContainer >
      <ContactTitle>Contact Saltea.</ContactTitle>
      <InputContainer>
        <CommonInput type="text" placeholder="Name" />
        <CommonInput type="text" placeholder="Email" />
        <Remark placeholder="Message" />
        <SendButton>Send</SendButton>
      </InputContainer>
    </ContactContainer>
  );
}

export default Contact;