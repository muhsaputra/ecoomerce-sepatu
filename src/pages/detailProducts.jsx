import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/products.service";
import { Children, useEffect, useState } from "react";

const DetailProductPage = (props) => {
  const { id } = useParams("id");
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <>
      <div className="w-100 min-h-screen flex justify-center items-center">
        {Object.keys(product).length > 0 && (
          <div className="flex font-sans">
            <div className="flex-none w-56 relative">
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto font-medium text-slate-900">
                  {product.title}
                </h1>
                <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                  ${product.price}
                </div>
                <div className="text-sm font-medium text-slate-400">
                  {product.rating.rate}/5 ({product.rating.count} reviews)
                </div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex text-sm font-bold">
                  <p>{product.description.substring(0, 50)}...</p>
                </div>
              </div>
              <div className="flex space-x-4 mb-5 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <button
                    className="h-10 px-6 font-semibold rounded-full bg-[#294B29] text-white"
                    type="submit"
                  >
                    Buy now
                  </button>
                  <button
                    className="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900"
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailProductPage;
