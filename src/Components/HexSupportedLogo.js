import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const logos = [
  {
    src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg",
    alt: "Costco"
  },
  {
    src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
    alt: "SAIC"
  },
  {
    src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg",
    alt: "Hilton"
  },
  {
    src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/group1-automotive.png",
    alt: "Group 1 Automotive"
  },
  {
    src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
    alt: "Marriott"
  },
  {
    src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
    alt: "Gorillas"
  },
  {
    src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg",
    alt: "Wolt"
  },
  {
    src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
    alt: "Merck"
  },
  {  
    src:"https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg",
    alt:"Lowe's"
  },
  {
    src:"https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg",
    alt:"polaris"
  }
];

function HexSupportedLogo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Section>
      <Wrapper>
        <GradientLeft />
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <LogoWrapper key={index}>
              <Logo src={logo.src} alt={logo.alt} />
            </LogoWrapper>
          ))}
        </Slider>
        <GradientRight />
      </Wrapper>
    </Section>
  );
}

export default HexSupportedLogo;

const Section = styled.section`
  padding-bottom: 60px;
  padding-top: 10px;
  background-color: #F7F7F7;
  @media (min-width: 768px) {
    padding-bottom: 120px;
    padding-top: 20px;
  }
`;

const Wrapper = styled.div`
  width: 88%;
  margin: 0 auto;
  max-width: 1300px;
  position: relative;
`;

const GradientLeft = styled.div`
  width: 70px;
  height: 40px;
  position: absolute;
  left: 0;
  background: linear-gradient(to right, #F7F7F7, transparent);
  z-index: 1;
  @media (min-width: 640px) {
    width: 100px;
    height: 80px;
  }
`;

const GradientRight = styled.div`
  width: 70px;
  height: 40px;
  position: absolute;
  right: 0;
  background: linear-gradient(to left, #F7F7F7, transparent);
  z-index: 1;
  @media (min-width: 640px) {
    width: 100px;
    height: 80px;
  }
`;

const LogoWrapper = styled.figure`
  display: block;
  max-width: 130px;
  width: 100%;
  @media (min-width: 640px) {
    max-width: 200px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  display: inline-block;
  color: transparent;
`;
