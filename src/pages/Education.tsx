import React from 'react';
import CardWrapper from '../components/CardWrapper/CardWrapper.tsx';
import styled from 'styled-components';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CustomizedButton from '../components/CustomizedButton/CustomizedButton.tsx';

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f4f2ee;
    margin-top: 16px;
    padding: 0 10px;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        margin-top: 12px;
        padding: 0px;
    }
`;

const Card = styled(CardWrapper)`
    width: 250px;
    margin: 0px 8px;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid #eae7e1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-height: 400px; /* Set a maximum height */

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 12px;
        margin-left: 10px;
        margin-right: 10px;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f4f2ee;
`;

const Image = styled.img`
    width: 150px;
    height: 60px;
    object-fit: contain;
    padding: 10px;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px;
    overflow: hidden; /* Ensure content does not overflow */
`;

const CardTitle = styled.p`
    color: #666;
    font-size: 14px;
    margin: 0;
    padding-bottom: 5px;
`;

const CardLocation = styled.p`
    color: #666;
    font-size: 13px;
    margin: 5px 0;
`;

const CardDate = styled.p`
    color: #666;
    font-size: 14px;
    margin: 0;
`;

const CourseLink = styled.a`
    color: #666;
    opacity: 0.7;
    display: flex;
    &:hover {
        text-decoration: underline;
    }
    & svg {
        font-size: 15px;
    }
`;

const TopRightCorner = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const OpenIcon = styled(OpenInNewIcon)`
    font-size: 14px;
    color: #666;
`;

const CertificationsContainer = styled.div`
    width: 100%;
    background-color: #f4f2ee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    @media (max-width: 768px){
        margin-top: 0px
    }
`;

const CertificationTitle = styled.p`
    font-size: 18px;
    margin: 20px 0;
    color: #666;
`;

const CertificationGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding-bottom: 84px;
        gap: 13px;
    }
`;

const CertificationCard = styled(CardWrapper)`
    width: 360px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-height: 150px; /* Set a maximum height */

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        width: -webkit-fill-available;
        margin: 0px 10px;
    }
`;

const CertificationImage = styled.img`
    width: 50px;
    height: 50px;
    margin: 7px;
`;

const CertificationContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: hidden; /* Ensure content does not overflow */
`;

const CertificationName = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    color: #666
`;

const CertificationDetails = styled.p`
    font-size: 12px;
    color: #666;
    margin: 5px 0 0 0;
`;

const CertificationLink = styled.a`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: none;
    }
`;

const Education: React.FC<{}> = () => {
    return (
        <>
            <Container>
                <Card id="education-card-1" bgColor='white'>
                    <TopRightCorner>
                        <CustomizedButton borderRadius={20} padding='5px'>
                            <CourseLink href="#" target="_blank" rel="noopener noreferrer">
                                <OpenIcon />
                            </CourseLink>
                        </CustomizedButton>
                    </TopRightCorner>
                    <ImageContainer>
                        <Image src='#' />
                    </ImageContainer>
                    <Content>
                        <CardTitle><b>Degree Name</b></CardTitle>
                        <CardLocation><i>College Name, Country</i></CardLocation>
                        <CardDate>years/months(from and to)</CardDate>
                    </Content>
                </Card>
                <Card id="education-card-2" bgColor='white'>
                    <TopRightCorner>
                        <CustomizedButton borderRadius={20} padding='5px'>
                            <CourseLink href="#" target="_blank" rel="noopener noreferrer">
                                <OpenIcon />
                            </CourseLink>
                        </CustomizedButton>
                    </TopRightCorner>
                    <ImageContainer>
                        <Image src='#' />
                    </ImageContainer>
                    <Content>
                        <CardTitle><b>Name of Program/Degree</b></CardTitle>
                        <CardLocation><i>College Name, Address</i></CardLocation>
                        <CardDate>years(from and to)</CardDate>
                    </Content>
                </Card>
                <Card id="education-card-3" bgColor='white'>
                    <TopRightCorner>
                        <CustomizedButton borderRadius={20} padding='5px'>
                            <CourseLink href="#" target="_blank" rel="noopener noreferrer">
                                <OpenIcon />
                            </CourseLink>
                        </CustomizedButton>
                    </TopRightCorner>
                    <ImageContainer>
                        <Image src='#' />
                    </ImageContainer>
                    <Content>
                        <CardTitle><b>Name of Program/Degree</b></CardTitle>
                        <CardLocation><i>College Name, Address</i></CardLocation>
                        <CardDate>years(from and to)</CardDate>
                    </Content>
                </Card>
            </Container>
            <CertificationsContainer>
                <CertificationTitle>Certifications</CertificationTitle>
                <CertificationGrid>
                    <CertificationCard id="certificate-card-1" bgColor='white'>
                        <CertificationLink href='#' target='_blank' rel='noopener noreferrer'>
                            <CertificationImage src='#' />
                            <CertificationContent>
                                <CertificationName>Certificate Name</CertificationName>
                                <CertificationDetails>Certification Organization</CertificationDetails>
                            </CertificationContent>
                        </CertificationLink>
                    </CertificationCard>
                    <CertificationCard id="certificate-card-4" bgColor='white'>
                        <CertificationLink href='#' target='_blank' rel='noopener noreferrer'>
                            <CertificationImage src='#' />
                            <CertificationContent>
                                <CertificationName>Certificate Name</CertificationName>
                                <CertificationDetails>Certification Organization</CertificationDetails>
                            </CertificationContent>
                        </CertificationLink>
                    </CertificationCard>
                </CertificationGrid>
            </CertificationsContainer>
        </>
    );
};

export default React.memo(Education);