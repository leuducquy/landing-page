
import MyCard from '../../components/Cardlist'; // Adjust the path based on your file structure
import beachImage from "../../img/borabora1.jpg"
import gymImage from "../../img/gym.jpeg"
import shoesImage from "../../img/hero-img.png"
import foofImage from "../../img/foodimage.avif"
import './product.css'
// Sample data for the card list
const cardData = [
  {
    id: 1,
    title: 'A Travel website with social contact',
    description: 'All-inclusive Resorts,On the Caribbean Best Beaches',
    imageUrl:beachImage,
    url:"https://travel-leuducquys-projects.vercel.app/" 
  },
  {
    id: 2,
    title: 'Fitness is Fun with Us!',
    description: 'At our gym, fitness is not just a routine; it is an enjoyable adventure! Join us in this fitness expedition, where fun and results go hand in hand!',
    imageUrl: gymImage,
    url:"https://gym-beta-neon.vercel.app"
  },
  {
    id: 3,
    title: 'A Shoes store',
    description: 'Host seasonal sales events, especially during peak times like back-to-school, holidays, or the start of a new sports season.',
    imageUrl: shoesImage,
    url:"https://shoes-leuducquys-projects.vercel.app"
  },
  {
    id: 4,
    title: 'CulinaryExplorers: Unveiling the Essence of Dining Culture ',
    description: 'Join us on virtual food adventures as we explore bustling markets, hidden eateries, and iconic restaurants. Our immersive videos and articles bring the sights, sounds, and, most importantly, the tastes directly to you.',
    imageUrl: foofImage,
    url:"https://foodlooking-leuducquys-projects.vercel.app"
  },
];
const Product = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Product</h1>
      <div className="card-container">
        {cardData.map((card) => (
          <MyCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
export default Product