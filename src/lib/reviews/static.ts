import type { Review } from './types';

/* ============================================================
   Curated Reviews
   Hand-picked reviews that always appear, regardless of
   what the Google Places API returns. The merge layer
   dedupes against API results by author name.
   ============================================================ */

export const curatedReviews: Review[] = [
  {
    author: 'A.R.',
    rating: 5,
    text: 'Perfection! Definitely get a Smashburger if you like burgers— they were incredible— but everything is probably delicious here. Excellent fries also. Friendly service, clean dining room, locally owned… we are now regulars here.',
    source: 'curated',
  },
  {
    author: 'Farazana M.',
    rating: 5,
    text: 'WOW. Delicious food & great customer service. The owners were super sweet as well. Definitely will be coming back again. You have to try the chapli rice bowl. chapli chopped cheese & the smash burger, my family also loved the chicken rice bowl. This GEM will be our new go-to.',
    source: 'curated',
  },
  {
    author: 'Kaylee T.',
    rating: 5,
    text: 'Wow! I was extremely impressed by how delicious our food from this new restaurant was. I got the Noosh bowl with chicken and lamb—love that you can get both in one bowl. Super filling and very fast service! The seasoned basmati rice base was cooked perfectly as well. I wish we lived in the area so we could come back and try more dishes!',
    source: 'curated',
  },
  {
    author: 'H. M. J.',
    rating: 5,
    text: "Sooo good! Classic Double Burger was wonderful! Meat was pressed just like Freddy's style, so ate folded in half which was unique. Service was superb!! Will go back soon and try other food on the menu.🙏🏼",
    source: 'curated',
  },
  {
    author: 'Asma H.',
    rating: 5,
    text: "Tried Noosh Grill recently and loved it! The Noosh Bowl was fresh, flavorful, and super filling. The Classic Smash Burger was juicy and crispy — one of the best I've had in a while. Definitely worth a visit if you're craving something tasty!",
    source: 'curated',
  },
  {
    author: 'Ayesha A.',
    rating: 5,
    text: "Hands down the best chopped cheese in Northern Va!! We really needed a good halal spot for it and Noosh delivers on all fronts. The customer service is excellent and the quality of the food speaks for itself. They get their bread from the bakery in the same shopping complex so you know it's good!",
    source: 'curated',
  },
  {
    author: 'Elaine D.',
    rating: 5,
    text: 'Chapli Bowl is my favorite. I definitely need to come back to try the other signature bowls. I really like the sauces here and alway ask for extra sauce 🤩. Veggies are fresh and crispy. The meat is yummy and tender. Staff is always very friendly and helpful.',
    source: 'curated',
  },
  {
    author: 'Drayven C.',
    rating: 5,
    text: 'It was a very good smash burger. Definitely one of the best burgers you can get in the area and its priced fairly for the quality. The service is great the cashier was very nice and was making sure all the orders were correct. I loved it and ill be back soon.',
    source: 'curated',
  },
  {
    author: 'Alicia F.',
    rating: 5,
    text: "Hands down amazing! A must-go for their tasty menu, friendly service, and cleanliness. You can see them make your food. They have an excellent kids menu too. I highly recommend the smash burger which is excellent and the spicy fries but my go-to is the Chapli Chopped Cheese! I've never had anything like it but it's the best.",
    source: 'curated',
  },
  {
    author: 'Bashir B.',
    rating: 5,
    text: 'Noosh Grill delivered an exceptional dining experience. The customer service was outstanding—warm, attentive, and welcoming. Highly recommend!',
    source: 'curated',
  },
];
