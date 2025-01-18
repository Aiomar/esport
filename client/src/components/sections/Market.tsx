import Product from "../Product";

export default function Market() {
  return (
    <section
      id="Market"
      className="flex flex-col items-center w-full min-h-screen h-auto pb-32"
    >
      <h1 className="text-4xl font-russo mt-32 md:mt-36">MARKET PLACE</h1>
      <div className="flex flex-col md:flex-row mt-10 h-fit">
        <div className="md:grid md:grid-cols-4 h-fit">
          <Product
            title={"PRODUCT ESPORT"}
            image={
              "https://g2esports.com/cdn/shop/files/476.jpg?v=1724335089&width=360"
            }
            price={"90 TND"}
          />
          <Product
            title={"PRODUCT ESPORT"}
            image={
              "https://g2esports.com/cdn/shop/files/476.jpg?v=1724335089&width=360"
            }
            price={"90 TND"}
          />{" "}
          <Product
            title={"PRODUCT ESPORT"}
            image={
              "https://g2esports.com/cdn/shop/files/476.jpg?v=1724335089&width=360"
            }
            price={"90 TND"}
          />
          <Product
            title={"PRODUCT ESPORT"}
            image={
              "https://g2esports.com/cdn/shop/files/476.jpg?v=1724335089&width=360"
            }
            price={"90 TND"}
          />
        </div>
      </div>
    </section>
  );
}
