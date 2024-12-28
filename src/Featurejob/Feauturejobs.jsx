import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Feauturejobs = () => {

    const [jobs,setJobs] =  useState([]);

    const [datalength,setdatalength] = useState(4)

    useEffect(()=>
        {
            fetch('jobs.json')
            .then(res=>res.json())
            .then(data => setJobs(data))
        },[])
    return (
        <div>
            <h1 className="text-6xl items-center">This is feauture job Section</h1>

            <h3>Total jobs : {jobs.length}</h3>

            <div className='grid grid-cols-2 gap-20'>
                {
                    jobs.slice(0,datalength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={datalength === jobs.length && 'hidden'}>
                
            <button 
            
            onClick={()=>setdatalength(jobs.length)}
            class="btn btn-outline btn-primary">See   -  all</button>
            </div>
        </div>
    );
};

export default Feauturejobs;