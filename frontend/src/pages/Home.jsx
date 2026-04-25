import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import {
  buttonPress,
  fadeUp,
  hoverScale,
  slideLeft,
  slideRight,
  staggerContainer,
} from "../animations/animations";

function Home() {
  const MotionLink = motion(Link);

  const services = [
    {
      title: "Dental",
      image:
        "https://i.pinimg.com/736x/08/55/8e/08558e07cdfd0b096a4f70e7da27460e.jpg",
      description:
        "Preventive checkups, treatment planning, and gentle dental care for children and adults.",
    },
    {
      title: "Pediatrics",
      image:
        "https://i.pinimg.com/1200x/06/33/8c/06338c5618390aa8daa78da139a092a7.jpg",
      description:
        "Dedicated child health services with attentive consultations, monitoring, and family guidance.",
    },
    {
      title: "Modern Lab",
      image:
        "https://i.pinimg.com/1200x/9e/25/cf/9e25cfbf6aa61157c5745adf17c6b191.jpg",
      description:
        "Accurate testing and dependable diagnostics that support faster, more informed treatment decisions.",
    },
    {
      title: "Pharmacy",
      image:
        "https://i.pinimg.com/1200x/cf/f4/a2/cff4a2d58ff2106406637751949e2f1e.jpg",
      description:
        "Convenient access to prescribed medicines with clear guidance from our pharmacy team.",
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
    {
      quote:
        "I was impressed by how quickly the team handled my tests and explained each result with care.",
      name: "Hodan Yusuf",
      role: "University Student",
    },
    {
      quote:
        "The pharmacy service is reliable and the staff are always respectful and supportive.",
      name: "Mohamed Farah",
      role: "Engineer",
    },
    {
      quote:
        "Our family trusts Caawiye because appointments are organized and the doctors listen carefully.",
      name: "Amina Hassan",
      role: "Mother of Three",
    },
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
      name: "Daahir Ismail Hassan",
      role: "Lab Technician",
      image: "/images/lab.jpeg",
    },
    {
      name: "Mohamed Ali Abdulahi",
      role: "Pharmacist",
      image: "/images/maxamed.jpeg",
    },
    {
      name: "Hodan Yusuf Ali",
      role: "Receptionist",
      image: "/images/cali.jpeg",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleEmployeeCards, setVisibleEmployeeCards] = useState(1);
  const [activeEmployeeSlide, setActiveEmployeeSlide] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }

      if (window.innerWidth >= 1200) {
        setVisibleEmployeeCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleEmployeeCards(2);
      } else {
        setVisibleEmployeeCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxSlide = Math.max(testimonials.length - visibleCards, 0);
  const maxEmployeeSlide = Math.max(employees.length - visibleEmployeeCards, 0);

  const goNext = useCallback(() => {
    setActiveSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  }, [maxSlide]);

  const goPrev = useCallback(() => {
    setActiveSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  }, [maxSlide]);

  const goEmployeeNext = useCallback(() => {
    setActiveEmployeeSlide((prev) => (prev >= maxEmployeeSlide ? 0 : prev + 1));
  }, [maxEmployeeSlide]);

  const goEmployeePrev = useCallback(() => {
    setActiveEmployeeSlide((prev) => (prev <= 0 ? maxEmployeeSlide : prev - 1));
  }, [maxEmployeeSlide]);

  useEffect(() => {
    setActiveSlide((prev) => (prev > maxSlide ? maxSlide : prev));
  }, [maxSlide]);

  useEffect(() => {
    setActiveEmployeeSlide((prev) => (prev > maxEmployeeSlide ? maxEmployeeSlide : prev));
  }, [maxEmployeeSlide]);

  useEffect(() => {
    const intervalId = window.setInterval(goNext, 4500);
    return () => window.clearInterval(intervalId);
  }, [goNext]);

  useEffect(() => {
    const intervalId = window.setInterval(goEmployeeNext, 4200);
    return () => window.clearInterval(intervalId);
  }, [goEmployeeNext]);

  return (
    <div className="bg-[#f3f7f5]">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative overflow-hidden bg-[linear-gradient(112deg,#085625_0%,#0aa45a_56%,#7ce7ca_100%)]"
      >
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[45%] hidden lg:block">
          <img src={hero} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-l from-emerald-100/55 to-transparent" />
        </div>
        <div className="site-container section-space-tight grid lg:grid-cols-[1fr_1.02fr] gap-10 lg:gap-16 items-center relative z-10">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="animate-fade-up"
          >
            <p className="text-xs font-semibold tracking-[0.08em] text-emerald-100 uppercase mb-5">
              Now accepting new patients
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl leading-[1.05] font-extrabold mb-5 text-white animate-text-rise max-w-2xl">
              Caawiye Polyclinic Ltd
            </h1>
            <p className="text-2xl sm:text-3xl leading-tight text-emerald-50 mb-4 max-w-xl">
              Our primary focus is comprehensive community care
            </p>
            <p className="text-emerald-50/95 max-w-[31rem] mb-8 text-lg leading-relaxed">
              Caawiye Polyclinic was established in 2016 by Dr. Durdur and
              other benefactors to improve community health through accessible
              and high-quality healthcare services.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
              <MotionLink
                to="/services"
                whileHover={hoverScale}
                whileTap={buttonPress}
                className="w-full sm:w-auto text-center bg-emerald-600 text-white px-7 py-3 rounded-full shadow hover:bg-emerald-700"
              >
                Explore Services
              </MotionLink>
              <MotionLink
                to="/contact"
                whileHover={hoverScale}
                whileTap={buttonPress}
                className="w-full sm:w-auto text-center bg-transparent text-white px-7 py-3 rounded-full border border-white/60 hover:bg-white/10"
              >
                Tour Our Clinic
              </MotionLink>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-sm">
              <div>
                <p className="text-4xl font-extrabold text-white leading-none mb-1">15+</p>
                <p className="text-[11px] uppercase tracking-wider text-emerald-100">
                  Specialists
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-white leading-none mb-1">10k+</p>
                <p className="text-[11px] uppercase tracking-wider text-emerald-100">Patients</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-white leading-none mb-1">24/7</p>
                <p className="text-[11px] uppercase tracking-wider text-emerald-100">Emergency</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative animate-fade-up delay-200 hidden lg:block"
          >
            <div className="mx-auto max-w-[520px] rounded-3xl border border-black/20 bg-black/22 px-8 py-10 text-center shadow-2xl backdrop-blur-sm">
              <p className="text-5xl leading-none mb-6 text-emerald-100/80">⚕</p>
              <h2 className="text-white text-3xl sm:text-4xl font-semibold mb-6">Certified Medical Excellence</h2>
              <p className="text-emerald-50/95 text-xl sm:text-2xl leading-snug">
                Compassionate, accessible, and high-quality care for every
                patient. Your health is our priority.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="site-container section-space">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 md:p-10 mb-16 animate-fade-up hover-lift"
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-10 items-start">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-3">
                About & Mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5">
                Community-focused care you can trust
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Since 2016, Caawiye Polyclinic has grown through continuous
                refurbishment and development to better meet the healthcare
                needs of the community.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-7">
                Our mission is to provide compassionate, accessible,
                high-quality, and cost-effective healthcare services with
                professionalism, respect, and patient-focused care.
              </p>
              <MotionLink
                to="/about"
                whileHover={hoverScale}
                whileTap={buttonPress}
                className="inline-flex items-center justify-center bg-blue-600 text-white px-7 py-3.5 rounded-xl text-lg font-semibold hover:bg-blue-700"
              >
                Learn More About Us
              </MotionLink>
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700 mb-2">
                  Our Promise
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Respectful treatment, clear communication, and reliable care
                  for every patient and family.
                </p>
              </div>
              <div className="rounded-2xl bg-sky-50 border border-sky-100 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700 mb-2">
                  Everyday Support
                </p>
                <p className="text-slate-700 leading-relaxed">
                  From consultations and laboratory services to pharmacy and
                  follow-up care, we support your full health journey.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 mb-2">
                  Built For The Community
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Our clinic is designed to make quality healthcare more
                  accessible, practical, and welcoming for local families.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-xs tracking-wider text-green-700 uppercase font-semibold mb-3"
        >
          What we offer
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-900 mb-3"
        >
          Comprehensive Healthcare Solutions
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-slate-600 max-w-2xl mx-auto mb-12"
        >
          From everyday consultations to diagnostics and pharmacy support, our
          services are designed to make quality care accessible for every stage
          of your health journey.
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6 lg:gap-7 max-w-6xl mx-auto"
        >
          {services.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[28px] min-h-[320px] sm:min-h-[360px] shadow-md hover-lift animate-fade-up border border-emerald-100/70 bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/10 via-emerald-900/25 to-slate-950/80 transition-opacity duration-300 group-hover:to-slate-950/85" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="rounded-2xl bg-white/92 backdrop-blur-sm p-5 sm:p-6 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-700 font-semibold mb-3">
                    Core Service
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-700 font-semibold">
                    Learn More
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
              <Link
                to="/services"
                className="absolute inset-0"
                aria-label={`View ${item.title} service`}
              >
                <span className="sr-only">{item.title}</span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="site-container section-space-tight pt-0">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-xs tracking-wider text-blue-700 uppercase font-semibold mb-3"
        >
          Take a virtual tour
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-900 mb-3"
        >
          Experience Our World-Class Care
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-slate-600 max-w-2xl mx-auto mb-10"
        >
          Step inside Caawiye Polyclinic and discover our modern diagnostic
          rooms and professional team dedicated to your health journey.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 animate-fade-up"
        >
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
        </motion.div>
      </section>

      <section className="bg-white section-space">
        <div className="site-container grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-md animate-fade-up"
          >
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
              alt="Doctor and nurse"
              className="w-full h-[360px] object-cover"
            />
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Why Choose Caawiye Polyclinic?
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {highlights.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 animate-fade-up">
                  <span className="h-7 w-7 rounded-full bg-blue-100 text-blue-700 text-sm grid place-items-center">
                    ✓
                  </span>
                  <p className="text-slate-700">{item}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">
              <div>
                <p className="text-xs uppercase tracking-wider text-blue-100 mb-1">
                  Emergency Service
                </p>
                <p className="text-2xl font-bold">+252 61 5517681</p>
              </div>
              <span className="text-3xl">📞</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="site-container section-space-tight pt-0">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4"
        >
          Our Employee Team
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-slate-900 mb-4 animate-text-rise"
        >
          Meet Our Employees
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-slate-600 text-lg sm:text-2xl mb-12"
        >
          Dedicated and skilled professionals committed to your wellbeing
        </motion.p>

        <div className="relative">
          <button
            type="button"
            onClick={goEmployeePrev}
            aria-label="Previous employee"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white border border-slate-200 text-slate-700 shadow hover:bg-slate-50"
          >
            &#8592;
          </button>

          <button
            type="button"
            onClick={goEmployeeNext}
            aria-label="Next employee"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white border border-slate-200 text-slate-700 shadow hover:bg-slate-50"
          >
            &#8594;
          </button>

          <div className="overflow-hidden px-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex -mx-3 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${(activeEmployeeSlide * 100) / visibleEmployeeCards}%)` }}
            >
              {employees.map((employee) => (
                <motion.article
                  key={employee.name}
                  variants={fadeUp}
                  className="w-full md:w-1/2 xl:w-1/4 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl px-8 pt-7 pb-6 text-center shadow-sm border border-slate-100 hover-lift animate-fade-up h-full">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-32 h-32 rounded-2xl object-cover mx-auto mb-5"
                    />
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{employee.name}</h3>
                    <p className="text-xl sm:text-2xl text-green-600">{employee.role}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>

      </section>

      <section className="site-container section-space">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-slate-900 mb-10"
        >
          Trusted by Thousands of Patients
        </motion.h2>
        <div className="relative">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white border border-slate-200 text-slate-700 shadow hover:bg-slate-50"
          >
            &#8592;
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white border border-slate-200 text-slate-700 shadow hover:bg-slate-50"
          >
            &#8594;
          </button>

          <div className="overflow-hidden px-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex -mx-2 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${(activeSlide * 100) / visibleCards}%)` }}
            >
              {testimonials.map((item) => (
                <motion.article
                  key={item.name}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm hover-lift animate-fade-up h-full">
                    <p className="text-slate-600 italic mb-5">"{item.quote}"</p>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
