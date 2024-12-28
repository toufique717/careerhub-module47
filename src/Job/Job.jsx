  
const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
    return (
        <div className="">
              <div className="card  p-8 justify-start items-start card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      src= {logo} />
  </figure>

  <div className=" text-left">
    <p className="mt-8 text-2xl font-bold text-inherit">{job_title}</p>
    <p className=" text-2xl font-semibold text-stone-400">{company_name}</p>
     <div className="grid grid-cols-2 mt-4 mb-2 gap-6">
     <button class="btn btn-outline btn-primary">{remote_or_onsite}</button>
     <button class="btn btn-outline btn-primary">{job_type}</button>
     </div>
     <div className="grid grid-cols-2 gap-10 text-xl  mb-2 font-semibold">
     <p>{location}</p>
     <p>{salary}</p>
     </div>

  </div>
   
      <button className="btn btn-primary">Vew details</button>
    </div>
  </div>
 
         
    );
};

export default Job;