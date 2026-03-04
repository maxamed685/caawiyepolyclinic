import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          Quality Healthcare You Can Trust
        </h2>
        <p className="text-gray-600 mb-8">
          Professional medical services including General Practitioner (GP),
          Laboratory Services, and Pharmacy.
        </p>
        <Link
          to="/contact"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default Hero;
