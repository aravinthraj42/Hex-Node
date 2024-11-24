import React, { useState } from "react";
import styled from "styled-components";
import "swiper/swiper-bundle.css";


const tabs = [
  { id: "single", label: "Single App Kiosk", image: "/single-app-kios-image.webp" },
  { id: "multi", label: "Multi-App Kiosk", image: "/multi-app-kiosk-image.webp" },
  { id: "web", label: "Web-based Kiosk", image: "/web-based-kiosk-image.webp" },
  { id: "digital", label: "Digital Signages", image: "/digital-signage-kiosk-image.webp" },
  { id: "asam", label: "ASAM Kiosk", image: "/asam-kiosk-image.webp" },
];

const HexSlider = () => {
  const [activeTab, setActiveTab] = useState("single");

  return (
    <Section>
      <Title>Specific kiosk modes for unique use cases</Title>

      <TabContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabContainer>
      <div>
  {tabs
    .filter((tab) => tab.id === activeTab)
    .map((tab, index) => (
      <SlideWrapper key={index}>
        <ContentWrapper>
          <SlideContent>
            <h3>{tab.label}</h3>
            <p>Explore the unique features of {tab.label} mode.</p>
          </SlideContent>
          <SlideImage src={tab.image} alt={tab.label} />
        </ContentWrapper>
      </SlideWrapper>
    ))}
</div>

    </Section>
  );
};

export default HexSlider;


const Section = styled.section`
  padding: 60px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  max-width: 900px;
  margin: 0 auto 40px;
  color: #020a19;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;

  @media (min-width: 640px) {
    font-size: 40px;
    line-height: 1.3;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  border-bottom: 2px solid #f7f7f7;
`;

const Tab = styled.div`
  flex: 1;
  padding: 16px 30px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => (props.active ? "#ffffff" : "#020a19a0")};
  background-color: ${(props) => (props.active ? "#020a19" : "transparent")};
  border-bottom: ${(props) => (props.active ? "none" : "2px solid #f7f7f7")};
  transition: all 0.3s ease;
  text-align: center;
  border-radius: 5px;

  &:hover {
    color: ${(props) => (props.active ? "#ffffff" : "#020a19")};
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: fadeSlideIn 0.5s ease-in-out;

  @keyframes fadeSlideIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SlideWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const SlideImage = styled.img`
  width: 50%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SlideContent = styled.div`
  flex: 1;
  text-align: left;
  padding: 20px;
  font-size: 18px;
  color: #333333;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #020a19;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #666666;
  }
`;


