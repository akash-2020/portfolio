import React, { useState, FormEvent, useEffect } from 'react';
import CardWrapper from '../components/CardWrapper/CardWrapper.tsx';
import styled from 'styled-components';
import CustomizedButton from '../components/CustomizedButton/CustomizedButton.tsx';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px){
    display: contents;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;

  &:focus {    
    border-color: #007BFF;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
    @media (max-width: 768px){
        width: -webkit-fill-available;
        margin-bottom: 10px;
    }
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 150px;
  resize: vertical;
  width: 100%;

  &:focus {
    border-color: #007BFF;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
    @media (max-width: 768px){
        width: -webkit-fill-available;
        margin-bottom: 10px;
    }
`;

const Result = styled.span<{ success: boolean }>`
  margin-top: 1rem;
  font-size: 1rem;
  color: ${({ success }) => (success ? 'green' : 'red')};
  text-align: center;
`;

const StyledButton = styled(CustomizedButton)`
  width: fit-content;
  padding: 8px;

  @media (max-width: 768px) {
    width: -webkit-fill-available;
    margin-bottom: 10px;
  }
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
    @media (max-width: 768px){
        flex-direction: column;
        margin-top: 12px;
        margin-left: 10px;
        margin-right: 10px;
    }
`

const ContactFormCard = styled(CardWrapper)`
    overflow: visible !important;
    width: 400px;
    @media (max-width: 768px){
        width: auto;
    }
`

const ContactCard = styled(CardWrapper)`
    border-left: 1px solid #eae7e1;
    padding-left: 40px;
    margin-left: 40px;
    width: 300px;
    margin-top: 16px;
    color: #666;
    line-height: 2;
    font-size: 14px;
    @media (max-width: 768px){
        border-left: none;
        padding-left: 0px ;
        margin-left: 0px;
        width: auto;
        margin-top: 10px
    }
`

const Typewriter = styled.div`
  font-family: monospace;
  display: inline-block;
  overflow: hidden;
  border-right: 0.15em solid orange; /* The cursor */
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 1.5s steps(40, end), blink-caret 0.75s step-end infinite;
  max-width: 100%;
  margin-left: -5px;
    color: #666;
  @keyframes typing {
    from { width: 0; }
    to { width: 35%; }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: orange; }
  }

  @media (max-width: 768px){
    margin-left: 5px;
  }
`;

const P = styled.p`
    display: flex;
    align-items: center;
    margin-left: 3px;
`

const Img = styled.img`
    width: 12px;
    margin-right: 5px;
    margin-top: 2px;
`

const ContactTitle = styled.p`
    color: #666;
    border-bottom: 1px solid #eae7e1; 
    font-weight: 500; 
    margin-bottom: 5px;
    margin-left: 3px;
    letter-spacing: 0.025em;
`


const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (result && success) {
      const timer = setTimeout(() => {
        setResult("");
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [result, success]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;

    if (!form) {
      setResult("Form not found");
      setSuccess(false);
      setLoading(false);
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", "your-api-key-here");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message has been delivered");
        setSuccess(true);
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("An error occurred while submitting the form");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
        <Div>
            <ContactFormCard id='contact-form'>
                <Typewriter>Drop me a mail..</Typewriter>
                <Form onSubmit={onSubmit}>
                    <Input placeholder='Name' type="text" name="name" required />
                    <Input placeholder='Email' type="email" name="email" required />
                    <Textarea placeholder='Message' name="message" required></Textarea>

                    <StyledButton variant='primary' loading={loading} onClick={()=>onSubmit}>Submit Form</StyledButton>
                    {result && <Result success={success}>{result}</Result>}
                </Form>        
            </ContactFormCard>
            <ContactCard id='contact-details-card'>
                <ContactTitle>Reach out to me</ContactTitle>
                <P><Img src='red-email-icon.jpg' />Email: #</P>
                <P><Img src='phone-icon.jpg' />Phone: #</P>
                <P><Img src='linkedin-icon.jpg' />Linkedin: <a style={{marginLeft: '4px', color: '#666'}} href="#" target="_blank" rel="noopener noreferrer">Your Profile Name</a></P>
                <P><Img src='github-icon.jpg' />Github: <a style={{marginLeft: '4px', color: '#666'}} href="#" target="_blank" rel="noopener noreferrer">Your Profile Name</a></P>
                <P><Img src='location-icon.jpg' />Location: #</P>
            </ContactCard>
        </Div>
  );
}

export default React.memo(Contact);



