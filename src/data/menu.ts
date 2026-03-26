import type {
  MenuItem,
  BurgerItem,
  BurgerExtra,
  Protein,
  Sauce,
  SpecialtyBowl,
  KidsItem,
  SideItem,
} from '@/types/menu';

/* ============================================================
   Subs
   ============================================================ */

export const subs: MenuItem[] = [
  {
    name: 'Chicken Schnitzel',
    price: 13,
    description:
      'german-style, hand battered chicken, lettuce, onions, tomato, pickles, garlic aioli',
    image: 'chicken-schnitzel.jpg',
  },
  {
    name: 'Chapli Chopped Cheese',
    price: 13,
    description:
      'spiced beef with herbs, cheese, topped with sumac, fresh cilantro, tomato, lettuce, white sauce, and cilantro chutney',
    spicy: true,
    image: 'chapli-chopped-cheese.jpg',
  },
  {
    name: 'Masala Chicken and Cheese',
    price: 13,
    description:
      'fresh ground chicken, cheese, grilled onions and jalapeños, spices, fresh cilantro, mayo, and cilantro chutney',
    spicy: true,
    image: 'masala-chicken-and-cheese.jpg',
  },
  {
    name: 'Original Chopped Cheese',
    price: 13,
    description:
      'fresh ground beef, cheese, grilled onions and green peppers, topped with lettuce, tomato, and our burger sauce and our house-made sauce',
    image: 'original-chopped-cheese.jpg',
  },
  {
    name: 'Buffalo Chicken Cheesesteak',
    price: 13,
    description:
      'fresh ground chicken in a spicy buffalo sauce, cheese, grilled onions and green peppers, topped with lettuce, tomato, and mayo',
    spicy: true,
    image: 'buffalo-chicken-cheesesteak.jpg',
  },
];

/* ============================================================
   Pita Wrap
   ============================================================ */

export const pitaWrap = {
  name: 'Noosh Style Pita Wrap',
  price: 11,
  description:
    'choice of protein, tomato, onions, lettuce, and tzatziki or choice of sauce',
};

/* ============================================================
   Smashburgers
   ============================================================ */

export const burgers: BurgerItem[] = [
  {
    name: 'Classic',
    singlePrice: 8,
    doublePrice: 11,
    description:
      'fresh premium beef patty, topped with cheese, pickles, and our burger sauce',
    image: 'classic.jpg',
  },
  {
    name: 'Jalapeño',
    singlePrice: 8.5,
    doublePrice: 11.5,
    description:
      'fresh premium beef patty, topped with cheese, fresh-sliced jalapeños, and our burger sauce',
    spicy: true,
    image: 'jalapeño.jpg',
  },
  {
    name: 'Patriot',
    singlePrice: 8.75,
    doublePrice: 11.75,
    description:
      'fresh premium beef patty, topped with cheese, lettuce, tomato, pickles, and our burger sauce',
    image: 'patriot.jpg',
  },
];

export const burgerExtras: BurgerExtra[] = [
  { name: 'extra patty', price: 3 },
  { name: 'fresh jalapeños', price: 1 },
  { name: 'grilled onions', price: 1 },
];

/* ============================================================
   Build Your Own Bowl
   ============================================================ */

export const buildYourOwnBowl = {
  price: 13,
  description:
    'All bowls are served over basmati rice and a fresh chopped salad (cucumber, tomato, lime-mint dressing)',
};

export const proteins: Protein[] = [
  { name: 'Chicken', description: 'Marinated & grilled' },
  { name: 'Falafel', description: 'Crispy & plant-based' },
  { name: 'Gyro', description: 'Savory lamb & beef' },
  { name: 'Mix', description: 'Chicken + Gyro' },
];

export const sauces: Sauce[] = [
  { name: 'White', description: 'Mild & creamy' },
  { name: 'Garlic Aioli', description: 'Mild & smooth' },
  { name: 'Cilantro Chutney', description: 'Herby & fresh' },
  { name: 'Red', description: 'Bold & fiery', spicyLevel: 2 },
];

/* ============================================================
   Specialty Bowls
   ============================================================ */

export const specialtyBowls: SpecialtyBowl[] = [
  {
    name: 'Chicken Schnitzel',
    price: 15,
    description:
      'german-style, hand battered chicken, hummus, served over rice, chopped salad, and choice of sauce(s)',
    image: 'chicken-schnitzel-bowl.jpg',
  },
  {
    name: 'Chapli Bowl',
    price: 15,
    description:
      'spiced beef with herbs, served over rice, chopped salad, topped with fries, and choice of sauce(s)',
    spicy: true,
    image: 'chapli-bowl.jpg',
  },
  {
    name: 'Protein & Salad Bowl',
    price: 14,
    description:
      'choice of protein, served over romaine and chopped salad, red pepper hummus, and choice of sauce(s)',
    image: 'protein-&-salad-bowl.jpg',
  },
];

/* ============================================================
   Kids Menu
   ============================================================ */

export const kidsMenu: KidsItem[] = [
  {
    name: "Lil' Bowl",
    price: 8,
    description: 'choice of protein, rice, chopped salad, and choice of sauce(s)',
  },
  {
    name: "Lil' Smashburger",
    price: 7,
    description: 'ketchup, mayo and cheese',
  },
  {
    name: "Lil' Chicken Nuggets",
    price: 7,
    description: 'served with fries',
  },
];

/* ============================================================
   Sides
   ============================================================ */

export const sides: SideItem[] = [
  { name: 'Fries', price: 4 },
  { name: 'Spicy Fries', price: 4.5 },
  { name: 'Falafel (7) w/Sauce', price: 4.5 },
  { name: 'Chicken Rolls (2) w/Sauce', price: 5 },
  { name: 'Red Pepper Hummus & Pita', price: 5 },
  { name: 'Pita', price: 2 },
  { name: 'Can Soda, Water, Juicebox', price: 2 },
];
