// properties.ts
export type Property = {
  id: number;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  area: string;
  images: string[];
  tagColor: string;
  description: string;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Stefanos Springs Estate ",
    location: "After Nigeria Ghana International School, Life Camp",
    rating: 4.8,
    reviews: 348,
    area: "Semi-finished",
    images: ["/bedroom3.jpg", "/bedroom3.jpg", "/bedroom3.jpg"],
    tagColor: "bg-red-500",
    description: " 2 Bedroom Block of Flat."
  },
  {
    id: 2,
    title: "Heritage Hills ",
    location: "River Park Estate Lugbe",
    rating: 4.9,
    reviews: 256,
    area: "Semi Finished, Fully Finished",
    images: ["/newimage.jpg", "/Building12.jpg", "/newimage.jpg"],
    tagColor: "bg-green-500",
    description: "Security, help desk, electricity and water supply  ."
  },
  {
    id: 3,
    title: "Stefanos Springs Estate ",
    location: "After Nigeria Ghana International School, Life Camp",
    rating: 4.8,
    reviews: 348,
    area: "Semi-finished",
    images: ["/bedroom1.jpg", "/bedroom1.jpg", "/bedroom1.jpg"],
    tagColor: "bg-red-500",
    description: " 3 Bedroom Block of Flat."
  },

  {
    id: 4,
    title: "LifeBricks Court Duboyi",
    location: " Lokogoma after suncity estate ",
    rating: 4.7,
    reviews: 189,
    area: "Semi – Finished, Fully finished",
    images: ["/lifecity.jpeg", "/lifecity.jpeg", "/lifecity.jpeg"],
    tagColor: "bg-red-500",
    description: " Security, help desk, electricity and water supply"
  },
  {
    id: 5,
    title: "Stefanos Springs Estate ",
    location: "After Nigeria Ghana International School, Life Camp",
    rating: 4.8,
    reviews: 348,
    area: "Semi-finished",
    images: ["/bedroom2.jpg", "/bedroom2.jpg", "/bedroom2.jpg"],
    tagColor: "bg-red-500",
    description: "  5 Bedroom Terrace Duplex."
  },

  {
    id: 6,
    title: "Diqsa’a Court",
    location: "Femi Gbajabiamila’s crescent Jahi After H-Medix",
    rating: 4.5,
    reviews: 298,
    area: "Semi – Finished, Fully finished",
    images: ["/estate3.jpg", "/estate3.jpg", "/estate3.jpg"],
    tagColor: "bg-red-500",
    description: "3 unit of 3-bedroom block of flat, 3 unit of 2-bedroom block of flat"
  },

  {
    id: 7,
    title: "Grandeur City Aso. Ext",
    location: "Asokoro Ext.",
    rating: 4.8,
    reviews: 223,
    area: "200 sqm, 300sqm, 400sqm,",
    images: ["/Building7.jpg", "/Building7.jpg", "/Building7.jpg"],
    tagColor: "bg-green-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 8,
    title: "Royal Hills Aso. Ext",
    location: "Asokoro Ext.",
    rating: 4.4,
    reviews: 367,
    area: "200 sqm, 300sqm, 400sqm,",
    images: ["/Building8.jpg", "/Building8.jpg", "/Building8.jpg"],
    tagColor: "bg-red-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 9,
    title: "Apo Topaz (Tafyi)",
    location: "Apo",
    rating: 4.3,
    reviews: 181,
    area: "250 sqm, 350sqm, 450sqm,",
    images: ["/Building10.jpg", "/Building10.jpg", "/Building10.jpg"],
    tagColor: "bg-blue-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 10,
    title: "Wingate Estate",
    location: "Kuje",
    rating: 4.9,
    reviews: 142,
    area: "250 sqm, 350sqm, 450sqm,",
    images: ["/Building9.jpg", "/Building9.jpg", "/Building9.jpg"],
    tagColor: "bg-orange-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id:11,
    title: "Primlux Estate Apo",
    location: "Apo",
    rating: 4.2,
    reviews: 221,
    area: "250 sqm, 350sqm, 450sqm,",
    images: ["/Building11.jpg", "/Building11.jpg", "/Building11.jpg"],
    tagColor: "bg-red-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
];



// lib/data.ts
export const testimonials = [
  {
    id: 1,
    name: "Chiamaka Nwosu",
    role: "First-time Land Buyer",
    photo: "/Invisible.png",
    text: "Prosperealty made buying my first plot so simple. They explained every step clearly and ensured I got a verified, genuine property.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emeka Johnson",
    role: "Real Estate Investor",
    photo: "/Invisible.png",
    text: "Working with Prosperealty was a smooth experience. Their transparency and professionalism gave me full confidence in my investment.",
    rating: 5,
  },
  {
    id: 3,
    name: "Grace Eze",
    role: "Estate Plot Purchaser",
    photo: "/Invisible.png",
    text: "From flexible payment plans to stress-free documentation, Prosperealty handled everything perfectly. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Ahmed Musa",
    role: "Landowner",
    photo: "/Invisible.png",
    text: "They delivered exactly what they promised. Secure, trustworthy, and professional all the way.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ngozi Okafor",
    role: "Property Seller",
    photo: "/Invisible.png",
    text: "Prosperealty’s marketing and negotiation skills helped me sell quickly and at a great price. Excellent team!",
    rating: 5,
  },
  {
    id: 6,
    name: "Samuel Adewale",
    role: "Returning Client",
    photo: "/Invisible.png",
    text: "I’ve purchased multiple properties with Prosperealty, and each time the process has been smooth, honest, and stress-free.",
    rating: 5,
  },
];

