import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Reviews from 'pages/Reviews/Reviews';

const router = createBrowserRouter([
    {
        path: "",
        element: <Home />,
    },
    {
        path: "reviews",
        element: <Reviews />,
    },
    {
        path: "*",
        element: <div>Page Not Found!</div>
    }
]);

export { router };
