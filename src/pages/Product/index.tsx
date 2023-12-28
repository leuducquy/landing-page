
import MyCard from '../../components/Cardlist'; // Adjust the path based on your file structure
import beachImage from "../../img/borabora1.jpg"
import gymImage from "../../img/gym.jpeg"
import shoesImage from "../../img/hero-img.png"
import foofImage from "../../img/foodimage.avif"
import watchImage from "../../img/watch.jpeg"
import dentistImage from "../../img/process-1.png"
import carImage from "../../img/borabora1.png"
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
  {
    id: 5,
    title: 'A Watch Store Classic ',
    description: 'Step into a world where craftsmanship meets sophistication. Our watch store, a timeless classic, invites you to explore an exquisite collection of watches that transcend trends. From meticulously designed timepieces to iconic classics, immerse yourself in a journey through the ages of horology. Discover the perfect blend of style and functionality, where each watch tells a story of precision and elegance. Elevate your wristwear with our curated selection, where every tick echoes the legacy of timeless design. Welcome to a watch store classic, where time takes on a new dimension.',
    imageUrl: watchImage,
    url:"https://watch-leuducquys-projects.vercel.app"
  },
  {
    id: 6,
    title: 'A Dental Care Store ',
    description: 'Welcome to our Dental Care Store, where your oral health is our top priority! At our store, we are committed to providing you with a comprehensive range of dental care products to help you achieve and maintain a bright, healthy smile. From daily oral hygiene essentials to specialized treatments, we have got everything you need to keep your teeth and gums in optimal condition.',
    imageUrl: dentistImage,
    url:"https://dentalcare-leuducquy.vercel.app/"
  },
  {
    id: 7,
    title: 'Car Rental',
    description: 'mbark on a hassle-free adventure with our premier car rental service that puts you in the driver  seat of your travel experience. At Viet Nam Auto , we redefine convenience, offering a fleet of meticulously maintained vehicles to suit every journey. Whether it is a spontaneous road trip, a business excursion, or a family vacation, our diverse range of cars ensures you find the perfect match for your needs. Enjoy the freedom of the open road with our user-friendly booking platform, transparent pricing, and top-notch customer service. We believe in making your travel dreams a reality, one ride at a time. Your next unforgettable adventure begins with Viet Nam Auto',
    imageUrl: carImage,
    url:"https://carrental-leuducquy.vercel.app/"
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