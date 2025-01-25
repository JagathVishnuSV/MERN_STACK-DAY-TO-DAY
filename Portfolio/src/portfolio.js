import React from 'react';
import styled from 'styled-components';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1: Job Scraping and Listing',
      description: 'Scraping day to day jobs available onlice and listing them.',
      link: 'https://github.com/JagathVishnuSV/Job-scraping-and-listing-', // Add actual project link if available
    },
    {
      title: 'Project 2: Medical Cost Forecasting',
      description: 'A predictive model for forecasting medical costs based on patient details using gradient boosting techniques.',
      link: 'https://github.com/JagathVishnuSV/Medical-Cost-Forecasting-',
    },
    {
      title: 'Project 3: Multimedia Steganography : Concealing and Revealing Information',
      description: 'Developed an end-to-end steganography system for secure data embedding and extraction in multimedia files.',
      link: 'https://github.com/JagathVishnuSV/steganography',
    },
    {
      title: 'Project 4: Ticketing & Seat Allocation System',
      description: 'A Java-based ticket booking system for large events with seat selection and user authentication features.',
      link: '#',
    },
    // Add more projects here
  ];

  return (
    <Section>
      <Title>Projects</Title>
      <Content>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank">
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </Content>
    </Section>
  );
};

export default Portfolio;

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

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
