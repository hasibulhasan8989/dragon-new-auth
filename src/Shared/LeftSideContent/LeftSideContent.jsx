import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import photo1 from '../../assets/pictures/1.png'
import photo2 from '../../assets/pictures/2.png'
import photo3 from '../../assets/pictures/3.png'
import { MdOutlineDateRange } from "react-icons/md";
import moment from 'moment';




const LeftSideContent = () => {

  const [category ,setCategory]=useState([])

  useEffect(()=>{
    fetch('categories.json')
    .then(res=>res.json())
    .then(data=>setCategory(data))
  },[])
    return (
        <div>
          <h1 className="text-xl font-semibold">All Category {category.length}</h1>
          <div className="w-5/6 mx-auto">
            {
            category.map(ct=><NavLink to={`category${ct.id}`} className={'block p-3 mt-1 text-[#9F9F9F] '}>{ct.name}</NavLink>)
           }
          </div>

          <div>
            
            <div className="space-y-5 mb-6">
              <img src={photo1} alt="" className="w-full" />
              <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
              <p className="flex items-center text-lg gap-4 ">Sports <span className="flex items-center text-[#9F9F9F]"> <MdOutlineDateRange ></MdOutlineDateRange> <span>{moment().format("ddd, hA") }</span> </span> </p>
            </div>
            <div className="space-y-5 mb-6">
              <img src={photo2} alt="" className="w-full" />
              <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
              <p className="flex items-center text-lg gap-4 ">Sports <span className="flex items-center text-[#9F9F9F]"> <MdOutlineDateRange ></MdOutlineDateRange> <span>{moment().format("ddd, hA") }</span> </span> </p>
            </div>
            <div className="space-y-5 mb-6">
              <img src={photo3} alt="" className="w-full" />
              <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
              <p className="flex items-center text-lg gap-4 ">Sports <span className="flex items-center text-[#9F9F9F]"> <MdOutlineDateRange ></MdOutlineDateRange> <span>{moment().format("ddd, hA") }</span> </span> </p>
            </div>



          </div>

        </div>
    );
};

export default LeftSideContent;