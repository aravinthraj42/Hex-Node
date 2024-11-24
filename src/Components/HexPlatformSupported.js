import React from 'react';
import styled from 'styled-components';


const platforms = [
  {
    alt: 'Android',
    src: 'https://static.hexnode.com/v2/assets/img/ads-pages/platform/android.svg',
  },
  {
    alt: 'Windows',
    src: 'https://static.hexnode.com/v2/assets/img/ads-pages/platform/windows.svg',
  },
  {
    alt: 'iOS',
    src: 'https://static.hexnode.com/v2/assets/img/ads-pages/platform/ios.svg',
  },
  {
    alt: 'Android TV',
    src: 'https://static.hexnode.com/v2/assets/img/ads-pages/platform/android-tv.svg',
  },
  {
    alt: 'Apple TV',
    src: 'https://static.hexnode.com/v2/assets/img/ads-pages/platform/apple-tv.svg',
  },
  {
    alt: 'Amazon Fire',
    src: 'https://static.hexnode.com/v2/assets/img/ads-pages/platform/amazon-fire.png',
  }
];

function HexPlatformSupported() {
  return (
  <>
    <Container>
      <Heading>Platforms supported</Heading>
      <LogosWrapper>
        {platforms.map((platform, index) => (
          <LogoContainer key={index}>
            <Logo src={platform.src} alt={platform.alt} loading="lazy" />
          </LogoContainer>
        ))}
      </LogosWrapper>
    </Container>
   
    </>
  );
}

export default HexPlatformSupported;

// Styled-components
const Container = styled.div`
  max-width: 1300px;
  width: 88%;
  margin: 0 auto;
  text-align: center;
  background-color: #ffffff; /* White background */
  padding: 40px 40px;
`;

const Heading = styled.h2`
  color: #020a19;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  line-height: 40px;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const LogoContainer = styled.div`
  flex: 1 1 calc(100% / 6 - 20px);
  max-width: 150px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    flex: 1 1 calc(100% / 3 - 20px);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(100% / 2 - 20px);
  }
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;
