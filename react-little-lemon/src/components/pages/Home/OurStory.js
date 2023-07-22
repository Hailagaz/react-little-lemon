import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
	return (
		<section className="container grid our-story">
			<div className="our-story-description">
				<h1>Little Lemon</h1>
				<h2>Washington</h2>
				<p>
					Welcome to Little Lemon Restaurant, a family-owned gem in the heart of Washington DC, serving rich Mediterranean flavors with a modern twist. Our passion for preserving authentic recipes led us on a culinary journey, sharing our culture with the world.
				</p>
				<p>
					At Little Lemon, we use locally-sourced, finest ingredients to craft delightful dishes like creamy hummus and perfectly seasoned falafel. Our warm ambiance and hospitable staff ensure an exceptional dining experience, treating every guest like family.
				</p>
				<p>
					Enjoy a diverse menu with mouthwatering kebabs, sumptuous shawarma wraps, and hearty vegetarian platters. Join us in celebrating culture, tradition, and the love of good food.
				</p>
				<p>
					Thank you for being part of our story. Let's share more unforgettable moments together!
				</p>
			</div>
			<div className="our-story-chefs">
				<img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
				<img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
			</div>
		</section>
	);
};

export default OurStory;
