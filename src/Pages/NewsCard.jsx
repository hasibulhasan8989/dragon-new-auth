import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {

    const {title,author,image_url,total_view,details,rating,_id}=news
  return (
    <div className=" bg-white rounded-lg shadow-md p-4 my-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={author.img} // replace with profile image
            alt="author"
          />
          <div>
            <h4 className="text-sm font-semibold">{author.name?author.name:'Not Found' }</h4>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 hover:text-black cursor-pointer" />
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg leading-snug mb-3">
       {title}
      </h2>

      {/* Image */}
      <img
        src={image_url}
        alt="news"
        className="rounded-md mb-4 w-full h-full object-cover"
      />

      {/* Description */}
      <div className="text-sm text-gray-600 leading-relaxed">
        {
            details.length >200 ? <div>
                  <p>{details.slice(0,200)}</p> <Link to={`/news/${_id}`} className="text-orange-500 font-semibold ml-1 cursor-pointer ">Read More</Link>
            </div>
          
            : <p>{details}</p>
        }
        
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t">
        {/* Stars and Rating */}
        <div className="flex items-center space-x-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-sm" />
          ))}
          <span className="ml-1 text-gray-700 text-sm">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center space-x-1 text-gray-500">
          <FaEye className="text-sm" />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
