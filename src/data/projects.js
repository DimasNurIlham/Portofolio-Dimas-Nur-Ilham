import minikoffie from "../assets/projects/minikoffie.png";
import andara from "../assets/projects/andara.png";
import birthday from "../assets/projects/birthday.png";

export const projects = [
  {
    id: 1,
    title: "Minikoffie",
    featured: true,
    image: minikoffie,
    description:
      "Web-Based Restaurant Operational System yang mengintegrasikan reservasi meja, pemesanan menu, dashboard admin, dan manajemen inventaris.",
    technologies: [
      "Laravel 12",
      "React.js",
      "Tailwind CSS",
      "PostgreSQL",
      "REST API",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Andara Furnitur",
    featured: false,
    image: andara,
    description:
      "Website company profile dan katalog produk furnitur berbasis Laravel dengan tampilan modern dan responsif.",
    technologies: [
      "Laravel",
      "Blade",
      "Tailwind CSS",
      "MySQL",
    ],
    github: "https://github.com/DimasNurIlham/andarafurnitur",
    demo: "#",
  },
  {
    id: 3,
    title: "Birthday Website",
    featured: false,
    image: birthday,
    description:
      "Website birthday mengucapkan ulang tahun dengan link qr love.",
    technologies: [
      "HTML",
      "CSS",
      "JS",
    ],
    github: "https://github.com/DimasNurIlham/birthday-website",
    demo: "#",
  },
];