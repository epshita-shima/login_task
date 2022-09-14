import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faCoffee, faHome } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
    {
        title: "Overwiew",
        path: '/overview',
        icons: <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>,
        iconClosed: <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>,
        iconOpen: <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>,
        submenu: [
            {
                title: 'Users',
                path: '/overview/users',
                icons: <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icons: <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            }
        ]
    },
    {
        title: "Reports",
        path: '/reports',
        icons: <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>,
        iconClosed: <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>,
        iconOpen: <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>,
        submenu: [
            {
                title: 'Reports 1',
                path: '/overview/reports1',
                icons: <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            },
            {
                title: 'Reports 2',
                path: '/overview/reports2',
                icons: <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            }
        ]
    },
    {
        title: "Products",
        path: '/products',
        icons: <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
    }
]
// const SidebarData = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default SidebarData;