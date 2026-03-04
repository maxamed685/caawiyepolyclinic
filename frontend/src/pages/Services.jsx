import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "General Practitioner (GP)",
      description:
        "One-on-one medical consultations with experienced doctors for diagnosis, follow-up, and treatment planning.",
      icon: "🩺",
      tone: "bg-blue-100 text-blue-700",
      accent: "from-blue-500/20 to-blue-500/0",
      link: "/services/doctor-consultation",
    },
    {
      title: "Laboratory",
      description:
        "Advanced diagnostic testing and clinical analysis with rapid turnaround times and precision results.",
      icon: "🔬",
      tone: "bg-cyan-100 text-cyan-700",
      accent: "from-cyan-500/20 to-cyan-500/0",
      link: "/services/laboratory",
    },
    {
      title: "Pharmacy",
      description:
        "Fully stocked pharmacy with professional consultation to ensure you receive the right medication and advice.",
      icon: "💊",
      tone: "bg-green-100 text-green-700",
      accent: "from-green-500/20 to-green-500/0",
      link: "/services/pharmacy",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-slate-100">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-200/60 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />

      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-14 text-center animate-fade-up">
        <p className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-blue-700 font-bold bg-blue-100 px-5 py-2.5 rounded-full mb-8">
          ✚ Excellence In Care
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight animate-text-rise">
          Our Healthcare <span className="animate-text-shimmer">Services</span>
        </h1>
        <p className="max-w-3xl mx-auto text-slate-600 text-base sm:text-lg md:text-2xl leading-relaxed">
          Comprehensive medical care tailored to your needs at Caawiye
          Polyclinic Ltd. We combine advanced technology with compassionate care
          for your well-being.
        </p>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-up"
            >
              <div
                className={`absolute inset-x-0 top-0 h-20 rounded-t-2xl bg-gradient-to-b ${service.accent}`}
              />
              <div
                className={`relative h-14 w-14 rounded-2xl ${service.tone} text-2xl grid place-items-center mb-6 ring-1 ring-slate-200`}
              >
                {service.icon}
              </div>
              <h2 className="relative text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                {service.title}
              </h2>
              <p className="relative text-slate-600 text-base sm:text-xl leading-relaxed mb-8">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="relative inline-flex items-center gap-2 text-blue-700 font-semibold text-lg cursor-pointer"
              >
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
