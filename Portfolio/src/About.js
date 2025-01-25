import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Section>
      <Title>About Me</Title>
      <Content>
        <Text>
          Hello! I’m Jagath Vishnu, a passionate student currently working on developing my skills in various domains of technology. With a strong interest in Artificial Intelligence, Data Science, and software development, I strive to solve real-world problems through innovative solutions. I have experience working with machine learning models, data analysis, and web development. My aim is to continuously improve my knowledge and take on challenging projects that allow me to grow both personally and professionally. When I’m not coding, you can find me exploring the latest tech trends, reading, or working on personal development. I am excited about the future and the opportunities to make a positive impact in the world of technology!
        </Text>
      </Content>
    </Section>
  );
};

export default About;

// Styled Components
const Section = styled.section`
  padding: 4rem 2rem; /* Adjust padding for top and bottom */
  background-color: #eef2f3;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem; /* Added more space below the title */
  color:black; /* Optional: You can change the color */
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Ensure text is centered vertically and horizontally */
  padding: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  max-width: 800px; /* Adjust to fit your design */
  color: #333;
  font-style: italic;
  line-height: 1.6; /* Slightly larger line height for better readability */
`;
