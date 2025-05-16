import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone1 from '../../assets/pictures/qZone1.png'
import QZone2 from '../../assets/pictures/qZone2.png'
import QZone3 from '../../assets/pictures/qZone3.png'
import bg from '../../assets/pictures/bg.png'


const RightSideContent = ({display}) => {
  console.log(display)
  return (
    <div>
      {/* Login with section */}
      <div className="p-2">
        <h2 className="font-semibold text-xl ">Login With</h2>
        <button className="btn w-full font-light btn-outline  text-blue-500 mt-6 mb-2">
          <FaGoogle></FaGoogle> Login with google
        </button>
        <button className="btn w-full font-light btn-outline ">
          {" "}
          <FaGithub></FaGithub>Login with github
        </button>
      </div>

      {/* find us section */}

      
        <div className="mt-8">
          <h2 className="font-semibold text-xl mb-5 ">Find Us On</h2>
          <div className="border flex gap-2 items-center p-4 border-[#E7E7E7]">
            <div className="bg-[#F3F3F3] p-2 rounded-full">
              <FaFacebookF size={20} color="blue"></FaFacebookF>
            </div>
            <p className="text-lg text-[#706F6F]">Facebook</p>
          </div>
          <div className="border flex gap-2 items-center p-4 border-[#E7E7E7]">
            <div className="bg-[#F3F3F3] p-2 rounded-full">
              <FaInstagram size={20} color="#D82D7E"></FaInstagram>
            </div>
            <p className="text-lg text-[#706F6F]">Instagram</p>
          </div>
          <div className="border flex gap-2 items-center p-4 border-[#E7E7E7]">
            <div className="bg-[#F3F3F3] p-2 rounded-full">
              <FaTwitter size={20} color="#58A7DE"></FaTwitter>
            </div>
            <p className="text-lg text-[#706F6F]">Twitter</p>
          </div>
        </div>

        {/* Q zone */}
        <div className="bg-[#F3F3F3] mt-5">
            <h1 className="px-6 py-8
             font-semibold text-xl">Q-Zone</h1>
           <div className="space-y-5">
             <img className="w-full p-2" src={QZone1} alt="" />
            <img className="w-full p-3" src={QZone2} alt="" />
            <img className="w-full p-2" src={QZone3} alt="" />
           </div>

        </div>

        {/* last section */}

        {
          display ||<div className="w-full min-h-[509px] bg-no-repeat bg-cover bg-center mt-6  text-white" style={{backgroundImage:`url(${bg})`}}>
           <div className="py-16 px-8 text-center space-y-5">
            <h1 className="text-3xl font-bold">Create an Amazing Newspaper</h1>
            <p className="text-lg">
                Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
            </p>
            <button className="bg-[#D72050] btn text-white border-0
            text-xl py-8 shadow-none">Learn More</button>
           </div>
           
        </div>
        }

        

      </div>
   
  );
};

export default RightSideContent;
