import Header from "../Shared/Header/Header";
import LeftSideContent from "../Shared/LeftSideContent/LeftSideContent";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideContent from "../Shared/RightSideContent/RightSideContent";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid md:grid-cols-4 gap-6 ">
                <div>
                    <LeftSideContent></LeftSideContent>
                </div>
                <div className="border md:col-span-2">
                    news coming soon
                </div>
                <div>
                    <RightSideContent></RightSideContent>
                </div>
            </div>
            
        </div>
    );
};

export default Home;