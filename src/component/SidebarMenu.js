import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SidebarLink = styled(Link)`
    display:flex;
    color:#e1e9fc;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    list-style:none;
    height:60px;
    text-decoration:none;
    font-size:18px;
   

    &:hover{
    background:#252831;
    border-left:4px solid #623ce4;
    currsor:pointer;
    }
    `;

const SidebarLabel = styled.span`
    margin-left: 16px;
    `;


const DroupdownLink = styled(Link)`
    background:#414757;
    height:40px;
    padding-left:3rem;
    display:flex;
    align-items:center;
    text-decoration:none;
    color:#f5f5f5;
    font-size:18px;
    

    &:hover{
        background: #632ce4;
        transition:350ms;
        cursor:pointer;
    }
    `;

const SidebarMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    
    return (
        <>
            <SidebarLink to={item.path} onClick={item.submenu && showSubnav} >
                <div> 
                    <SidebarLabel>
                        {item.icons}
                        {item.title}
                    </SidebarLabel>
                </div>
                <div>
                    {
                        item.submenu && subnav
                            ? item.iconOpen : item.submenu
                                ? item.iconClosed
                                : null
                    }
                </div>
            </SidebarLink>
            {
                subnav && item.submenu.map((item, index) => {
                    
                    return (
                        <DroupdownLink to={item.path} key={index}>
                            {item.icons}
                           <SidebarLabel>{item.title}</SidebarLabel>
                        </DroupdownLink>
                          
                    )

                })
              
            }
            
        </>
    );
};

export default SidebarMenu;