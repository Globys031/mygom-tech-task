function Card({ title, paragraph, buttonLabel, buttonAction }) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">{paragraph}</p>
      </div>
      <div class="flex justify-end px-6 pt-4 pb-2">
        <button
          class="bg-blue-500 hover:bg-blue-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={buttonAction}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default Card;
