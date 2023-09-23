import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../mainlayout/MainLayout';
import Home from '../pages/home/Home';

const myCreateRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
    
]);

export default myCreateRouter;