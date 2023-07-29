import React from 'react';
import { Container } from '../common/Container/index';
import contact from '../../Assets/contact.svg';
import { Wrapper, Details, Thumbnail} from './styles';
import ContactForm from './ContactForm/index';
import './Contact.css';

function Contact(){
  return(
    <div>
      <h1 className='Contact-head'>Contact Me</h1>
    <Wrapper as={Container} id="contact">
      
      <Details>
        <ContactForm />
      </Details>
      <Thumbnail>
        <img src={contact} alt="Vishal Working" />
      </Thumbnail>
    </Wrapper>
    </div>
    
  );
};

export default Contact;
