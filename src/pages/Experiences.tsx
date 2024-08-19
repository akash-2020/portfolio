import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardWrapper from '../components/CardWrapper/CardWrapper.tsx';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 16px;
    padding-bottom: 70px;
    background-color: #f4f2ee;
    @media (max-width: 768px){
        margin-top: 12px
    };
`;

const StyledCardWrapper = styled(CardWrapper)`
    margin-bottom: 20px;
    width: 600px; 
    margin-bottom: 13px; 
    padding: 20px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #eae7e1;
    @media (max-width: 768px){
        width: fit-content;
        margin-left: 10px;
        margin-right: 10px;
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const CardImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
`;

const JobTitle = styled.h3`
    margin: 0;
    font-size: 14px;
    color: #666;
    font-weight: bold;
`;

const JobPeriod = styled.p`
    margin: 0;
    font-size: 14px;
    color: #666;
`;

const Description = styled.div`
    display: flex;
    color: #666;
    margin-bottom: 5px;

    p {
        font-size: 14px;
        margin: 0;
    }

    svg {
        font-size: 10px;
        margin-right: 10px;
        padding-top: 6px;
    }
`;

const Experiences: React.FC<{}> = () => {
    return (
        <Container>
            <StyledCardWrapper id='experience-card-1' bgColor='white' padding='20px'>
                <CardContent>
                    <CardHeader>
                        <CardImage src='#' alt='logo' />
                        <div>
                            <JobTitle>Job Title</JobTitle>
                            <JobPeriod>Company Name, Period</JobPeriod>
                        </div>
                    </CardHeader>                    
                    <Description>
                        <ArrowForwardIosIcon />
                        <p>Job responsibility 1</p>
                    </Description>                        
                    <Description>
                        <ArrowForwardIosIcon />
                        <p>Job responsibility 2</p>
                    </Description>
                    <Description>
                        <ArrowForwardIosIcon />
                        <p>Job responsibility 3</p>
                    </Description>
                    <Description>
                        <ArrowForwardIosIcon />
                        <p>Job responsibility 4</p>
                    </Description>  
                </CardContent>
            </StyledCardWrapper>
            <StyledCardWrapper id='experience-card-2' bgColor='white' padding='20px'>
                <CardContent>
                    <CardHeader>
                        <CardImage src='#' alt='logo' />
                        <div>
                            <JobTitle>Job Title</JobTitle>
                            <JobPeriod>Company Name, Period</JobPeriod>
                        </div>
                    </CardHeader>
                    <Description>
                        <ArrowForwardIosIcon />
                        <p>Job responsibility 1</p>
                    </Description>
                    <Description>
                        <ArrowForwardIosIcon />
                        <p>Job responsibility 2</p>
                    </Description>
                    <Description>
                        <ArrowForwardIosIcon />
                        <p>Job responsibility 3</p>
                    </Description>
                    <Description>
                        <ArrowForwardIosIcon />
                        <p>Job responsibility 4</p>
                    </Description>
                </CardContent>
            </StyledCardWrapper>
        </Container>
    );
};

export default React.memo(Experiences);