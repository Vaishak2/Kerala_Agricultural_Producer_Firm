import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../Assets/Icon/search.svg';
import ArrowLeft from '../../Assets/Icon/arrow-left.svg';
import ArrowRight from '../../Assets/Icon/arrow-right.svg';
import ButtonArrow from "../../Assets/Icon/arrow_outward.svg";


const mockJobs = [
    {
        id: 1,
        title: "Assistant Branch Manager",
        location: "Sreekaryam",
        experience: "2-4 yrs",
        qualification: "Degree",
        description: "Branch Head- (Liability products only) Requirement- Experienced professionals from NBFC, Nidhi, Multistate Cooperative Societies, Banks , Insurance companies. Immediate joining Attractive Salary and Incentives with statutory benefits"
    },
    {
        id: 2,
        title: "Branch Head",
        location: "Sreekaryam",
        experience: "2-4 yrs",
        qualification: "Degree",
        description: "Branch Head- (Liability products only)Location- Sreekaryam Requirement- Experienced professionals from NBFC, Nidhi, Multistate Cooperative Societies,  Banks , Insurance companies. Educational qualification- DegreeImmediate joining Attractive Salary and Incentives with statutory benefits"
    },
    {
        id: 3,
        title: "Sales Head",
        location: "Sreekaryam",
        experience: "2-4 yrs",
        qualification: "Degree",
        description: "Sales Head- (Liability products only)Location- Sreekaryam Have to handle multiple branches and support the Branch Heads and the branch team for effective performance Requirement- Experienced professionals from NBFC, Nidhi, Multistate Cooperative Societies,  Banks , Insurance companies. Educational qualification- Degree Immediate joining Attractive Salary and Incentives with statutory benefits"
    },
    // Add more jobs...
];

const CareerPage = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(5);
    const [expandedJobId, setExpandedJobId] = useState(null); // For managing expanded job descriptions
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleApply = (jobId) => {
        navigate(`/career/${jobId}`);
    };

    const toggleJobDescription = (jobId) => {
        setExpandedJobId(expandedJobId === jobId ? null : jobId);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchJobs = async () => {
            let filteredJobs = mockJobs;

            if (searchTerm) {
                filteredJobs = filteredJobs.filter(job =>
                    job.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            const indexOfLastJob = currentPage * jobsPerPage;
            const indexOfFirstJob = indexOfLastJob - jobsPerPage;
            const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

            setJobs(currentJobs);
        };

        fetchJobs();
    }, [searchTerm, currentPage]);

    return (
        <div className="container mx-auto px-4 md:px-60 py-8">
            <h1 className="text-5xl font-semibold mb-8 text-center">Current Openings</h1>
            <div className="mb-6 flex w-full p-3 border border-gray-300 rounded-md">
                <img src={searchIcon} alt='searchIcon' />
                <input
                    type="text"
                    placeholder="Search Job here"
                    className="mx-2 bg-transparent focus:outline-none"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            {jobs.map(job => (
                <div key={job.id} className="bg-white rounded-lg p-4 mb-4">
                    <div className="md:flex justify-between items-center">
                        <div className='text-left'>
                            <h3 className="text-lg font-medium">{job.title}</h3>
                            <p>{job.location}</p>
                            <div className="flex space-x-4 mt-2">
                                <span className="px-2 py-1 border border-gray-300 rounded">{job.experience} Experience</span>
                                <span className="px-2 py-1 border border-gray-300 rounded">Qualification: {job.qualification}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end">
                            {/* On mobile, View Job Description should appear below the Apply button */}
                            {/* <button
                                onClick={() => handleApply(job.id)}
                                className="bg-[#5D8424] text-white px-12 md:px-6 py-4 rounded-full mt-4 md:mt-0"
                            >
                                Apply ↗
                            </button> */}
                            <div>

                                <button
                                    onClick={() => handleApply(job.id)}
                                    className='flex sm:ml-[50px] ml-auto bg-[#5D8424] sm:px-12 px-12 md:px-6 sm:py-4 py-3 mt-3 sm:mt-0 rounded-[48px] h-[48px] sm:h-[56px] '>
                                    <span className='text-white text-[16px] leading-5'>Apply</span>
                                    <img className='sm:w-6 sm:h-6' src={ButtonArrow} alt="Button Arrow" />
                                </button>
                            </div>
                            <div
                                onClick={() => toggleJobDescription(job.id)}
                                className="mt-2 cursor-pointer text-[#5D8424]"
                            >
                                {expandedJobId === job.id ? 'Hide Job Description' : 'View Job Description'}
                            </div>
                        </div>
                    </div>

                    {/* Job description collapsible section */}
                    {expandedJobId === job.id && (
                        <div className="mt-4 flex justify-start text-left bg-[#f8f8f8] p-4 rounded-lg">
                            {/* <h4 className="text-lg font-semibold">Job Description</h4> */}
                            <p className="mt-2">{job.description}</p>
                        </div>
                    )}
                </div>
            ))}

            <div className="flex md:justify-end justify-center  space-x-2 mt-8">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : ''}`}
                >
                    <img src={ArrowLeft} alt='ArrowLeft' />
                </button>
                {[...Array(Math.ceil(mockJobs.length / jobsPerPage)).keys()].map(number => (
                    <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        className={`px-4 py-1 rounded-none ${currentPage === number + 1 ? 'bg-white text-[#304BA0]' : ' hover:bg-gray-400'}`}
                    >
                        {number + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(mockJobs.length / jobsPerPage)}
                    className={`px-3 py-2 ${currentPage === Math.ceil(mockJobs.length / jobsPerPage) ? 'text-gray-400 cursor-not-allowed' : ''}`}
                >
                    <img src={ArrowRight} alt='ArrowRight' />
                </button>
            </div>
        </div>
    );
};

export default CareerPage;
