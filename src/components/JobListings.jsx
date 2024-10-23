import React, { useEffect, useState } from 'react'
import Joblisting from './Joblisting';
import Spinner from "./Spinner"

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        // used to update a certain data, especially in backend where inputs are updated 
        const fetchJobs = async () => {
            const apiUrl = isHome ? "http://localhost:8000/jobs?_limit=3" : "http://localhost:8000/jobs";
            try {
                setLoading(true)
                const response = await fetch(apiUrl)
                const data = await response.json();
                setJobs(data)

            } catch (error) {
                setLoading(false)
                console.error("Error fetching", error)
            } finally {
                setLoading(false)
            }
        }
        fetchJobs();
    }, []);


    return (

        <section className='bg-blue-50 px-4 py-10'>
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl font-bold text-center py-3 text-indigo-400'>
                    {isHome ? "Recent Jobs" : "Browse Jobs"}
                </h2>
                {loading ? <Spinner loading={loading} /> :
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                        {jobs.map((job) => (
                            <Joblisting key={job.id} job={job} />
                        ))}

                    </div>

                }





            </div>
        </section>
    )
}

export default JobListings