import React from 'react';
import styled from 'styled-components';



const HexCards = () => {
  return (
    <CardContainer>
      <CardLink href="https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/" target="_blank">
        <CardContent>
          <ImageContainer>
            <CardImage
              alt="IDC"
              src="https://static.hexnode.com/v2/assets/img/accolades/idc.png"
            />
          </ImageContainer>
          <CardText>
            Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
          </CardText>
        </CardContent>
      </CardLink>
      <Divider />
      <CardLink href="https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/" target="_blank">
        <CardContent>
          <ImageContainer>
            <CardImage
              alt="Gartner"
              src="https://static.hexnode.com/v2/assets/img/accolades/gartner.png"
            />
          </ImageContainer>
          <CardText>
            Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.
          </CardText>
        </CardContent>
      </CardLink>
      <Divider />
      <CardLink href="https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/" target="_blank">
        <CardContent>
          <ImageContainer>
            <CardImage
              alt="Forrester"
              src="https://static.hexnode.com/v2/assets/img/accolades/forrester.png"
            />
          </ImageContainer>
          <CardText>
            Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
          </CardText>
        </CardContent>
      </CardLink>
    </CardContainer>
  );
};

export default HexCards;


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 -10px;
  --tw-bg-opacity: 1;
  background-color: rgb(26 28 43 / var(--tw-bg-opacity));
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 -25px;
  }
  @media (min-width: 1280px) {
    margin: 0 -45px;
  }
`;

const CardLink = styled.a`
  display: flex;
  flex: 0 0 100%;
  max-width: 340px;
  padding: 40px 0;
  text-align: center;
  @media (min-width: 768px) {
    padding: 0 10px;
  }
  @media (min-width: 1024px) {
    padding: 0 25px;
  }
  @media (min-width: 1280px) {
    padding: 45px 45px;
  }
  text-decoration: none;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: baseline;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const CardImage = styled.img`
  width: 100%;
  max-width: 156px;
  height: 25px;
  object-fit: cover;
`;

const CardText = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Divider = styled.div`
  width: 107px;
  background-color: rgba(255, 255, 255, 0.2);
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 1px;
  }
`;
