import React, { useState } from 'react';
import styled from 'styled-components';


const HexSignup = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setErrorMessage('Email is required.');
      setSuccessMessage('');
    } else if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage(`Check Your Email: ${email} for next Steps`);
      // Further submission logic can go here
    }
  };

  return (
    <SignupWrapper>
      <SignupContainer>
        <HeaderContainer>
          <Heading>Sign up and try Hexnode free for 14 days!</Heading>
        </HeaderContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputField
                placeholder="Your Work Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SubmitButton type="submit">Get Started</SubmitButton>
              </InputGroup>
            {errorMessage && (
              <Message aria-live="polite" error>
                {errorMessage}
              </Message>
            )}
            {successMessage && (
              <Message aria-live="polite">{successMessage}</Message>
            )}
          </Form>
          <InfoText>
            No credit cards required.{' '}
            <Link href="https://www.hexnode.com/mobile-device-management/request-demo/">
              Request a demo
            </Link>
          </InfoText>
        </FormContainer>
        </SignupContainer>
    </SignupWrapper>
  );
};

export default HexSignup;

// Styled-components

const SignupWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 40px 0;
  text-align: center;
`;

const SignupContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(2, 10, 25);
  border-radius: 0px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Heading = styled.h3`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  line-height: 1.3;
  text-align: center;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const FormContainer = styled.div`
  margin: 0 auto;
`;

const Form = styled.form`
  margin: 0;
  padding: 0;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row; /* Arrange input and button in a row */
  align-items: center; /* Align input and button vertically */
  justify-content: center; /* Center the input group */
  gap: 15px; /* Add space between input field and button */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack input and button vertically on smaller screens */
    gap: 20px; /* Increase gap for better spacing on small screens */
  }
`;

const InputField = styled.input`
  font-size: 16px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80%; /* Reduced width */
  max-width: 400px; /* Sets a maximum width for larger screens */
  box-sizing: border-box;
  text-align: center; /* Centers text inside the input */

  &::placeholder {
    color: #c6c6c6;
  }
`;


const SubmitButton = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: #dd0735;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #bb022a;
  }
`;

const Message = styled.p`
  font-size: 14px;
  color: ${(props) => (props.error ? '#ff4d4f' : '#28a745')}; /* Red for error, green for success */
  margin: 10px 0 0;
  text-align: center;
  width: 100%;
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #556575;
  margin-top: 15px;
  text-align: center;
`;

const Link = styled.a`
  font-size: 14px;
  color: #dd0735;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #bb022a;
  }

  &::after {
    content: '→';
    margin-left: 5px;
  }
`;
