
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const roles = ["Data Scientist", "Full Stack Web Developer"];
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentText.length) {
          setCurrentRole(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setCurrentRole(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Large gradient background circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            <div className="mb-8">
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="text-white">Nalla</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Roshini
                </span>
              </h1>
              <br></br>
              <p className="text-purple-400 text-lg font-medium mb-4 tracking-wider uppercase min-h-[28px]">
                {currentRole}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              I am an aspiring Data Scientist and Web Developer with experience in modern technologies, 
              passionate about creating innovative digital solutions.
            </p>
            
            <a href="/resume.pdf"
  download="Roshini_Resume.pdf" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Download CV
            </a>
          </div>
          
          {/* Right side - Profile image with gradient background */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Large gradient circle behind image */}
            <div className="absolute w-96 h-96 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-80 blur-xl" />
            
            {/* Profile image container */}
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-2">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="/profileIMG.jpg"
                    alt="Nalla Roshini"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-purple-400/50 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-500 rounded-full animate-bounce" />
              <div className="absolute top-16 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-ping" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </div>
    </section>
  );
};
