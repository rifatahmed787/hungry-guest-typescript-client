interface product {
  image_url: string;
  name: string;
  price: number;
  description: string;
}

const ServiceListCard: React.FC<{ product: product }> = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg cursor-pointer">
        <img
          src={product.image_url}
          className="absolute z-0 object-cover w-full h-96 transform group-hover:scale-125 duration-500"
        />
        <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-60 w-full h-72 md:h-96 z-10"></div>
        <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
          <div className="h-1/2 relative">
            <div className="absolute bottom-0">
              <h2 className="font-semibold group-hover:text-regular text-brand font-display transition duration-300  pb-6 text-3xl lg:text-5xl group-hover:underline">
                {product.name}
              </h2>
            </div>
          </div>
          <div className="h-1/2">
            <h3 className="text-2xl font-bold text-primary">
              Price: {product.price}
            </h3>
            <p className="text-regular py-4 opacity-0 transition duration-300 group-hover:opacity-100">
              {product.description}
            </p>
            <button className="bg-brand hover:bg-primary text-white text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 uppercase">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceListCard;
