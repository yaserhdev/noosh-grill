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

const TOAST_BASE = 'https://noosh.toast.site/order/nooshgrill';

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
    toastUrl: `${TOAST_BASE}/item-chicken-schnitzel-sub_c4d6244a-2a84-4ecf-a5a6-b7463ab74b86`,
  },
  {
    name: 'Chapli Chopped Cheese',
    price: 13,
    description:
      'spiced beef with herbs, cheese, topped with sumac, fresh cilantro, tomato, lettuce, white sauce, and cilantro chutney',
    spicy: true,
    image: 'chapli-chopped-cheese.jpg',
    toastUrl: `${TOAST_BASE}/item-chapli-chopped-cheese-sub_cc388480-e917-4172-b558-d63d9e7c3144`,
  },
  {
    name: 'Masala Chicken and Cheese',
    price: 13,
    description:
      'fresh ground chicken, cheese, grilled onions and jalapeños, spices, fresh cilantro, mayo, and cilantro chutney',
    spicy: true,
    image: 'masala-chicken-and-cheese.jpg',
    toastUrl: `${TOAST_BASE}/item-masala-chicken-and-cheese-sub_17e31bac-77c7-4380-a298-e0b0740b62e8`,
  },
  {
    name: 'Original Chopped Cheese',
    price: 13,
    description:
      'fresh ground beef, cheese, grilled onions and green peppers, topped with lettuce, tomato, and our burger sauce and our house-made sauce',
    image: 'original-chopped-cheese.jpg',
    toastUrl: `${TOAST_BASE}/item-original-chopped-cheese-sub_5a8f97fb-5717-4a6c-9492-d4b2fb69efce`,
  },
  {
    name: 'Buffalo Chicken Cheesesteak',
    price: 13,
    description:
      'fresh ground chicken in a spicy buffalo sauce, cheese, grilled onions and green peppers, topped with lettuce, tomato, and mayo',
    spicy: true,
    image: 'buffalo-chicken-cheesesteak.jpg',
    toastUrl: `${TOAST_BASE}/item-buffalo-chicken-cheesesteak-sub_61705bed-ce4d-41b1-ba47-1370f52f23e3`,
  },
];

/* ============================================================
   Pita Wrap — no direct Toast deep-link, falls back to order page
   ============================================================ */

export const pitaWrap = {
  name: 'Noosh Style Pita Wrap',
  price: 12,
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
    toastUrl: `${TOAST_BASE}/item-classic-smash-burger_68cc9eaa-6739-4a87-ae55-510bef699c94`,
  },
  {
    name: 'Jalapeño',
    singlePrice: 8.5,
    doublePrice: 11.5,
    description:
      'fresh premium beef patty, topped with cheese, fresh-sliced jalapeños, and our burger sauce',
    spicy: true,
    image: 'jalapeño.jpg',
    toastUrl: `${TOAST_BASE}/item-jalapeo-smash-burger_ab32bfd9-1cf2-487d-855c-c30f4191b438`,
  },
  {
    name: 'Patriot',
    singlePrice: 9,
    doublePrice: 12,
    description:
      'fresh premium beef patty, topped with cheese, lettuce, tomato, pickles, and our burger sauce',
    image: 'patriot.jpg',
    toastUrl: `${TOAST_BASE}/item-patriot-smash-burger_8e4cf249-96f9-452a-8cf7-f7fa48e0fd33`,
  },
];

export const burgerExtras: BurgerExtra[] = [
  { name: 'extra patty', price: 3 },
  { name: 'fresh jalapeños', price: 1 },
  { name: 'grilled onions', price: 1 },
];

/* ============================================================
   Build Your Own Bowl — no direct Toast deep-link
   ============================================================ */

export const buildYourOwnBowl = {
  price: 14,
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
    toastUrl: `${TOAST_BASE}/item-chicken-schnitzel-bowl_a7eb2286-68cb-4dda-97f3-405cfb37db8b`,
  },
  {
    name: 'Chapli Bowl',
    price: 15,
    description:
      'spiced beef with herbs, served over rice, chopped salad, topped with fries, and choice of sauce(s)',
    spicy: true,
    image: 'chapli-bowl.jpg',
    toastUrl: `${TOAST_BASE}/item-chapli-bowl_e259d298-11eb-41ca-b5fd-0db2a395ca86`,
  },
  {
    name: 'Protein & Salad Bowl',
    price: 14,
    description:
      'choice of protein, served over romaine and chopped salad, red pepper hummus, and choice of sauce(s)',
    image: 'protein-&-salad-bowl.jpg',
    toastUrl: `${TOAST_BASE}/item-protein-salad-bowl_21ecc735-3a39-47f5-a37b-7fe61ac952dc`,
  },
];

/* ============================================================
   Kids Menu — no direct Toast deep-links
   ============================================================ */

export const kidsMenu: KidsItem[] = [
  {
    name: "Lil' Bowl",
    price: 8,
    description: 'choice of protein, rice, chopped salad, and choice of sauce(s)',
  },
  {
    name: "Lil' Smashburger",
    price: 7.5,
    description: 'ketchup, mayo and cheese',
  },
  {
    name: "Lil' Chicken Nuggets",
    price: 8,
    description: 'served with fries',
  },
];

/* ============================================================
   Sides — no direct Toast deep-links
   ============================================================ */

export const sides: SideItem[] = [
  { name: 'Fries', price: 4 },
  { name: 'Spicy Fries', price: 4.5 },
  { name: 'Falafel (7) w/Sauce', price: 4.5 },
  { name: 'Loaded Fries', price: 11 },
  { name: 'Red Pepper Hummus & Pita', price: 5 },
  { name: 'Pita', price: 2 },
  { name: 'Can Soda, Water, Juicebox', price: 2 },
];
