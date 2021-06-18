import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  * as fa from '@fortawesome/free-solid-svg-icons';

export  const NavData=[
    {
        title:'Home',
        path:'/owner',
        icon:<FontAwesomeIcon icon={fa.faHome} />
    },
    {
        title:'Manage Projects',
        path:'/owner/manageProjects',
        icon:<FontAwesomeIcon icon={fa.faList} />,
        subMenu:[
            {
                title:'Project Categories',
                path:'/owner/projectCategories',
                icon: <FontAwesomeIcon icon={fa.faArchive} />
            },
            {
                title:'View Projects',
                path:'/owner/viewProjects',
                icon: <FontAwesomeIcon icon={fa.faEye} />
            }
        ]
    },
    {
        title:'Manage Map',
        path:'/owner/viewMap',
        icon: <FontAwesomeIcon icon={fa.faMap} />
    },
    {
        title:'Manage Pages',
        path:'/owner/viewPages',
        icon: <FontAwesomeIcon icon={fa.faBook} />
    }
];