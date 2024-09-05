import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../Assets/Icon/search.svg'
import ArrowLeft from '../../Assets/Icon/arrow-left.svg'
import ArrowRight from '../../Assets/Icon/arrow-right.svg'

const mockJobs = [
    // Add a few mock jobs here for testing
    {
        id: 1,
        title: "Accountant Staff",
        location: "Trivandrum",
        experience: "2-4 yrs",
        qualification: "Any",
    },
    {
        id: 2,
        title: "Driver",
        location: "Trivandrum",
        experience: "2-4 yrs",
        qualification: "Any",
    },
    {
        id: 3,
        title: "Clerk",
        location: "Trivandrum",
        experience: "2-4 yrs",
        qualification: "Any",
    },
    {
        id: 4,
        title: "Peon",
        location: "Trivandrum",
        experience: "2-4 yrs",
        qualification: "Any",
    },
    {
        id: 5,
        title: "Marketing Lead",
        location: "Trivandrum",
        experience: "2-4 yrs",
        qualification: "Any",
    },
    {
        id: 6,
        title: "Marketing Intern",
        location: "Trivandrum",
        experience: "2-4 yrs",
        qualification: "Any",
    },
    {
        id: 7,
        title: "Sales Exicitive",
        location: "Trivandrum",
        experience: "2-4 yrs",
        qualification: "Any",
    },
    {
        id: 8,
        title: "Accountant Staff",
        location: "Trivandrum",
        experience: "2-4 yrs",
        qualification: "Any",
    },
    {
        id: 9,
        title: "Accountant Staff",
        location: "Trivandrum",
        experience: "2-4 yrs",
        qualification: "Any",
    },
    {
        id: 10,
        title: "Admin",
        location: "Trivandrum",
        experience: "2-4 yrs",
        qualification: "Any",
    },
    // Add more jobs
];

const CareerPage = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(5);
    const navigate = useNavigate();



    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleApply = (jobId) => {
        navigate(`/career/${jobId}`);
    };
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchJobs = async () => {
            // Here we will mock API data, in real implementation, we will call an API.
            // const response = await fetch('YOUR_API_URL');
            // const data = await response.json();
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
            <div className="mb-6 flex w-full  p-3 border border-gray-300 rounded-md">
                <img
                    src={searchIcon}
                    alt='searchIcon'
                // className="w-full h-auto"
                />
                <input
                    type="text"
                    placeholder="Search Job here"
                    className="mx-2 bg-transparent focus:outline-none"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            {jobs.map(job => (
                <div key={job.id} className="bg-white  rounded-lg p-4 mb-4 md:flex justify-between items-center">
                    <div className='text-left'>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p>{job.location}</p>
                        <div className="flex space-x-4 mt-2">
                            <span className="px-2 py-1 border border-gray-300 rounded">{job.experience} Experience</span>
                            <span className="px-2 py-1 border border-gray-300 rounded">Qualification: {job.qualification}</span>
                        </div>
                    </div>
                    <div>
                        <button 
                         onClick={() => handleApply(job.id)}
                        className="bg-[#5D8424] text-white px-12 md:my-0 my-5 md:px-6 py-4 rounded-full">Apply ↗
                        </button>
                    </div>
                </div>
            ))}
            {/* <div className="flex justify-end space-x-2 mt-8">
                {[...Array(Math.ceil(mockJobs.length / jobsPerPage)).keys()].map(number => (
                    <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        className={`px-3 py-2 ${currentPage === number + 1 ? 'bg-gray-900 text-white' : 'bg-gray-300'}`}
                    >
                        {number + 1}
                    </button>
                ))}
            </div> */}
            <div className="flex md:justify-end justify-center items-center space-x-2 mt-8">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : ''}`}
                >
                    <img
                        src={ArrowLeft}
                        alt='ArrowLeft'
                    />
                </button>
                {[...Array(Math.ceil(mockJobs.length / jobsPerPage)).keys()].map(number => (
                    <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        className={`px-3 py-2 ${currentPage === number + 1 ? 'bg-white rounded-none text-[#304BA0]' : ' hover:bg-gray-400'}`}
                    >
                        {number + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(mockJobs.length / jobsPerPage)}
                    className={`px-3 py-2 ${currentPage === Math.ceil(mockJobs.length / jobsPerPage) ? 'text-gray-400 cursor-not-allowed' : ' '}`}
                >
                    <img
                        src={ArrowRight}
                        alt='ArrowLeft'
                    />
                </button>
            </div>

        </div>
    );
};

export default CareerPage;
