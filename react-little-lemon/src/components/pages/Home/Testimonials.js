import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
		fullName: 'Emily Rodriguez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
		says: `The Baklava dessert is heavenly! A nostalgic treat with authentic ingredients. Sweet flavors dance on the palate, leaving you craving more.`,
  },
  {
		fullName: 'David Smith',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
		says: `Little Lemon Restaurant's dishes are extraordinary! The Greek Salad, Grilled Octopus, and Baklava all showcase their commitment to quality and flavor. Truly the best Mediterranean restaurant in DC.`,
  },
  {
		fullName: 'Sarah Johnson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
		says: `Love the Greek Salad at Little Lemon! Crispy lettuce, peppers, olives, and feta cheese create a perfect harmony of flavors. The garlic and rosemary croutons add a delightful crunch.`,
  },
  {
		fullName: 'Michael Lee',
    image: customer4Image,
    rating: [1, 1, 1, 1],
		says: `The Grilled Octopus is a flavor explosion! Tender octopus, grilled to perfection and marinated with a delightful blend of herbs and spices.`,
	},
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
