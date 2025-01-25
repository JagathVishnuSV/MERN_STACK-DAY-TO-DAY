import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Section>
      <Title>Contact Me</Title>
      <Details>
        <Detail>
          <Label>Email:</Label>
          <Value>jagathvishnu@gmail.com</Value>
        </Detail>
        <Detail>
          <Label>Phone:</Label>
          <Value>+123 456 7890</Value>
        </Detail>
        <Detail>
          <Label>Address:</Label>
          <Value>Coimbatore, Tamilnadu, India</Value>
        </Detail>
        <Detail>
            <Label>Linkedin:</Label>
            <Value>jagathvishnu.linkedin</Value>
        </Detail>
        <Detail>
            <Label>Github:</Label>
            <Value><a href='https://github.com/JagathVishnuSV'>JagathVishnuSV</a></Value>
        </Detail>
      </Details>
    </Section>
  );
};

export default Contact;

// Styled Components
const Section = styled.section`
  padding: 2rem;
  background-color: #eef2f3;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Detail = styled.div`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 500px;
  align-items: center;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
  
`;

const Value = styled.span`
  font-style: italic;
  color: #555;
`;
