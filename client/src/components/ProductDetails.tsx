import Form from "./Form";

interface Product {
  title:string;
  image:string;
  price:string;
}

export default function ProductDetails({title, image, price}:Product) {
  return(
    <section className="flex flex-col md:flex-row justify-center dark:bg-gray-950 w-full h-screen
      pt-28 fixed z-40 top-0 bottom-0 right-0 left-0"
      >
      <div className="mt-5">
      <img src={image} alt="" className="w-96 rounded-lg" />
      <p className="text-2xl font-semibold text-gray-950 dark:text-white mt-5">
        {title}
      </p>
      <p className="flex flex-row mt-3 text-gray-950 dark:text-white">
        {price}
      </p>
      </div>
      <div className="ml-5">
      <Form/>
      </div>
    </section>
  )
}