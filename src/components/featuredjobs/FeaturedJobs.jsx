import { useEffect, useState } from "react";
import SingleFeatureJob from "../singleFeatureJob/SingleFeatureJob";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(jobsData => setFeaturedJobs(jobsData))
    }, [])
    return (
        <div className="my-16">
            {/* head area */}
            <div className="text-center space-y-2">
                <h2 className="text-[#1A1919] text-3xl font-extrabold">Featured Jobs</h2>
                <p className="text-[#757575] text-md font-medium">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
                {
                    featuredJobs?.map(singeJobs => <SingleFeatureJob key={singeJobs.id}
                    singeJobs={singeJobs}></SingleFeatureJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;