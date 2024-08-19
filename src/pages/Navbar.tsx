import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import CardWrapper from '../components/CardWrapper/CardWrapper.tsx';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CallIcon from '@mui/icons-material/Call';

interface NavbarProps {
    children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    const contentStyle: React.CSSProperties = {
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    
    const NavbarContainer = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative; /* Ensure stacking context for z-index */
        z-index: 100; /* Ensure navbar is above other content */

        @media (min-width: 768px) {
            flex-direction: row;
        }
    `;

    const Name = styled.p`
        font-size: 22px;
        font-weight: bold;
        color: gray;        
        border-right: 2px solid gray;
        margin-right: 20px;
        padding-right: 20px;
        @media (max-width: 768px) {
            border-right: none;
            margin-right: 0;
            padding-right: 0;
        }
    `;

    const Navs = styled.div`
        display: flex;
        align-items: center;

        & a {
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #666;
            position: relative;
            margin-right: 20px;
            text-decoration: none;
            transition: color 0.3s;
            & svg {
                margin-bottom: 5px;
                font-size: 22px;
            }
            &.active {
                color: black;
                &::after {
                    transform: scaleX(1);
                }
            }
            &:hover {
                color: black;
            }
        }

        @media (max-width: 768px) {
            a{
                margin-right: 0px
            }
            flex-direction: row;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            border-top: 1px solid #ddd;
            padding: 10px 0;
            z-index: 99; /* Ensure navbar is above content */
            justify-content: space-around;
        }
    `;

    return (
        <div>
            {children}
            <CardWrapper id="navbar-content-card" bgColor="white" style={contentStyle}>
                <NavbarContainer>
                    <Name>Aakash Brahmbhatt</Name>
                    <Navs>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <InfoIcon />
                            About
                        </NavLink>
                        <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <SchoolIcon />
                            Education
                        </NavLink>
                        <NavLink to="/experiences" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <WorkIcon />
                            Experiences
                        </NavLink>
                        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <AccountTreeIcon />
                            Projects
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <CallIcon />
                            Contact
                        </NavLink>
                    </Navs>
                </NavbarContainer>
            </CardWrapper>
        </div>
    );
};

export default React.memo(Navbar);