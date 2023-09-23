import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../mainlayout/MainLayout';
import Home from '../pages/home/Home';
import AppliedJobs from '../pages/appliedJobs/AppliedJobs';
import FeatureDetails from '../components/featureDetails/FeatureDetails';

const myCreateRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/applied",
                element: <AppliedJobs></AppliedJobs>
            },
            {
                path: "/featureDetails/:featureId",
                loader: () => fetch('../../jobs.json'),
                element: <FeatureDetails></FeatureDetails>
            }
        ]
    },
    
]);

export default myCreateRouter;