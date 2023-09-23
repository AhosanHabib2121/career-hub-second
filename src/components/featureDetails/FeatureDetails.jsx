import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDataFromLocalStorage, saveDataLs } from "../../uitlity/localstorageData";


const FeatureDetails = () => {
    const jobsData = useLoaderData();
    const { featureId } = useParams();
    const id = parseInt(featureId);
    const job = jobsData.find(job => job.id === id)

    const handleApplyJob = () => {
        getDataFromLocalStorage()
        saveDataLs(job.id);
        toast('You have applied successfully');
        // const localStoredId = ;
        // console.log(localStoredId);

    }
    return (

        <div>
            <div>
                <h2 className="text-center text-2xl font-bold">Job Details</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mt-10 mb-20">
                <div className="md:col-span-3">
                    <p className="mb-5"><span className="text-[#1A1919] font-bold">Job Description : </span><span className="text-[#757575]">{job.job_description}</span></p>
                    
                    <p className="mb-5"><span className="text-[#1A1919] font-bold">Job Responsibility : </span><span className="text-[#757575]">{job.job_responsibility}</span></p>
                    <div>
                        <h2 className="text-[#1A1919] font-bold">Educational Requirements:</h2>
                        <p className="text-[#757575] my-2">{ job.educational_requirements}</p>
                    </div>

                    <div>
                        <h2 className="text-[#1A1919] font-bold">Experiences:</h2>
                        <p className="text-[#757575] my-3">{ job.experiences}</p>
                    </div>
                </div>

                <div className="md:col-span-1 ">
                    <div className="bg-[#7E90FE1A] px-4 py-4 mb-6 rounded-md">
                        <h2 className="text-[#1A1919] font-bold">Job Details : { job.id}</h2>
                        <div className="border border-gray-300 my-4"></div>
                        <div className="space-y-2">
                            <h3><span className="#474747 text-base xt- font-bold">Salary</span> : <span className="text-[#757575]">{job.salary} (per month)</span></h3>

                            <h3><span className="#474747 text-base xt- font-bold">Job Title</span> : <span className="text-[#757575]">{job.job_title}</span></h3>
                        </div>
                        <h2 className="text-[#1A1919] font-bold mt-3">Contact Information</h2>
                        <div className="border border-gray-300 my-4"></div>
                        <div className=" space-y-2">
                            <h3><span className="#474747 text-base xt- font-bold">Phone</span> : <span className="text-[#757575]">{job.contact_information.phone}</span></h3>

                            <h3><span className="#474747 text-base xt- font-bold">Email</span> : <span className="text-[#757575]">{job.contact_information.email}</span></h3>

                            <h3><span className="#474747 text-base xt- font-bold">Address</span> : <span className="text-[#757575]">{job.contact_information.address}</span></h3>
                        </div>   
                    </div>
                    <div >
                        <button  onClick={handleApplyJob} className="btn btn-primary w-full normal-case">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default FeatureDetails;