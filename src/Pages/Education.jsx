import React, { useEffect } from 'react';
import { GraduationCap, Award, Briefcase, CheckCircle2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  const educationData = [
    {
      degree: "S2 Hukum Bisnis",
      status: "Candidate/In Progress",
      icon: GraduationCap,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      degree: "S1 Hukum Perdata",
      status: "Completed",
      icon: GraduationCap,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const experienceData = [
    {
      title: "Mentor Professional",
      description: "AI & Canva Design",
      icon: Briefcase,
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Certified Graphic Designer",
      description: "Professional portfolio since 2016",
      icon: Award,
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] py-20 px-[5%] md:px-[10%]" id="Education">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
          Education & Experience
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Academic background and professional journey in design and technology
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Pendidikan</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${edu.gradient} flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6`}>
                      <edu.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className={`text-sm ${edu.status === "Completed" ? "text-green-400" : "text-yellow-400"}`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Pengalaman & Sertifikasi</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#a855f7] to-[#6366f1] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${exp.gradient} flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6`}>
                      <exp.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex justify-center" data-aos="fade-up">
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#6366f1] rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Education;
