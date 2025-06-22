
import { Linkedin, Github } from "lucide-react";

export const FollowMe = () => {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/roshini-nalla-229678250/", color: "from-blue-600 to-blue-400" },
    { icon: Github, label: "Github", href: "https://github.com/NallaRoshini", color: "from-gray-600 to-gray-400" },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Follow Me
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Connect with me on social media for updates and insights
        </p>
        
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="group relative"
            >
              <div className={`bg-gradient-to-r ${social.color} p-4 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-${social.color.split('-')[1]}-500/25`}>
                <social.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Glowing effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg`} />
              
              {/* Label */}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};
