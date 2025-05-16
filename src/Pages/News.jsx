import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';
import RightSideContent from '../Shared/RightSideContent/RightSideContent';
import SingleNews from './SingleNews';

const News = () => {
    const allNews=useLoaderData()
     const {id}=useParams()
    
    const singleNews=allNews.filter(news=>news._id === id)
    const news=singleNews[0]
    
    const display=true;
   
    console.log(id)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4 gap-4'>
                <div className='col-span-3'>
                    <SingleNews news={news}></SingleNews>
                    
                </div>
                <div>
                    <RightSideContent display={display} ></RightSideContent>
                </div>
            </div>
        </div>
    );
};

export default News;