export interface MenuItem {
  name: string;
  price: string;
  category: string;
  description?: string;
}

export const menuData: MenuItem[] = [
  // Breakfast
  { name: "Puri", price: "40/-", category: "Breakfast" },
  { name: "Plain Paratha", price: "40/-", category: "Breakfast" },
  { name: "Lachha Paratha", price: "50/-", category: "Breakfast" },
  { name: "Aloo Paratha", price: "60/-", category: "Breakfast" },
  { name: "Maggie", price: "40/-", category: "Breakfast" },
  { name: "Omelette", price: "20/-", category: "Breakfast" },

  // Momos
  { name: "Veg Steam Momo", price: "60/-", category: "Momo" },
  { name: "Chicken Steam Momo", price: "70/-", category: "Momo" },
  { name: "Chicken Fried Momo", price: "90/-", category: "Momo" },
  { name: "Veg Fried Momo", price: "80/-", category: "Momo" },
  { name: "Chicken Taipo Momo", price: "50/-", category: "Momo" },
  { name: "Chicken Jhol Momo", price: "100/-", category: "Momo" },
  { name: "Chicken Kurkure Momo", price: "100/-", category: "Momo" },
  { name: "Veg Kurkure Momo", price: "90/-", category: "Momo" },
  { name: "Chicken Chilli Momo", price: "110/-", category: "Momo" },
  { name: "Veg Cheese Momo", price: "130/-", category: "Momo" },

  // Rolls
  { name: "Veg Roll", price: "60/-", category: "Rolls" },
  { name: "Egg Roll", price: "70/-", category: "Rolls" },
  { name: "Chicken Roll", price: "80/-", category: "Rolls" },
  { name: "Spring Roll (Veg)", price: "60/-", category: "Rolls" },
  { name: "Spring Roll (Non-Veg)", price: "80/-", category: "Rolls" },
  { name: "Special Roll", price: "90/-", category: "Rolls" },

  // Snacks
  { name: "French Fries", price: "60/-", category: "Snacks" },
  { name: "Honey Chilli Potato", price: "80/-", category: "Snacks" },
  { name: "Chilli Potato", price: "70/-", category: "Snacks" },
  { name: "Chicken Popcorn (10pc)", price: "100/-", category: "Snacks" },
  { name: "Barbeque Chicken Wings (2pc)", price: "80/-", category: "Snacks" },
  { name: "Chicken Lollipop (2pc)", price: "80/-", category: "Snacks" },
  { name: "Chicken Drums of Heaven (2pc)", price: "100/-", category: "Snacks" },
  { name: "Chicken 65 Boneless (8pc)", price: "180/-", category: "Snacks" },
  { name: "Crispy Chilli Baby Corn", price: "180/-", category: "Snacks" },
  { name: "Paneer 65 (8pc)", price: "180/-", category: "Snacks" },

  // Main Course
  { name: "Veg Manchurian (8pc)", price: "80/-", category: "Main Course" },
  { name: "Chicken Manchurian (8pc)", price: "160/-", category: "Main Course" },
  { name: "Chilli Chicken (Dry/Gravy) (8pc)", price: "150/-", category: "Main Course" },
  { name: "Chilli Chicken Boneless (8pc)", price: "180/-", category: "Main Course" },
  { name: "Chicken Butter Masala (4pc)", price: "190/-", category: "Main Course" },
  { name: "Chicken Kadhai (4pc)", price: "190/-", category: "Main Course" },
  { name: "Chilli Paneer (8pc)", price: "180/-", category: "Main Course" },

  // Noodles & Rice
  { name: "Hakka Noodles (Veg)", price: "60/-", category: "Noodles & Rice" },
  { name: "Hakka Noodles (Chicken)", price: "80/-", category: "Noodles & Rice" },
  { name: "Fried Rice (Veg)", price: "60/-", category: "Noodles & Rice" },
  { name: "Fried Rice (Chicken)", price: "80/-", category: "Noodles & Rice" },
  { name: "Chicken Thukpa", price: "120/-", category: "Noodles & Rice" },
];
