import React, { useState } from 'react';
import styled from 'styled-components';
// import PlatformsSupported from './HexPlatformSupported';
// import Cards from './HexCards'
// import HexNodeFeature from './HexFeature';
// import RunningLogos from './HexSupportedLogo'
// import Footer from './HexFooter';
// import SignupComponent from './HexSignup'
// import SliderComponent from './HexSlider'


function HexMainPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleValidation = () => {
    if (email === '') {
      setMessage({ text: 'Email field cannot be empty.', error: true });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setMessage({ text: 'Invalid email format! Please Check your Email', error: true });
    } else {
      setMessage({ text: 'We Will Get Back Soon', error: false });
    }
  };

  return (
    <>
    <Container>
      <Content>
        <HeaderField>
          Turn your devices into <br /> kiosks in a few minutes <br /> with Hexnode UEM
        </HeaderField>
        <Form>
          <FormRow>
            <EmailField
              type="email"
              placeholder="Your Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ButtonField onClick={handleValidation}>GET STARTED NOW!</ButtonField>
          </FormRow>
          {message && <Message error={message.error}>{message.text}</Message>}
        </Form>
      </Content>
      <ImageContainer>
        <Image
          src="/hexnode-kiosk.webp" // Replace with your image URL
          alt="Device kiosks"
        />
      </ImageContainer>
      </Container>
    </>
  );
}

export default HexMainPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(2, 10, 25);
  border-radius: 0px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 20px;
  // background-color: rgb(2, 10, 25); /* Apply background color */
  display: flex;
  flex-direction: column; /* Stack the content vertically */

  @media (max-width: 768px) {
    flex: 1 1 100%; /* Ensure Content takes full width on small screens */
    padding-right: 0; /* Remove padding-right on small screens */
  }
`;

const HeaderField = styled.h2`
  color: white;
  margin: 0;
  padding-bottom: 20px;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
`;

const EmailField = styled.input`
  padding: 10px;
  flex: 1;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const ButtonField = styled.button`
  color: #fff;
  background-color: #dd0735;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #bb022a;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  color: ${props => (props.error ? 'grey' : 'white')};
`;

const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
    order: -1; /* Move the image above the form on small devices */
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
`;
