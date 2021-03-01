import React, { useState } from 'react';
import {  
  SignUpContainer,
  EmailLabel,
  EmailInput,
  Subscribe
} from '../../style/newsletterSignup';


const styles = {
  displayNone: {
    display: 'none'
  },
};
export const NewsletterSignup = () => {
  const [ email, setEmail ] = useState('');

  return (
    <SignUpContainer>
      <h3>Want Updates?</h3>
      <form action="//saltea.us15.list-manage.com/subscribe/post?u=5d5b77745fe2a9906d9f92d95&amp;id=ed6f4004a9" method="post"  name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <EmailLabel html-for="mce-EMAIL">Email Address</EmailLabel>
        <EmailInput type="email" name="EMAIL"/>
        <Subscribe type="submit" value="Subscribe" name="subscribe" />
      </form>
    </SignUpContainer>
  );
}