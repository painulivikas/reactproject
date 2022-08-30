import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest Fish And Veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A German Speciality',
        price: 16.11,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, Raw, Meaty',
        price: 23.09,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy... & Green...',
        price: 18.88,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (<section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
    );
};

export default AvailableMeals;