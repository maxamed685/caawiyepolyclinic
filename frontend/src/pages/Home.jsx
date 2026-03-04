import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

function Home() {
  const services = [
    {
      title: "Dental",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Pediatrics",
      image:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Modern Lab",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Pharmacy",
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const highlights = [
    "Experienced Medical Team",
    "Modern Equipment",
    "Patient-First Philosophy",
  ];

  const testimonials = [
    {
      quote:
        "The care I received at Caawiye was exceptional. The doctors took their time to explain everything clearly.",
      name: "Ahmed Mohamed",
      role: "Business Owner",
    },
    {
      quote:
        "Clean facilities, friendly staff, and very professional support. The results came back much faster than expected.",
      name: "Sarah Ali",
      role: "Teacher",
    },
    {
      quote:
        "Best pediatric care in the city. My kids actually feel calm visiting for checkups and follow-ups.",
      name: "Abdirahman Omar",
      role: "Parent",
    },
  ];

  const employees = [
    {
      name: "Ali Ahmed Mohidin",
      role: "HRManager",
      image:
        "/images/cali.jpeg",
    },
    {
      name: "Mas'ud Said Ibrahim",
      role: "Nurse",
      image:
        "/images/qarasta.jpeg",
    },
    {
      name: "Daahir Imail Hassan",
      role: "Lab Technician",
      image:
        "/images/lab.jpeg",
    },
    {
      name: "Mohamed Ali Abdulahi",
      role: "Pharmacist",
      image:
        "/images/maxamed.jpeg",
    },
  ];
                                                             
  const founder = {
    name: "Dr. Abdulkadir Abdule Osman",
    role: "Founder, Caawiye Polyclinic",
    image:
      "/images/hero.png",
  };

  return (
    <div className="bg-[#f5f7fb]">
      <section className="bg-gradient-to-r from-[#f2f5ff] via-[#edf8f4] to-[#eaf4ff]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <p className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-4">
              Now accepting new patients
            </p>
            <h1 className="text-4xl sm:text-5xl leading-tight font-extrabold mb-4 text-slate-900 animate-text-rise">
              <span className="animate-text-shimmer">Caawiye</span>
              <br />
              <span className="animate-text-shimmer">Polyclinic</span> Ltd
            </h1>
            <p className="text-xl sm:text-2xl italic text-emerald-700 mb-4">Our prior is to care</p>
            <p className="text-slate-600 max-w-xl mb-8">
              Dedicated to providing comprehensive medical services with
              cutting-edge technology and a compassionate approach. Your health
              and well-being are at the heart of everything we do.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
              <Link
                to="/services"
                className="w-full sm:w-auto text-center bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center bg-white text-slate-800 px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50"
              >
                Tour Our Clinic
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div>
                <p className="text-2xl font-bold text-slate-900">15+</p>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Specialists
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">10k+</p>
                <p className="text-xs uppercase tracking-wider text-slate-500">Patients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">24/7</p>
                <p className="text-xs uppercase tracking-wider text-slate-500">Emergency</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up delay-200">
            <div className="rounded-2xl border-4 border-white shadow-2xl overflow-hidden">
              <img
                src={hero}
                alt="Doctor portrait"
                className="w-full h-[300px] sm:h-[420px] object-cover animate-float"
              />
            </div>
            <div className="absolute -bottom-8 left-0 bg-white shadow-xl rounded-2xl px-5 py-4 max-w-52 sm:max-w-56 animate-fade-up delay-400">
              <p className="font-semibold text-slate-900">Certified Excellence</p>
              <p className="text-xs text-slate-500 mt-1">
                Recognized patient-centric care in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10 mb-16 animate-fade-up hover-lift">
          <div className="grid md:grid-cols-[260px_1fr] gap-8 items-center">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-[220px] sm:h-[260px] rounded-2xl object-cover"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-3">
                Meet Our Founder
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">{founder.name}</h2>
              <p className="text-green-600 font-semibold mb-4">{founder.role}</p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Dr. Mohamed, founder of Caawiye Polyclinic, established the
                clinic in 2023 with a mission to provide affordable and
                reliable healthcare services in Hodan, Mogadishu. He started
                the clinic to address gaps in timely diagnosis, trusted medical
                guidance, and patient-centered care for local families.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-xs tracking-wider text-green-700 uppercase font-semibold mb-3">
          What we offer
        </p>
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-3">
          Comprehensive Healthcare Solutions
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          We provide a wide range of medical services tailored to meet the
          needs of our patients.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.map((item) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-xl h-[250px] shadow-md hover-lift animate-fade-up"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-700/35 to-emerald-500/25" />
              <div className="absolute top-4 left-4">
                <p className="bg-slate-800/45 text-white font-semibold text-2xl sm:text-3xl px-4 py-2 rounded-lg">
                  {item.title}
                </p>
              </div>
              <Link
                to="/services"
                className="absolute inset-0"
                aria-label={`View ${item.title} service`}
              >
                <span className="sr-only">{item.title}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <p className="text-center text-xs tracking-wider text-blue-700 uppercase font-semibold mb-3">
          Take a virtual tour
        </p>
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-3">
          Experience Our World-Class Care
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
          Step inside Caawiye Polyclinic and discover our modern diagnostic
          rooms and professional team dedicated to your health journey.
        </p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 animate-fade-up">
          <video
            className="w-full h-[240px] sm:h-[430px] object-cover"
            autoPlay
            muted
            loop
            controls
            preload="metadata"
          >
            <source src="/videos/clinic-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md animate-fade-up">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
              alt="Doctor and nurse"
              className="w-full h-[360px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Why Choose Caawiye Polyclinic?
            </h2>
            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 animate-fade-up">
                  <span className="h-7 w-7 rounded-full bg-blue-100 text-blue-700 text-sm grid place-items-center">
                    ✓
                  </span>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">
              <div>
                <p className="text-xs uppercase tracking-wider text-blue-100 mb-1">
                  Emergency Service
                </p>
                <p className="text-2xl font-bold">+252 61 5517681</p>
              </div>
              <span className="text-3xl">📞</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <p className="text-center text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
          Our Employee Team
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-slate-900 mb-4 animate-text-rise">
          Meet Our Employees
        </h2>
        <p className="text-center text-slate-600 text-lg sm:text-2xl mb-12">
          Dedicated and skilled professionals committed to your wellbeing
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {employees.map((employee) => (
            <article
              key={employee.name}
              className="bg-white rounded-2xl px-8 pt-7 pb-6 text-center shadow-sm border border-slate-100 hover-lift animate-fade-up"
            >
              <img
                src={employee.image}
                alt={employee.name}
                className="w-32 h-32 rounded-2xl object-cover mx-auto mb-5"
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{employee.name}</h3>
              <p className="text-xl sm:text-2xl text-green-600">{employee.role}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/about"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700"
          >
            View All Employees
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
          Trusted by Thousands of Patients
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article key={item.name} className="bg-white rounded-xl p-6 shadow-sm hover-lift animate-fade-up">
              <p className="text-slate-600 italic mb-5">"{item.quote}"</p>
              <p className="font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
