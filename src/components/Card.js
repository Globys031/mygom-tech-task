function Card({ title, paragraph, buttonLabel, buttonAction }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <img
        className="w-full"
        src="/img/card-top.jpg"
        alt="Sunset in the mountains"
      /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{paragraph}</p>
      </div>
      <div className="flex justify-end px-6 pt-4 pb-2">
        {/* sita ties modal window panaudosiu */}
        {/* <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Cancel
        </button> */}
        <button
          className="bg-blue-500 hover:bg-blue-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={buttonAction}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default Card;
