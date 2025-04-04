export const restaurantsList = [
  {
    id: 1,
    name: "Pizza Palace",
    type: "Italian",
    rating: 4.5,
    location: {
      city: "Downtown",
      address: "123 Pizza St.",
      zip: "12345",
    },
    menu: [
      { name: "Margherita Pizza", price: 12.99 },
      { name: "Pepperoni Pizza", price: 14.99 },
      { name: "Spaghetti Bolognese", price: 16.99 },
    ],
    openingHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "Closed",
    },
    reviews: [
      { user: "John", rating: 5, comment: "Great pizza, friendly staff!" },
      { user: "Sara", rating: 4, comment: "Good food, but a bit pricey." },
    ],
    isOpen: true,
  },
  {
    id: 2,
    name: "Sushi Spot",
    type: "Japanese",
    rating: 4.7,
    location: {
      city: "Uptown",
      address: "456 Sushi Ave.",
      zip: "67890",
    },
    menu: [
      { name: "California Roll", price: 9.99 },
      { name: "Salmon Nigiri", price: 13.99 },
      { name: "Tempura Udon", price: 18.99 },
    ],
    openingHours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 10:00 PM",
      saturday: "11:00 AM - 10:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    reviews: [
      { user: "Emily", rating: 5, comment: "The best sushi in town!" },
      {
        user: "Daniel",
        rating: 4,
        comment: "Fresh fish, but the service could be better.",
      },
    ],
    isOpen: false,
  },
  {
    id: 3,
    name: "Curry Corner",
    type: "Indian",
    rating: 4.2,
    location: {
      city: "Midtown",
      address: "789 Curry Rd.",
      zip: "11223",
    },
    menu: [
      { name: "Butter Chicken", price: 14.99 },
      { name: "Paneer Tikka", price: 12.99 },
      { name: "Biryani", price: 16.99 },
    ],
    openingHours: {
      monday: "10:30 AM - 10:00 PM",
      tuesday: "10:30 AM - 10:00 PM",
      wednesday: "10:30 AM - 10:00 PM",
      thursday: "10:30 AM - 10:00 PM",
      friday: "10:30 AM - 11:00 PM",
      saturday: "10:30 AM - 11:00 PM",
      sunday: "Closed",
    },
    reviews: [
      {
        user: "Raj",
        rating: 4,
        comment: "Delicious curries, but could be spicier.",
      },
      {
        user: "Ava",
        rating: 4.5,
        comment: "Great variety of vegetarian options.",
      },
    ],
    isOpen: true,
  },
  {
    id: 4,
    name: "Taco Time",
    type: "Mexican",
    rating: 4.0,
    location: {
      city: "West End",
      address: "101 Taco Blvd.",
      zip: "33456",
    },
    menu: [
      { name: "Tacos (Beef)", price: 7.99 },
      { name: "Guacamole & Chips", price: 4.99 },
      { name: "Quesadilla", price: 9.99 },
    ],
    openingHours: {
      monday: "11:00 AM - 8:00 PM",
      tuesday: "11:00 AM - 8:00 PM",
      wednesday: "11:00 AM - 8:00 PM",
      thursday: "11:00 AM - 8:00 PM",
      friday: "11:00 AM - 9:00 PM",
      saturday: "11:00 AM - 9:00 PM",
      sunday: "Closed",
    },
    reviews: [
      {
        user: "Carlos",
        rating: 3.5,
        comment: "Good food, but the tacos were a bit cold.",
      },
      { user: "Megan", rating: 4, comment: "Love the guac, tacos are great!" },
    ],
    isOpen: true,
  },
  {
    id: 5,
    name: "Burger Haven",
    type: "American",
    rating: 4.3,
    location: {
      city: "East Side",
      address: "202 Burger Ln.",
      zip: "55678",
    },
    menu: [
      { name: "Cheeseburger", price: 11.99 },
      { name: "Fries", price: 3.99 },
      { name: "Milkshake", price: 5.99 },
    ],
    openingHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "Closed",
    },
    reviews: [
      {
        user: "Sam",
        rating: 4,
        comment: "Good burger, but I expected a bit more seasoning.",
      },
      { user: "Olivia", rating: 4.5, comment: "Love their shakes and fries!" },
    ],
    isOpen: true,
  },
  {
    id: 6,
    name: "Burger Haven",
    type: "American",
    rating: 4.3,
    location: {
      city: "East Side",
      address: "202 Burger Ln.",
      zip: "55678",
    },
    menu: [
      { name: "Cheeseburger", price: 11.99 },
      { name: "Fries", price: 3.99 },
      { name: "Milkshake", price: 5.99 },
    ],
    openingHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "Closed",
    },
    reviews: [
      {
        user: "Sam",
        rating: 4,
        comment: "Good burger, but I expected a bit more seasoning.",
      },
      { user: "Olivia", rating: 4.5, comment: "Love their shakes and fries!" },
    ],
    isOpen: true,
  },
  {
    id: 7,
    name: "Burger Haven",
    type: "American",
    rating: 4.3,
    location: {
      city: "East Side",
      address: "202 Burger Ln.",
      zip: "55678",
    },
    menu: [
      { name: "Cheeseburger", price: 11.99 },
      { name: "Fries", price: 3.99 },
      { name: "Milkshake", price: 5.99 },
    ],
    openingHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "Closed",
    },
    reviews: [
      {
        user: "Sam",
        rating: 4,
        comment: "Good burger, but I expected a bit more seasoning.",
      },
      { user: "Olivia", rating: 4.5, comment: "Love their shakes and fries!" },
    ],
    isOpen: true,
  },
  {
    id: 8,
    name: "Burger Haven",
    type: "American",
    rating: 4.3,
    location: {
      city: "East Side",
      address: "202 Burger Ln.",
      zip: "55678",
    },
    menu: [
      { name: "Cheeseburger", price: 11.99 },
      { name: "Fries", price: 3.99 },
      { name: "Milkshake", price: 5.99 },
    ],
    openingHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "Closed",
    },
    reviews: [
      {
        user: "Sam",
        rating: 4,
        comment: "Good burger, but I expected a bit more seasoning.",
      },
      { user: "Olivia", rating: 4.5, comment: "Love their shakes and fries!" },
    ],
    isOpen: true,
  },
  {
    id: 9,
    name: "Burger Haven",
    type: "American",
    rating: 4.3,
    location: {
      city: "East Side",
      address: "202 Burger Ln.",
      zip: "55678",
    },
    menu: [
      { name: "Cheeseburger", price: 11.99 },
      { name: "Fries", price: 3.99 },
      { name: "Milkshake", price: 5.99 },
    ],
    openingHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "Closed",
    },
    reviews: [
      {
        user: "Sam",
        rating: 4,
        comment: "Good burger, but I expected a bit more seasoning.",
      },
      { user: "Olivia", rating: 4.5, comment: "Love their shakes and fries!" },
    ],
    isOpen: true,
  },
];
