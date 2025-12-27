import React, { useState } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "campus", name: "Campus" },
    { id: "events", name: "Events" },
    { id: "academic", name: "Academic" },
    { id: "sports", name: "Sports" },
    { id: "cultural", name: "Cultural" },
    { id: "alumni", name: "Alumni" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://www.bitraipur.ac.in/newgallery/InductionProgramme2024-25/1.JPG",
      category: "campus",
      title: "Main Building",
    },
    {
      id: 2,
      src: "https://www.bitraipur.ac.in/newgallery/Techfest-CSVTU/1.jpeg",
      category: "events",
      title: "Convocation 2024",
    },
    {
      id: 3,
      src: "https://www.bitraipur.ac.in/newgallery/InductionProgramme2024-25/2.JPG",
      category: "academic",
      title: "Lab Session",
    },
    {
      id: 4,
      src: "https://www.bitraipur.ac.in/newgallery/ExtraCurricular/2.JPEG",
      category: "sports",
      title: "Sports Day",
    },
    {
      id: 5,
      src: "https://www.bitraipur.ac.in/newgallery/ExtraCurricular/4.JPEG",
      category: "cultural",
      title: "Cultural Fest",
    },
    {
      id: 6,
      src: "https://www.bitraipur.ac.in/newgallery/Techfest-uday/8.JPG",
      category: "campus",
      title: "Library",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="py-14 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-900">
            College Gallery
          </h1>
          <p className="text-gray-600 mt-2">
            Moments from campus life and college activities
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm rounded-md border transition ${
                activeCategory === cat.id
                  ? "bg-[#3a4c96] text-white border-[#3a4c96]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-sm transition"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 text-sm text-gray-700">{img.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
