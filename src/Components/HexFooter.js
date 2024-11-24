import React from "react";
import styled from "styled-components";


const footerBottomBar = {
  language_data: {
    img: "/assets/img/country-flags/english.png",
    txt: "English",
    url: "en",
    title: "Choose language",
    alt: "english",
  },
  policy_detail: [
    {
      label: "Terms of Use",
      link: "https://www.hexnode.com/legal/terms-of-use/",
    },
    {
      label: "Privacy",
      link: "https://www.hexnode.com/legal/privacy-policy/",
    },
    {
      label: "Cookies",
      link: "https://www.hexnode.com/legal/cookies-policy/",
    },
  ],
  copy_right: "Copyright © 2024 Mitsogo Inc. All Rights Reserved.",
};

const HexFooter = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <PolicyList>
            {footerBottomBar.policy_detail.map((policy, index) => (
              <PolicyItem key={index}>
                <PolicyLink href={policy.link}>{policy.label}</PolicyLink>
              </PolicyItem>
            ))}
          </PolicyList>
          <CopyRight>{footerBottomBar.copy_right}</CopyRight>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default HexFooter;

// Styled Components
const FooterContainer = styled.div`
  background-color: #f2f2f2;
  padding: 30px 0;

  @media (max-width: 640px) {
    padding: 20px 0;
  }
`;

const FooterWrapper = styled.div`
  width: 88%;
  margin: 0 auto;
  max-width: 1300px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PolicyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PolicyItem = styled.li`
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;

  &::after {
    content: "-";
    margin: 0 5px;
    opacity: 0.8;
  }

  &:last-child::after {
    content: "";
  }
`;

const PolicyLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  line-height: 24px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #020a19;
  }
`;

const CopyRight = styled.p`
  font-size: 12px;
  line-height: 24px;
  font-weight: 500;
  color: #666;
  margin: 0;
`;
