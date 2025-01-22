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
      className="flex flex-col items-center scale-75 md:scale-100 w-96 min-h-96 h-fit p-2 rounded-lg md:mb-16  
      bg-gray-100 dark:bg-gray-950 ml-10 shadow shadow-black dark:shadow-white"
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
