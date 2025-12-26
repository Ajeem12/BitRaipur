import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaImages,
  FaPlayCircle,
  FaDownload,
  FaShare,
} from "react-icons/fa";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "campus", name: "Campus Life" },
    { id: "events", name: "College Events" },
    { id: "academic", name: "Academic" },
    { id: "sports", name: "Sports" },
    { id: "cultural", name: "Cultural" },
    { id: "alumni", name: "Alumni Meets" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://www.bitraipur.ac.in/newgallery/InductionProgramme2024-25/1.JPG",
      category: "campus",
      title: "Main Building",
      date: "2024",
    },
    {
      id: 2,
      src: "https://www.bitraipur.ac.in/newgallery/Techfest-CSVTU/1.jpeg",
      category: "events",
      title: "Convocation 2024",
      date: "Jan 2024",
    },
    {
      id: 3,
      src: "https://www.bitraipur.ac.in/newgallery/InductionProgramme2024-25/2.JPG",
      category: "academic",
      title: "Lab Session",
      date: "2024",
    },
    {
      id: 4,
      src: "https://www.bitraipur.ac.in/newgallery/ExtraCurricular/2.JPEG",
      category: "sports",
      title: "Annual Sports Day",
      date: "Mar 2024",
    },
    {
      id: 5,
      src: "https://www.bitraipur.ac.in/newgallery/ExtraCurricular/4.JPEG",
      category: "cultural",
      title: "Cultural Fest",
      date: "Feb 2024",
    },
    {
      id: 6,
      src: "https://www.bitraipur.ac.in/newgallery/Techfest-uday/8.JPG",
      category: "campus",
      title: "Library",
      date: "2024",
    },
    {
      id: 7,
      src: "https://www.bitraipur.ac.in/newgallery/Techfest-uday/2.JPG",
      category: "academic",
      title: "Classroom",
      date: "2024",
    },
    {
      id: 8,
      src: "https://www.bitraipur.ac.in/newgallery/Techfest-CSVTU/2.jpeg",
      category: "alumni",
      title: "Alumni Meet",
      date: "Dec 2023",
    },
    {
      id: 9,
      src: "https://www.bitraipur.ac.in/newgallery/Techfest-CSVTU/7.jpeg",
      category: "events",
      title: "Workshop",
      date: "Nov 2023",
    },
    {
      id: 10,
      src: "https://www.bitraipur.ac.in/newgallery/Techfest-CSVTU/10.jpeg",
      category: "sports",
      title: "Cricket Tournament",
      date: "Oct 2023",
    },
    {
      id: 11,
      src: "https://www.bitraipur.ac.in/newgallery/Yaadein/2.JPG",
      category: "cultural",
      title: "Dance Competition",
      date: "Sep 2023",
    },
    {
      id: 12,
      src: "https://www.bitraipur.ac.in/newgallery/Yaadein/7.JPG",
      category: "academic",
      title: "Research Lab",
      date: "2024",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const featuredEvents = [
    { id: 1, title: "Convocation 2024", images: 250, date: "15 Jan 2024" },
    {
      id: 2,
      title: "Annual Cultural Fest",
      images: 180,
      date: "20-22 Feb 2024",
    },
    { id: 3, title: "Sports Week", images: 320, date: "10-15 Mar 2024" },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            College Gallery
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore moments from campus life, academic events, sports, and
            cultural activities
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-8">
          {/* <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Search photos by event, year, or keyword..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <FaFilter className="text-gray-500" />
              <span className="text-gray-600 font-medium">Filter by:</span>
            </div>
          </div> */}

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <FaImages className="mr-2 text-blue-500" />
              <span>{galleryImages.length}+ Photos</span>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2 text-green-500" />
              <span>2020-2024 Archive</span>
            </div>
          </div>
        </div>

        {/* Featured Events */}
        {/* <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Featured Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-gray-900">{event.title}</h3>
                    <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                      {event.images} photos
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <FaCalendarAlt className="mr-2" />
                    {event.date}
                  </div>
                  <button className="w-full text-center text-blue-600 font-medium py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                    View Album →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Photo Gallery */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {activeCategory === "all"
                ? "All Photos"
                : categories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <span className="text-gray-600 text-sm">
              Showing {filteredImages.length} photos
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium mb-1">{image.title}</h3>
                  <div className="flex items-center text-white/80 text-sm">
                    <FaCalendarAlt className="mr-1 text-xs" />
                    {image.date}
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <FaDownload className="text-gray-700 text-sm" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <FaShare className="text-gray-700 text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="bg-blue-50 rounded-lg p-6 md:p-8 border border-blue-200 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Contribute to Our Gallery
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Share your photos from college events. Selected photos will be
            featured in our official gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Submit Your Photos
            </button>
            <button className="border border-blue-600 text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              View All Albums
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
