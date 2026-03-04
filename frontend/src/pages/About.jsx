function About() {
  const storyPoints = [
    "Caawiye Polyclinic was founded in 2023 in Hodan, Mogadishu.",
    "It was established to provide affordable, reliable, and patient-centered healthcare.",
    "The clinic was created to address delays in diagnosis and limited access to trusted medical support in the community.",
  ];

  const founder = {
    name: "Dr. Abdulkadir Abdule Osman",
    title: "Founder, Caawiye Polyclinic",
    education:
      "MBBS, University of Somalia; Postgraduate training in Family Medicine and Primary Care.",
    experience:
      "Over 10 years of clinical practice across outpatient care, preventive medicine, and community health programs.",
    vision:
      "Build a trusted neighborhood clinic where every family can access quality healthcare with dignity and respect.",
    image:
      "images/hero.png",
  };

  const coreValues = [
    "Compassion",
    "Integrity",
    "Professionalism",
    "Accessibility",
  ];

  const employees = [
    {
      name: "Ali Ahmed Mohidin",
      role: "HRManager",
      image: "/images/cali.jpeg",
    },
    {
      name: "Mas'ud Said Ibrahim",
      role: "Nurse",
      image: "/images/qarasta.jpeg",
    },
    {
      name: "Daahir Imail Hassan",
      role: "Lab Technician",
      image: "/images/lab.jpeg",
    },
    {
      name: "Mohamed Ali Abdulahi",
      role: "Pharmacist",
      image: "/images/maxamed.jpeg",
    },
    {
      name: "Khadra Nur Hassan",
      role: "Cashier",
      image: "/images/qarasta.jpeg",
    },
  ];

  return (
    <div className="bg-[#f5f7fb]">
      <section className="bg-gradient-to-r from-[#eff5ff] via-[#edf8f4] to-[#e9f4ff]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-2">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 animate-text-rise">
            <span className="animate-text-shimmer">Our Story</span>
          </h1>
          <div className="space-y-3 max-w-4xl animate-fade-up">
            {storyPoints.map((point) => (
              <p key={point} className="text-slate-600 leading-relaxed text-lg">
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-2 text-center">
          Our Founder
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-10">Meet Our Founder</h2>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10 grid lg:grid-cols-[300px_1fr] gap-8 items-start animate-fade-up hover-lift">
          <img
            src={founder.image}
            alt={founder.name}
            className="w-full h-[240px] sm:h-[320px] object-cover rounded-2xl"
          />

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">{founder.name}</h3>
            <p className="text-green-600 font-semibold mb-6">{founder.title}</p>

            <div className="space-y-5 text-slate-700">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Education</p>
                <p>{founder.education}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Experience</p>
                <p>{founder.experience}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Vision</p>
                <p>{founder.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-2 text-center">
            Direction
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-10">Vision & Mission</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-[#f8fbff] rounded-2xl p-8 border border-slate-100 shadow-sm text-center animate-fade-up hover-lift">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600">
                To become a leading primary healthcare center in Mogadishu,
                known for quality services, trust, and continuity of care.
              </p>
            </article>

            <article className="bg-[#f8fbff] rounded-2xl p-8 border border-slate-100 shadow-sm text-center animate-fade-up hover-lift">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600">
                To deliver compassionate and professional healthcare that is
                affordable, accessible, and responsive to community needs.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-center text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
          Our Employee Team
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-slate-900 mb-4">
          Meet Our Employees
        </h2>
        <p className="text-center text-slate-600 text-lg md:text-2xl mb-12">
          Dedicated and skilled professionals committed to your wellbeing
        </p>

        <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-6">
          {employees.map((employee) => (
            <article
              key={employee.name}
              className="group bg-white rounded-2xl px-6 pt-7 pb-6 text-center shadow-sm border border-slate-100 animate-fade-up hover-lift transition-all duration-300 hover:border-blue-200"
            >
              <div className="relative mx-auto mb-5 w-fit">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-28 h-28 rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 text-white text-[10px] font-semibold uppercase tracking-wide px-3 py-1">
                  Staff
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">{employee.name}</h3>
              <p className="text-lg sm:text-xl text-green-600">{employee.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-2 text-center">
          Core Values
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-10">What We Stand For</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map((value) => (
            <article
              key={value}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center animate-fade-up hover-lift"
            >
              <p className="text-xl font-bold text-slate-900">{value}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
