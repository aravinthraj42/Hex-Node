import React, { useState } from "react";
import styled from "styled-components";
import "swiper/swiper-bundle.css";

const tabs = [
  {
    id: "Single App Kiosk",
    label: "Powerful Single-App Kiosk solutions for enhanced control",
    image: "/single-app-kios-image.webp",
    description: [
      {
        id: "1",
        text: "Provision the devices to run one specialized application, with limited functionalities."
      },
      {
        id: "2",
        text: "Customize the device settings to cater to a specific use-case each time."
      },
      {
        id: "3",
        text: "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode."
      },
      {
        id: "4",
        text: "Empower your administrators with full control over the kiosk devices."
      }
    ]
  },
  {
    id: "Multi-App Kiosk",
    label: "Elevate efficiency with Multi-App Kiosk",
    image: "/multi-app-kiosk-image.webp",
    description: [
      {
        id: "1",
        text: "Limit device access to approved apps, ensuring focus and productivity."
      },
      {
        id: "2",
        text: "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only."
      },
      {
        id: "3",
        text: "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control."
      },
      {
        id: "4",
        text: "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode."
      }
    ]
  },
  {
    id: "Web-based Kiosk",
    label: "Explore the new way to manage web apps and websites",
    image: "/web-based-kiosk-image.webp",
    description: [
      {
        id: "1",
        text: "Let users access essential and approved web apps, website and files only."
      },
      {
        id: "2",
        text: "Make the best use of website kiosk with Hexnode's advanced settings."
      },
      {
        id: "3",
        text: "Tailor your experience to match your unique use case."
      },
      {
        id: "4",
        text: "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience."
      }
    ]
  },
  {
    id: "Digital Signages",
    label: "Capture attention with Digital Signage Kiosks",
    image: "/digital-signage-kiosk-image.webp",
    description: [
      {
        id: "1",
        text: "Transform your devices into captivating digital signage kiosks that grab attention."
      },
      {
        id: "2",
        text: "Engage your audience with vibrant images and seamless video streaming.."
      },
      {
        id: "3",
        text: "Customize media files with trimming, muting, and background music."
      },
      {
        id: "4",
        text: "Advertise and show off your brand aesthetics to attract customers in different ways."
      },
      {
        id: "5",
        text: "Take control with Hexnode to reestablish your brand's presence."
      }
    ]
  },
  {
    id: "ASAM Kiosk",
    label: "Unlock the power of Autonomous Single App Mode (ASAM)",
    image: "/asam-kiosk-image.webp",
    description: [
      {
        id: "1",
        text: "A feature that empowers your iOS app to seamlessly secure itself in the foreground."
      },
      {
        id: "2",
        text: "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications."
      },
      {
        id: "3",
        text: "Create focused, efficient and secure digital environments to match your requirements"
      },
      {
        id: "4",
        text: "Configure ASAM effortlessly and elevate your user experience like never before."
      }
    ]
  },
];

const HexSlider = () => {
  const [activeTab, setActiveTab] = useState("Single App Kiosk");

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
            {tab.id}
          </Tab>
        ))}
      </TabContainer>
      <div>
        {tabs
          .filter((tab) => tab.id === activeTab)
          .map((tab) => (
            <SlideWrapper key={tab.id}>
              <ContentWrapper>
                <SlideContent>
                  <h3>{tab.label}</h3>
                  <ul>
                  {tab.description.map((desc) => (
                    <ListItem key={desc.id}>{desc.text}</ListItem>
                  ))}
                  </ul>
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

const ListItem = styled.li` 
font-size: 16px; 
line-height: 1.6;
 color: #666666; 
 list-style: none;
  margin-bottom: 10px; 
  display: flex; 
  align-items: center; 
  &:before { 
    content: "✔"; 
    color: green; 
    margin-right: 10px; 
  } `;
