import Banner from "../../Banner/Banner";
import Feauturejobs from "../../Featurejob/Feauturejobs";
import Jobcatagory from "../../Jobcatgory/Jobcatagory";

  
const Home = () => {
    return (
        <div className="text-center">
            <h3>This is Home</h3>
            <Banner></Banner>
            <Jobcatagory></Jobcatagory>
            <Feauturejobs></Feauturejobs>
            

        </div>
    );
};

export default Home;