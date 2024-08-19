import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../components/CardWrapper/CardWrapper.tsx';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const AboutCardStyle: React.CSSProperties = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '680px',
    maxWidth: '90%',
    border: '1px solid #eae7e1'
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f4f2ee;
  margin-top: 16px;
  padding: 0 10px;
  @media (max-width: 768px){
    margin-top: 12px
  };
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 45px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 200px;
  object-fit: contain;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Title = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center;
  margin: 0;
  & b {
    display: block;
  }
  & i {
    font-size: 14px;
    display: block;
  }
`;

const TextContainer = styled.div`
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  line-height: 1.75;
  color: #333;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoItem = styled.p`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 14px;
  margin: 3px 0px;
  color: #666;
  & svg{
    font-size: 14px;
    margin-right: 5px;
  }
`;

const About: React.FC<{}> = () => {
  return (
    <Container>
      <CardWrapper id='about-card' bgColor='white' padding='25px' style={AboutCardStyle}>
        <InnerContainer>
          <ImageContainer>
            <Image src="#" />          
            <Title><b>Your Name</b><i>Title/Profession</i></Title>
          </ImageContainer>
          <TextContainer>
            <Paragraph>
              Summary
            </Paragraph>
            <InfoContainer>
              <InfoRow>
                <InfoItem><HomeIcon />Location: #</InfoItem>
                <InfoItem><LocalPhoneIcon />Phone: #</InfoItem>
                <InfoItem><EmailIcon />Email: #</InfoItem>
              </InfoRow>
            </InfoContainer>
          </TextContainer>
        </InnerContainer>
      </CardWrapper>
    </Container>
  );
}

export default React.memo(About);