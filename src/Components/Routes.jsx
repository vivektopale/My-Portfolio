import React from 'react'
import { useRoutes } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Achivements from './Achivements';
import Resume from './Resume';
import Contact from './Contact';

function Routes() {

let route = useRoutes([
    {
        path:"/",
        element:<Home/>,

    },
    {
        path:"/projects",
        element:<Projects/>
    },
    {
        path:"/skills",
        element:<Skills/>
    },
    {
        path:"/achievments",
        element:<Achivements/>
    },
    {
        path:"/resume",
        element:<Resume/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
])

  return route;
  
}

export default Routes