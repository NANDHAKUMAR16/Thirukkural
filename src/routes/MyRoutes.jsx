import React from 'react';
import { useRoutes } from 'react-router-dom';
import Kural from '../pages/Kural';
import Home from '../pages/Home';

// Define the route configuration
const MyRoutes = () => {
    let routes = [
        { path: '/', element: <Home /> },
        { path: '/kural', element: <Kural /> }
    ];

    return useRoutes(routes);
};

export default MyRoutes;
