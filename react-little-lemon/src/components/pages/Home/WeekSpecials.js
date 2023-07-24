import { Link } from 'react-router-dom';
import greekSaladImage from './assets/greek-salad.jpg';
import baklavaImage from './assets/baklava.jpg';
import grilledOctopusImage from './assets/grilled-octopus.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
	{
		name: 'Greek Salad',
		image: greekSaladImage,
		price: '$9.99',
		description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Washington style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
	},
	{
		name: 'Grilled Octopus',
		image: grilledOctopusImage,
		price: '$19.99',
		description: `Along harbours, octopus is hung out to dry like washing – one of the
		 iconic images of Greece. Grilled or marinated, they make a fine meze (appetiser), or main course stewed in wine.`,
	},
	{
		name: 'Baklava',
		image: baklavaImage,
		price: '$4.99',
		description: `The classic baklava that came from Greece and involves honey, filo and ground nuts.`,
	},
];

const WeekSpecials = () => {
	return (
		<section className="container grid week-specials">
			<div className="week-specials-header">
				<h2>This week specials!</h2>
				<Link className="button-primary" to={pages.get('orderOnline').path}>
					Online Menu
				</Link>
			</div>
			{meals.map((meal, index) =>
				<MealCard key={index} meal={meal} />
			)}
		</section>
	);
};

export default WeekSpecials;
