interface productProps {
  title: string;
  image: string;
  price: string;
}

export default function Product({ title, image, price }: productProps) {
  return (
    <div className="flex flex-col items-center w-96 h-96 rounded-lg mb-16 ml-5">
      <img src={image} alt="" className="w-60 mt-2" />
      <p className="text-2xl font-semibold">{title}</p>
      <div className="flex flex-row mt-3">
        <p>{price}</p>
      </div>
    </div>
  );
}
