const Card = () => {
  return (
    <div className="relative cursor-move bg-white p-10 rounded-lg shadow-md mb-4 border-3 border-transparent max-w-sm hover:shadow-lg hover:border-blue-200 hover:-translate-x-1 hover:-translate-y-1">
      <div className="flex items-center justify-between w-full">
        <button className="bg-transparent border-0 text-gray-400 text-lg"></button>
      </div>
      <p className="text-2xl my-4">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs.
      </p>
      <div className="flex items-center justify-between text-gray-400 text-xs">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <svg className="w-4 h-8 mr-1" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" strokeWidth="2" />
              <path d="M12 8V12L15 15" strokeWidth="2" />
            </svg>
            Feb 24
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24">
              <path
                d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"
                strokeWidth="1.5"
              />
            </svg>
            18
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24">
              <path d="M12 8V12L15 15" strokeWidth="2" />
            </svg>
            7
          </div>
        </div>
        <div className="flex items-center">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="h-7 w-7 bg-blue-400 text-white rounded-full border border-white flex items-center justify-center -mr-2"
            >
              <svg className="w-4 h-4 stroke-white" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>
            </span>
          ))}
          <span className="text-xs text-gray-500 ml-2">+20</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
