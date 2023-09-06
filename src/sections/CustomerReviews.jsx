import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
<section className="max-container">
<h3 className="font-palanquin text-center text-4xl font-bold">
  What Our <span className="text-coral-red">Customer</span> Say?
</h3>
<p>Hear genuine stories from satisfied customers about the exceptional experiences with us</p>

<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
    {reviews.map((review) => (
      <ReviewCard 
      key={review.customerName}
      imgURL={review.imgURL}
      customerName={review.customerName}
      rating={review.rating}
      feedback={review.feedback}/>
    ))}
</div>
</section>
  )
}

export default CustomerReviews
 