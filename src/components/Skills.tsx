import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiPython, SiExpress, SiApachenetbeanside, SiMongodb, SiPostgresql, SiMysql, SiFirebase } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { useState } from "react";


export const Skills = () => {
  const skills = [
  { name: "HTML", level: 5, category: "Frontend", icon: <SiHtml5 className="text-2xl text-orange-500" /> },
  { name: "CSS", level: 5, category: "Frontend", icon: <SiCss3 className="text-2xl text-blue-500" /> },
  { name: "JavaScript", level: 4, category: "Frontend", icon: <SiJavascript className="text-2xl text-yellow-400" /> },
  { name: "React", level: 4, category: "Frontend", icon: <SiReact className="text-2xl text-cyan-400" /> },
  { name: "Node.js", level: 3, category: "Backend", icon: <SiNodedotjs className="text-2xl text-green-500" /> },
  { name: "Python", level: 4, category: "Backend", icon: <SiPython className="text-2xl text-yellow-300" /> },
  { name: "Express.js", level: 3, category: "Backend", icon: <SiExpress className="text-2xl text-gray-300" /> },
  { name: "Java", level: 5, category: "Backend", icon: <DiJava className="text-3xl text-red-600" /> },,
  { name: "API Development", level: 3, category: "Backend", icon: <SiApachenetbeanside className="text-2xl text-indigo-400" /> },
  { name: "MongoDB", level: 3, category: "Database", icon: <SiMongodb className="text-2xl text-green-400" /> },
  { name: "PostgreSQL", level: 3, category: "Database", icon: <SiPostgresql className="text-2xl text-blue-600" /> },
  { name: "MySQL", level: 4, category: "Database", icon: <SiMysql className="text-2xl text-blue-400" /> },
  { name: "Firebase", level: 3, category: "Database", icon: <SiFirebase className="text-2xl text-yellow-500" /> },
];


  const categories = ["Frontend", "Backend", "Database"];
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const getCategorySkills = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">My</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              skills
            </span>
          </h2>
          
          {/* Decorative arrow */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                <div className="w-0 h-0 border-l-8 border-l-pink-500 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-full p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid for Active Category */}
        <div className="min-h-[400px]">
          <div key={activeCategory} className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {activeCategory} Skills
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {getCategorySkills(activeCategory).map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${
                            i < skill.level 
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                              : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${(skill.level / 5) * 100}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                  
                  <div className="mt-3 text-right">
                    <span className="text-sm text-gray-400">
                      {Math.round((skill.level / 5) * 100)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};
