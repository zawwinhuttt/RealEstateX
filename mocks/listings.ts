import { Listing } from '@/types/listing'; // Assuming this import exists or is needed

export const listings: Listing[] = [
  // --- Original 3 Listings ---
  {
    id: '1',
    title: 'Modern Loft with City Views',
    location: 'Downtown, New York',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    ],
    price: 250,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 124,
    type: 'Entire apartment',
    beds: 2,
    baths: 2,
    superhost: true,
  },
  {
    id: '2',
    title: 'Beachfront Villa',
    location: 'Miami Beach, Florida',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2',
    ],
    price: 450,
    currency: 'USD',
    rating: 4.8,
    reviewCount: 89,
    type: 'Entire villa',
    beds: 4,
    baths: 3,
    superhost: true,
  },
  {
    id: '3',
    title: 'Cozy Mountain Cabin',
    location: 'Aspen, Colorado',
    images: [
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8',
    ],
    price: 320,
    currency: 'USD',
    rating: 4.7,
    reviewCount: 156,
    type: 'Entire cabin',
    beds: 3,
    baths: 2,
    superhost: false,
  },
  // --- Previous 5 Listings ---
  {
    id: '4',
    title: 'Stylish Studio in Shoreditch',
    location: 'Shoreditch, London',
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f',
    ],
    price: 180,
    currency: 'GBP',
    rating: 4.6,
    reviewCount: 95,
    type: 'Entire studio',
    beds: 1,
    baths: 1,
    superhost: false,
  },
  {
    id: '5',
    title: 'Rustic Farmhouse Retreat',
    location: 'Chianti, Tuscany',
    images: [
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7ef5d',
    ],
    price: 300,
    currency: 'EUR',
    rating: 4.9,
    reviewCount: 210,
    type: 'Entire farmhouse',
    beds: 5,
    baths: 3,
    superhost: true,
  },
  {
    id: '6',
    title: 'Charming Lakeside Cottage',
    location: 'Lake Tahoe, California',
    images: [
      'https://images.unsplash.com/photo-1519974719765-e6559eac2575',
    ],
    price: 280,
    currency: 'USD',
    rating: 4.75,
    reviewCount: 112,
    type: 'Entire cottage',
    beds: 2,
    baths: 1,
    superhost: false,
  },
  {
    id: '7',
    title: 'Elegant Parisian Apartment',
    location: 'Le Marais, Paris',
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156',
    ],
    price: 220,
    currency: 'EUR',
    rating: 4.85,
    reviewCount: 180,
    type: 'Entire apartment',
    beds: 1,
    baths: 1,
    superhost: true,
  },
  {
    id: '8',
    title: 'Secluded Tropical Bungalow',
    location: 'Ubud, Bali',
    images: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2',
    ],
    price: 150,
    currency: 'USD',
    rating: 4.95,
    reviewCount: 250,
    type: 'Entire bungalow',
    beds: 1,
    baths: 1,
    superhost: true,
  },
  // --- New 20 Listings Start Here ---
  {
    id: '9',
    title: 'Historic Brownstone Room',
    location: 'Brooklyn, New York',
    images: [
      'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32', // Brownstone exterior
    ],
    price: 120,
    currency: 'USD',
    rating: 4.5,
    reviewCount: 75,
    type: 'Private room',
    beds: 1,
    baths: 1, // Shared likely
    superhost: false,
  },
  {
    id: '10',
    title: 'Penthouse with Rooftop Pool',
    location: 'Los Angeles, California',
    images: [
      'https://images.unsplash.com/photo-1598896648254-61861957a41a', // Pool view
    ],
    price: 600,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 150,
    type: 'Entire penthouse',
    beds: 3,
    baths: 3,
    superhost: true,
  },
  {
    id: '11',
    title: 'Minimalist Kyoto Machiya',
    location: 'Gion, Kyoto',
    images: [
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186', // Exterior Japan traditional
    ],
    price: 28000, // JPY
    currency: 'JPY',
    rating: 4.8,
    reviewCount: 110,
    type: 'Entire house',
    beds: 2,
    baths: 1,
    superhost: true,
  },
  {
    id: '12',
    title: 'Desert Oasis near National Park',
    location: 'Joshua Tree, California',
    images: [
      'https://images.unsplash.com/photo-1516575731171-76341991334c', // Exterior desert house
    ],
    price: 290,
    currency: 'USD',
    rating: 4.7,
    reviewCount: 135,
    type: 'Entire house',
    beds: 3,
    baths: 2,
    superhost: false,
  },
  {
    id: '13',
    title: 'Canal House Apartment',
    location: 'Amsterdam, Netherlands',
    images: [
      'https://images.unsplash.com/photo-1517736996303-4eec4a665155', // Canal view
    ],
    price: 190,
    currency: 'EUR',
    rating: 4.65,
    reviewCount: 105,
    type: 'Entire apartment',
    beds: 2,
    baths: 1,
    superhost: true,
  },
  {
    id: '14',
    title: 'Ski-in/Ski-out Chalet',
    location: 'Whistler, British Columbia',
    images: [
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2', // Exterior snow chalet
    ],
    price: 550,
    currency: 'CAD',
    rating: 4.8,
    reviewCount: 98,
    type: 'Entire chalet',
    beds: 4,
    baths: 3,
    superhost: true,
  },
  {
    id: '15',
    title: 'Artistic Loft in Berlin',
    location: 'Kreuzberg, Berlin',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', // Interior industrial/art
    ],
    price: 160,
    currency: 'EUR',
    rating: 4.7,
    reviewCount: 140,
    type: 'Entire loft',
    beds: 1,
    baths: 1,
    superhost: false,
  },
  {
    id: '16',
    title: 'Ocean View Condo',
    location: 'Honolulu, Hawaii',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', // Beach view
    ],
    price: 350,
    currency: 'USD',
    rating: 4.85,
    reviewCount: 195,
    type: 'Entire condo',
    beds: 2,
    baths: 2,
    superhost: true,
  },
  {
    id: '17',
    title: 'Quirky Airstream Adventure',
    location: 'Marfa, Texas',
    images: [
      'https://images.unsplash.com/photo-1517849845537-4d257902454a', // Airstream exterior
    ],
    price: 130,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 220,
    type: 'Camper/RV',
    beds: 1,
    baths: 1,
    superhost: true,
  },
  {
    id: '18',
    title: 'Luxury Safari Tent',
    location: 'Serengeti, Tanzania',
    images: [
      'https://images.unsplash.com/photo-1523978591478-c7b62a743活', // Tent exterior safari
    ],
    price: 700,
    currency: 'USD',
    rating: 4.95,
    reviewCount: 85,
    type: 'Tent',
    beds: 2,
    baths: 1,
    superhost: true,
  },
   {
    id: '19',
    title: 'Downtown High-Rise Apartment',
    location: 'Chicago, Illinois',
    images: [
      'https://images.unsplash.com/photo-1559708945-515801a493ea', // City skyline Chicago
    ],
    price: 210,
    currency: 'USD',
    rating: 4.6,
    reviewCount: 115,
    type: 'Entire apartment',
    beds: 1,
    baths: 1,
    superhost: false,
  },
  {
    id: '20',
    title: 'Vineyard Guest House',
    location: 'Napa Valley, California',
    images: [
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb', // Vineyard landscape
    ],
    price: 380,
    currency: 'USD',
    rating: 4.88,
    reviewCount: 160,
    type: 'Entire guesthouse',
    beds: 2,
    baths: 2,
    superhost: true,
  },
  {
    id: '21',
    title: 'Cozy Room near University',
    location: 'Cambridge, Massachusetts',
    images: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f', // University building
    ],
    price: 95,
    currency: 'USD',
    rating: 4.4,
    reviewCount: 60,
    type: 'Private room',
    beds: 1,
    baths: 1, // Shared
    superhost: false,
  },
  {
    id: '22',
    title: 'Remote Icelandic Cabin',
    location: 'Near Vik, Iceland',
    images: [
      'https://images.unsplash.com/photo-1504829857131-a170755d1a5f', // Cabin exterior Iceland landscape
    ],
    price: 250,
    currency: 'EUR', // Often priced in EUR
    rating: 4.9,
    reviewCount: 100,
    type: 'Entire cabin',
    beds: 2,
    baths: 1,
    superhost: true,
  },
  {
    id: '23',
    title: 'Rooftop Apartment with Acropolis View',
    location: 'Athens, Greece',
    images: [
      'https://images.unsplash.com/photo-1580579048598-b65f15785f9a', // Acropolis view
    ],
    price: 170,
    currency: 'EUR',
    rating: 4.8,
    reviewCount: 175,
    type: 'Entire apartment',
    beds: 1,
    baths: 1,
    superhost: true,
  },
  {
    id: '24',
    title: 'Family Home in Suburbia',
    location: 'Austin, Texas',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be', // Suburban house exterior
    ],
    price: 220,
    currency: 'USD',
    rating: 4.55,
    reviewCount: 90,
    type: 'Entire house',
    beds: 4,
    baths: 2.5, // Common notation for 2 full, 1 half bath
    superhost: false,
  },
  {
    id: '25',
    title: 'Eco-Friendly Treehouse',
    location: 'Costa Rica Rainforest',
    images: [
      'https://images.unsplash.com/photo-1501870190084-cdf29f15ef87', // Treehouse exterior jungle
    ],
    price: 190,
    currency: 'USD',
    rating: 4.92,
    reviewCount: 145,
    type: 'Treehouse',
    beds: 1,
    baths: 1,
    superhost: true,
  },
  {
    id: '26',
    title: 'Shared Hostel Dorm Bed',
    location: 'Lisbon, Portugal',
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457', // Bunk beds / Dorm room
    ],
    price: 30,
    currency: 'EUR',
    rating: 4.2,
    reviewCount: 350,
    type: 'Shared room',
    beds: 1, // Per bed
    baths: 4, // Shared baths
    superhost: false,
  },
  {
    id: '27',
    title: 'Grand Castle Stay',
    location: 'Scottish Highlands',
    images: [
      'https://images.unsplash.com/photo-1576796996933-a9b5c0e07f32', // Castle exterior Scotland
    ],
    price: 800,
    currency: 'GBP',
    rating: 4.95,
    reviewCount: 65,
    type: 'Private room in castle', // Or 'Entire castle' if applicable
    beds: 1, // Per room usually
    baths: 1, // En-suite likely
    superhost: true,
  },
  {
    id: '28',
    title: 'Simple Room for Commuters',
    location: 'Near SFO Airport, California',
    images: [
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d', // Basic bedroom
    ],
    price: 85,
    currency: 'USD',
    rating: 4.3,
    reviewCount: 105,
    type: 'Private room',
    beds: 1,
    baths: 1, // Shared
    superhost: false,
  },
  // --- New 20 Listings End Here ---
];