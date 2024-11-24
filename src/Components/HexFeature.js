import React from 'react';
import styled from 'styled-components';

function HexFeature() {
  return (
    <Container>
      <Title>What additional possibilities does the <br /> Kiosk mode offer?</Title>
   {/* Adding space after the title */}
      <Content>
        <Image 
          src="\effortless-kiosk-deployement-image.webp" // Replace with your image URL
          alt="Device kiosks"
        />
        <Section>
          <SectionTitle>Effortless kiosk deployment & management</SectionTitle>
          <Paragraph>
            Deploy kiosk-enabled devices straight out of the box. 
            Flash a custom <br /> Android Enterprise, Samsung Knox or 
            ROM with Hexnode App on <br /> the devices by collaborating with 
            OEM vendors who provide specially configured <br /> ROMs.
          </Paragraph>
          <Spacing /> 
          <SectionTitle>What more can you do with Hexnode kiosk?</SectionTitle>
          <Spacing /> 
          <SectionTitle>Secure and update your app ecosystem</SectionTitle>
          <Spacing /> 
          <SectionTitle>Provide an easy-to-use interface for end-users</SectionTitle>
        </Section>
      </Content>
    </Container>
  );
}

export default HexFeature;

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Spacing = styled.div`
  height: 20px; /* Adding space after the title */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 20px 100px;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 80%;
  max-width: 500px;
  margin-bottom: 20px;
  border-radius: 10px;

  @media (min-width: 769px) {
    width: 40%;
    max-width: 500px;
  }
`;

const Section = styled.section`
  flex: 1;
  min-width: 300px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SectionTitle = styled.h3`
  margin: 20px 0;
`;

const Paragraph = styled.p`
  margin: 10px 0;
`;
