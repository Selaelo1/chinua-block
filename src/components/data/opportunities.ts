// data/opportunities.ts
export const opportunities = [
  {
    id: 1,  // Unique ID added
    title: "Gold Edge Property Development",
    type: "Real Estate",
    minInvestment: 750,
    expectedReturn: "15-18%",
    image: "/picture1.jpg",  // Corrected local image path
    description:
      "Emaar South is a thriving community where modern living meets natural tranquillity. With green parks, family-friendly amenities, and seamless connections to Dubai’s key landmarks, it’s a place where ambitions grow and families flourish.",
    additionalImages: [
      "/picture2.jpg",  // Corrected local image path
      "/picture3.jpg",  // Corrected local image path
      "/picture4.jpg",  // Corrected local image path
    ],
    pastPerformance: [10, 12, 14, 16, 18, 20, 22],
  },
  {
    id: 2,  // Unique ID added
    title: "Solar Farm in Cape Town",
    type: "Renewable Energy",
    minInvestment: 200,
    expectedReturn: "12-15%",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
    description:
      "An innovative solar energy farm project in Cape Town, generating green energy for the community.",
    pastPerformance: [5, 7, 9, 11, 13, 15, 17],
  },
  {
    id: 3,  // Unique ID added
    title: "Kenyan Coffee Harvest",
    type: "Agriculture",
    minInvestment: 450,
    expectedReturn: "8-10%",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
    description:
      "Support sustainable coffee farming in Kenya and enjoy the fruits of a thriving agricultural market.",
    pastPerformance: [2, 4, 6, 8, 10, 12, 14],
  },
  {
    id: 4,  // Unique ID added
    title: "Lagos Tech Hub",
    type: "Real Estate",
    minInvestment: 300,
    expectedReturn: "10-12%",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    description:
      "A cutting-edge technology hub in Lagos aimed at supporting Africa's digital transformation.",
    additionalImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
    ],
    pastPerformance: [3, 5, 7, 9, 11, 13, 15],
  },
];
