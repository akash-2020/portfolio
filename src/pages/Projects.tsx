import React from 'react';
import CardWrapper from '../components/CardWrapper/CardWrapper.tsx';
import CustomizedButton from '../components/CustomizedButton/CustomizedButton.tsx';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styled from 'styled-components';
import { Chip as MuiChip } from '@mui/material';

const Projects: React.FC<{}> = () => {
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

    const OpenIcon = styled(OpenInNewIcon)`
        font-size: 14px;
        color: #666;
    `;

    const CardsContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0px;
        margin-top: 16px;
        background-color: #f4f2ee;
        @media (max-width: 768px) {
            margin-top: 12px;
            gap: 0px;
            padding: 0px;
            background-color: #f4f2ee;
            padding-bottom: 74px;
        }
    `;

    const CardItem = styled.div`
        flex: 1 1 calc(40% - 20px);  /* Decreased card width */
        max-width: calc(40% - 100px);  /* Decreased card width */
        display: flex;
        justify-content: center;
        padding: 0px 10px 10px;

        @media (max-width: 768px) {
            flex: 1 1 100%;
            max-width: 100%;
        }
    `;

    const CustomCardWrapper = styled(CardWrapper)`
        background-color: white;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #eae7e1;
        width: 100%;
    `;

    const CustomButton = styled(CustomizedButton)`
        padding: 5px;
    `;

    const Chip = styled(MuiChip)`
        margin-top: 6px;
        margin-bottom: 6px;
        margin-right: 6px;
        height: fit-content !important;
        padding: 3px 0px !important;
        & span {
            font-size: 11px;
        }
    `;

    const ProjectTitle = styled.p`
        font-size: 14px;
        font-weight: bold;
        color: #666;
    `;

    const ProjectDescription = styled.p`
        color: #666;
        font-size: 14px;
    `;

    const StyledImg = styled.img`
        width: 16px;
        height: 16px;
        margin-right: 5px;
    `;

    return (
        <div>
            <CardsContainer>
                <CardItem>
                    <CustomCardWrapper id="project-card-3"
                        topRightContent={
                            <CustomButton borderRadius={20}>
                                <CourseLink href="#" target="_blank" rel="noopener noreferrer">
                                    <OpenIcon />
                                </CourseLink>
                            </CustomButton>
                        }>
                        <ProjectTitle>Project Name</ProjectTitle>
                        <Chip icon={<StyledImg src='typescript.png' />} label="Typescript" sx={{color: '#666'}}/>
                        <Chip icon={<StyledImg src='mongodb.png' />} label="MongoDB" size='small' sx={{color: '#666'}}/>
                        <Chip icon={<StyledImg src='components.png' />} label="styled-components" size='small' sx={{color: '#666'}}/>
                        <Chip icon={<StyledImg src='nodejs.png' />} label="Node" size='small' sx={{color: '#666'}}/>
                        <ProjectDescription>
                            Project Description
                        </ProjectDescription>
                    </CustomCardWrapper>
                </CardItem>
                <CardItem>
                    <CustomCardWrapper id="project-card-3"
                        topRightContent={
                            <CustomButton borderRadius={20}>
                                <CourseLink href="#" target="_blank" rel="noopener noreferrer">
                                    <OpenIcon />
                                </CourseLink>
                            </CustomButton>
                        }>
                        <ProjectTitle>Project Name</ProjectTitle>
                        <Chip icon={<StyledImg src='python.png' />} label="Python" sx={{color: '#666'}}/>
                        <Chip icon={<StyledImg src='flask.png' />} label="Flask" size='small' sx={{color: '#666'}}/>
                        <Chip icon={<StyledImg src='api.png' />} label="RESTful API" size='small' sx={{color: '#666'}}/>
                        <Chip icon={<StyledImg src='mssql.png' />} label="MSSQL" size='small' sx={{color: '#666'}}/>
                        <ProjectDescription>
                            Project Description 
                        </ProjectDescription>
                    </CustomCardWrapper>
                </CardItem>
                <CardItem>
                    <CustomCardWrapper id="project-card-1"
                        topRightContent={
                            <CustomButton borderRadius={20}>
                                <CourseLink href="#" target="_blank" rel="noopener noreferrer">
                                    <OpenIcon />
                                </CourseLink>
                            </CustomButton>
                        }>
                        <ProjectTitle>Project Name</ProjectTitle>
                        <Chip icon={<StyledImg src='react.png' />} label="Reactjs" size='small' sx={{color: '#666'}}/>
                        <Chip icon={<StyledImg src='redux.png' />} label="Redux" size='small' sx={{color: '#666'}}/>
                        <Chip icon={<StyledImg src='firebase.png' />} label="Firebase" size='small' sx={{color: '#666'}}/>
                        <ProjectDescription>
                            Project Description
                        </ProjectDescription>
                    </CustomCardWrapper>
                </CardItem>
                <CardItem>
                    <CustomCardWrapper id="project-card-2"
                        topRightContent={
                            <CustomButton borderRadius={20}>
                                <CourseLink href="#" target="_blank" rel="noopener noreferrer">
                                    <OpenIcon />
                                </CourseLink>
                            </CustomButton>
                        }>
                        <ProjectTitle>Project Name</ProjectTitle>
                        <Chip icon={<StyledImg src='react.png' />} label="Reactjs" size='small' sx={{color: '#666'}}/>
                        <Chip icon={<StyledImg src='material-ui.png' />} label="Material UI" size='small' sx={{color: '#666'}}/>
                        <Chip icon={<StyledImg src='api.png' />} label="API" size='small' sx={{color: '#666'}}/>
                        <ProjectDescription>
                            Project Description
                        </ProjectDescription>
                    </CustomCardWrapper>
                </CardItem>               
            </CardsContainer>
        </div>
    );
}

export default React.memo(Projects);