import { Link } from "react-router-dom";

const serviceData = {
  "doctor-consultation": {
    label: "General Practitioner (GP)",
    icon: "🩺",
    tone: "bg-blue-100 text-blue-700",
    accent: "from-blue-500/20 to-blue-500/0",
    intro:
      "Meet with our experienced physicians for diagnosis, treatment guidance, and long-term care planning.",
    features: [
      "General and specialist consultations",
      "Personalized treatment recommendations",
      "Follow-up and chronic disease management",
      "Second-opinion support when needed",
    ],
  },
  laboratory: {
    label: "Laboratory",
    icon: "🔬",
    tone: "bg-cyan-100 text-cyan-700",
    accent: "from-cyan-500/20 to-cyan-500/0",
    intro:
      "Reliable in-house diagnostics with timely reporting to support accurate clinical decisions.",
    features: [
      "Blood, urine, and routine pathology tests",
      "Rapid turnaround for urgent diagnostics",
      "Quality-controlled sample handling",
      "Clear reports for patients and physicians",
    ],
  },
  pharmacy: {
    label: "Pharmacy",
    icon: "💊",
    tone: "bg-green-100 text-green-700",
    accent: "from-green-500/20 to-green-500/0",
    intro:
      "Access trusted medications and professional counseling from our licensed pharmacy team.",
    features: [
      "Prescription and over-the-counter medicines",
      "Medication usage and safety counseling",
      "Refill and dosage support",
      "Guidance on potential side effects",
    ],
  },
};

function ServiceDetail({ serviceKey }) {
  const service = serviceData[serviceKey];

  if (!service) {
    return (
      <div className="site-container section-space">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Service not found</h1>
        <Link to="/services" className="text-blue-600 font-semibold hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-[#f3f7f5]">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/55 blur-3xl" />
      <div
        className={`pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-gradient-to-b ${service.accent} blur-3xl`}
      />

      <section className="relative site-container section-space-tight">
        <p className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-xs uppercase tracking-[0.18em] text-emerald-700 font-bold mb-5">
          Service Detail
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 mb-5 leading-tight">
          <span className="flex items-center gap-3">
            <span
              className={`inline-grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl ${service.tone} align-middle text-2xl sm:text-3xl ring-1 ring-slate-200`}
            >
              {service.icon}
            </span>
            <span>{service.label}</span>
          </span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg md:text-2xl leading-relaxed max-w-3xl">
          {service.intro}
        </p>
      </section>

      <section className="relative site-container section-space pt-0">
        <div className="relative overflow-hidden bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200">
          <div
            className={`absolute inset-x-0 top-0 h-24 rounded-t-3xl bg-gradient-to-b ${service.accent}`}
          />
          <h2 className="relative text-2xl sm:text-3xl font-extrabold text-slate-900 mb-7">What this includes</h2>
          <ul className="relative space-y-4 text-slate-700 text-base sm:text-lg">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className={`h-6 w-6 rounded-full ${service.tone} text-sm grid place-items-center mt-0.5`}>
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="relative mt-10 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
            >
              <span>←</span>
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
