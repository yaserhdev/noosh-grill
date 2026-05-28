/* ============================================================
   Menu Data Types — Single source of truth for all menu items
   ============================================================ */

export interface MenuItem {
  name: string;
  price: number;
  description: string;
  spicy?: boolean;
  image: string;
  toastUrl?: string;
}

export interface BurgerItem {
  name: string;
  singlePrice: number;
  doublePrice: number;
  description: string;
  spicy?: boolean;
  image: string;
  toastUrl?: string;
}

export interface BurgerExtra {
  name: string;
  price: number;
}

export interface Protein {
  name: string;
  description: string;
}

export interface Sauce {
  name: string;
  description: string;
  spicyLevel?: number;
}

export interface SpecialtyBowl {
  name: string;
  price: number;
  description: string;
  spicy?: boolean;
  image: string;
  toastUrl?: string;
}

export interface KidsItem {
  name: string;
  price: number;
  description: string;
}

export interface SideItem {
  name: string;
  price: number;
}

export interface Review {
  text: string;
  rating: number;
  author: string;
}
