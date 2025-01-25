import React from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <Hero>
      <Content>
        <Greeting>Hello There !!</Greeting>
        <Name>
          I'm <span>Jagath Vishnu</span>
        </Name>
        <Description>I'm a student currently upgrading my skills.</Description>
        {/* Ensure that the CV file is in the public folder */}
        <DownloadButton>
          <FaDownload />
          <a href="/Jagath resume.pdf" download style={{ color: 'white', textDecoration: 'none' }}>Download CV</a>
        </DownloadButton>
      </Content>
      <Image>
        {/* Ensure the image file is in the public folder */}
        <img src="/profilepic.png" alt="Profile" />
      </Image>
    </Hero>
  );
};

export default HeroSection;

// Styled Components
const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #eef2f3;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 50%;
  p {
    margin: 1rem 0;
  }
  h1 {
    font-size: 2.5rem;
    span {
      color: #ff3b3b;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Greeting = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const DownloadButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff3b3b;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const Image = styled.div`
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    img {
      width: 120px;
      height: 120px;
    }
  }
`;
