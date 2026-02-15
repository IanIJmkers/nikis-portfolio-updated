export const projects = [
  {
    id: 1,
    slug: "lychee-or-not",
    title: "lychee or not",
    date: "January 2024",
    subtitle: "A botanical exploration / 2024",
    image: "/images/lychee.jpeg",
    hoverImage: "/images/lychee-hover.jpeg",
    gallery: [
      { id: 1, src: "/images/lychee-1.jpg" },
      { id: 2, src: "/images/lychee-2.jpg" },
      { id: 3, src: "/images/lychee-3.jpg" },
      { id: 4, src: "/images/lychee-4.jpg" },
    ],
  },
  {
    id: 2,
    slug: "spinal-fracture",
    title: "spinal fracture",
    date: "November 2023",
    subtitle: "Medical photography / 2023",
    image: "/images/spinal.png",
    hoverImage: "/images/spinal-hover.png",
    gallery: [
      { id: 1, src: "/images/spinal-1.jpg" },
      { id: 2, src: "/images/spinal-2.jpg" },
      { id: 3, src: "/images/spinal-3.jpg" },
    ],
  },
  {
    id: 3,
    slug: "the-gallery-of-unwanted-things",
    title: "the gallery of unwanted things",
    date: "September 2023",
    subtitle: "Conceptual series / 2023",
    image: "/images/unwanted.png",
    hoverImage: "/images/unwanted-hover.png",
    gallery: [
      { id: 1, src: "/images/unwanted-1.png" },
      { id: 2, src: "/images/unwanted-2.png" },
      { id: 3, src: "/images/unwanted-3.png" },
      { id: 4, src: "/images/unwanted-4.png" },
      { id: 5, src: "/images/unwanted-5.png" },
    ],
  },
  {
    id: 4,
    slug: "spoiled",
    title: "spoiled",
    date: "June 2023",
    subtitle: "Fashion editorial / 2023",
    image: "/images/spoiled.jpg",
    hoverImage: "/images/spoiled-hover.jpg",
    gallery: [
      { id: 1, src: "/images/spoiled-1.jpg" },
      { id: 2, src: "/images/spoiled-2.jpg" },
      { id: 3, src: "/images/spoiled-3.jpg" },
    ],
  },
  {
    id: 5,
    slug: "the-3rd-space",
    title: "the 3rd space",
    date: "March 2023",
    subtitle: "Architectural study / 2023",
    image: "/images/third.png",
    hoverImage: "/images/third-hover.png",
    gallery: [
      { id: 1, src: "/images/third-1.jpg" },
      { id: 2, src: "/images/third-2.jpg" },
      { id: 3, src: "/images/third-3.jpg" },
      { id: 4, src: "/images/third-4.jpg" },
    ],
  },
];

export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsExcluding = (excludeId) => {
  return projects.filter((project) => project.id !== excludeId);
};
