interface productProps {
  title: string;
  image: string;
  price: string;
  updateShow: () => void;
}

export default function Product({
  title,
  image,
  price,
  updateShow,
}: productProps) {
  return (
    <div
      className="flex flex-col items-center scale-95 md:scale-100 w-96 min-h-96 h-fit p-2 rounded-lg md:mb-16  
      bg-gray-100 dark:bg-gray-950 md:ml-10 shadow-md shadow-gray-300 dark:shadow-pink-400 hover:shadow-pink-500 
      hover:dark:shadow-pink-500 hover:shadow-xl"
      onClick={() => {
        updateShow();
      }}
    >
      <img src={image} alt="" className="w-60 mt-2" />
      <p className="text-2xl font-semibold text-gray-950 dark:text-white">
        {title}
      </p>
      <p className="flex flex-row mt-3 text-gray-950 dark:text-white">
        {price}
      </p>
    </div>
  );
}
