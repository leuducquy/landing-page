
import Card from "../../components/Product/Card";

import { Product } from "../../productData";
const Explore = () => {


  return (
    <div className="">
      <div className="w-full min-h-fit p-10 md:p-20 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10mx-auto ">
        {Product.map((item, idx) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
