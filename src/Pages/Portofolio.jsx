import React, { useEffect, useState, useCallback } from "react";
import Certificate from "../components/Certificate";
import AOS from "aos";
import "aos/dist/aos.css";
import { certificatesData } from "../data/certificatesData";


const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

export default function FullWidthTabs() {
  const [certificates, setCertificates] = useState(certificatesData);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const toggleShowMore = useCallback(() => {
    setShowAllCertificates(prev => !prev);
  }, []);

  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden pb-16" id="Portofolio">
      {/* Header section */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Certificates
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through certifications and professional development. 
          Each certificate represents a milestone in my continuous learning path.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="container mx-auto flex justify-center items-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
          {displayedCertificates.map((certificate, index) => (
            <div
              key={certificate.id || index}
              data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
              data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
            >
              <Certificate 
                ImgSertif={certificate.Img} 
                title={certificate.title}
                isPdf={certificate.isPdf}
              />
            </div>
          ))}
        </div>
      </div>
      
      {certificates.length > initialItems && (
        <div className="mt-6 w-full flex justify-start">
          <ToggleButton
            onClick={toggleShowMore}
            isShowingMore={showAllCertificates}
          />
        </div>
      )}
    </div>
  );
}