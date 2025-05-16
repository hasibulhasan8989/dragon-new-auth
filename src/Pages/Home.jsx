import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideContent from "../Shared/LeftSideContent/LeftSideContent";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideContent from "../Shared/RightSideContent/RightSideContent";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const allNews=useLoaderData()
    console.log(allNews)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid md:grid-cols-4 gap-6 ">
                <div>
                    <LeftSideContent></LeftSideContent>
                </div>
                <div className=" md:col-span-2">
                    {
                        allNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideContent></RightSideContent>
                </div>
            </div>
            
        </div>
    );
};

export default Home;