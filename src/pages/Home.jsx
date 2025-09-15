import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-32 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Learn, Grow, and Connect with Experts
        </p>
        <Link
          to="/signup"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Training</h3>
              <p className="text-gray-600">
                Learn from industry experts with our structured training programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Consulting</h3>
              <p className="text-gray-600">
                Get expert advice to grow your business or career.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Speaking</h3>
              <p className="text-gray-600">
                Inspire and learn from keynote speakers and mentors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">How to Grow Your Skills</h3>
              <p className="text-gray-600 mb-4">
                Practical tips and strategies to enhance your programming skills.
              </p>
              <Link
                to="/blog-details/1"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Affiliate Marketing Tips</h3>
              <p className="text-gray-600 mb-4">
                Learn how to earn online using affiliate programs effectively.
              </p>
              <Link
                to="/blog-details/2"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Freelancing Strategies</h3>
              <p className="text-gray-600 mb-4">
                Tips and tools to succeed as a freelancer in 2025.
              </p>
              <Link
                to="/blog-details/3"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
