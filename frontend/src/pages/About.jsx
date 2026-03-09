import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

function About() {
  const missionPoints = [
    "Promoting better health standards within the community",
    "Improving patient health through quality medical care",
    "Providing accurate diagnosis and effective treatment",
    "Offering comprehensive healthcare services",
    "Contributing to the overall well-being of patients",
    "Delivering safe, evidence-based healthcare through qualified medical professionals",
  ];

  const goals = [
    "Continuously improve healthcare services through quality management",
    "Focus on patients and deliver high-quality care",
    "Collaborate with partners to support quality improvement",
    "Empower employees to make responsible and effective decisions",
    "Promote training, teamwork, and open communication",
    "Maintain the highest ethical standards in protecting the public and the environment",
  ];

  const values = [
    {
      title: "Teamwork",
      description:
        "Working together to achieve the best outcomes for our patients.",
    },
    {
      title: "Excellence",
      description:
        "Striving for the highest standards in healthcare delivery.",
    },
    {
      title: "Confidentiality and Consistency",
      description:
        "Protecting patient privacy and ensuring reliable, continuous improvement.",
    },
    {
      title: "Accountability",
      description:
        "Taking responsibility for the quality and safety of our services.",
    },
    {
      title: "Respect",
      description:
        "Treating patients, families, and colleagues with dignity and compassion.",
    },
    {
      title: "Empowerment and Encouragement",
      description:
        "Supporting staff development and encouraging innovation in healthcare delivery.",
    },
  ];

  return (
    <div className="bg-[#f5f7fb]">
      <section className="bg-gradient-to-r from-[#eff5ff] via-[#edf8f4] to-[#e9f4ff]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-2">
            About Caawiye Polyclinic
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 animate-text-rise">
            <span className="animate-text-shimmer">Our Story</span>
          </h1>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-4 max-w-5xl"
          >
            <p className="text-slate-700 leading-relaxed text-lg">
              Caawiye Polyclinic was established in 2016 by Dr. Durdur and
              other benefactors with the aim of improving community health
              through accessible and high-quality healthcare services.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              Since its establishment, the clinic has continued to grow through
              ongoing refurbishment and development, strengthening its ability
              to serve patients and meet the healthcare needs of the community.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              Caawiye Polyclinic is committed to providing professional,
              compassionate, and patient-focused medical services that improve
              the overall health and well-being of the people it serves.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-2 text-center">
            Mission & Vision
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-10">Our Direction</h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.article
              variants={fadeUp}
              className="bg-[#f8fbff] rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                The mission of Caawiye Polyclinic is to provide compassionate,
                accessible, high-quality, and cost-effective healthcare
                services to the community.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                The clinic is dedicated to delivering medical care with
                professionalism, compassion, and respect to all patients who
                seek its services.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                {missionPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              variants={fadeUp}
              className="bg-[#f8fbff] rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                The vision of Caawiye Polyclinic is to become a globally
                recognized healthcare provider and medical training facility,
                delivering excellent patient care through evidence-based medical
                practices and continuous development.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The clinic aims to build a first-class patient-focused
                healthcare service based on high quality standards, while
                ensuring services are delivered in a well-managed and
                supportive environment.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Caawiye Polyclinic also strives to invest in education,
                training, and professional development to maximize the
                potential of healthcare staff and continuously improve the
                quality of services provided.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-2 text-center">
          Our Goals
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-10">What We Aim To Achieve</h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 gap-5"
        >
          {goals.map((goal) => (
            <motion.article
              key={goal}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
            >
              <p className="text-slate-700">{goal}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-2 text-center">
            Our Values
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-10">What Guides Our Work</h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {values.map((value) => (
              <motion.article
                key={value.title}
                variants={fadeUp}
                className="bg-[#f8fbff] rounded-2xl p-6 border border-slate-100 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-700">{value.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-2 text-center">
          Leadership
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-6">Leadership Team</h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-3xl mx-auto text-center"
        >
          <p className="text-slate-700 leading-relaxed text-lg">
            Caawiye Polyclinic is led by Dr. Durdur together with a dedicated
            team of healthcare professionals committed to high-quality,
            compassionate, and patient-focused care.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
