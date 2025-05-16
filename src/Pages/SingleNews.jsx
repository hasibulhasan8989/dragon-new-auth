const SingleNews = ({ news }) => {
  const { title, details,image_url } = news;
  return (
    <div className="">
      <h1 className="text-xl font-bold mb-4">Dragon News</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300 p-10">
        <img
          src={image_url}
          alt="news"
          className="w-full h-full object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold leading-tight mb-3 text-gray-800">
            {title}
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {details}
          </p>

          <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-4 py-2 rounded">
            ← All news in this category
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
