import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import RightSideContent from '../Shared/RightSideContent/RightSideContent';

const News = () => {
    const {id}=useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    {id}
                </div>
                <div>
                    <RightSideContent></RightSideContent>
                </div>
            </div>
        </div>
    );
};

export default News;