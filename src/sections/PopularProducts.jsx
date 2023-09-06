import { products } from '../constants';
import PopularProductCard from '../components/PopularProductCard';
import { shoe8 } from '../assets/images';


const PopularProducts = () => {
  return (
<section className="max-container max-sm:mt-12"
id="products">
  <div className="flex flex-col justify-start gap-5">
    <h2 className="text-4xl font-palanquin font-bold"> Our <span className="text-coral-red">Popular</span> Products</h2>
    <p className="lg-mx-w-lg mt-2 font-montserrat text-slate-gray">Experience nice looking shoes!!</p>
  </div>


  <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
    {products.map((product) => (
      <PopularProductCard key={product.name} {...product} />
    ))}
  </div>
</section>
  )
}

export default PopularProducts
