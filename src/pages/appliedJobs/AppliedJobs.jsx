import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataFromLocalStorage } from "../../uitlity/localstorageData";
import FilterApplied from "../../components/filterApplied/FilterApplied";

const AppliedJobs = () => {
    const jobsData = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    useEffect(() => {
        const localStorId = getDataFromLocalStorage();
        if (jobsData.length > 0) {
            
            const appliedData = [];
            for (const id of localStorId) {
                const jobs = jobsData.find(jobId => jobId.id == id);
                if (jobs) {
                    appliedData.push(jobs);
                }
            }
            setAppliedJobs(appliedData);
            setDisplayJobs(appliedData);
        }
        
    }, [jobsData])

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }
    return (
        <div>
            <div>
                <h2 className="text-center text-2xl font-bold">Applied jobs</h2>

            </div>
            <div>
                <div className="text-right">
                    <div className="dropdown dropdown-left mb-10">
                        <label tabIndex={0} className="btn m-1 normal-case">Filter by</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                            <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                            <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                        </ul>
                    </div>
                </div>
                <div className=" mb-12 space-y-8">
                    {
                        displayJobs.map(job => <FilterApplied key={job.id} job={job}></FilterApplied>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;