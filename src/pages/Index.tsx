
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { FollowMe } from "@/components/FollowMe";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Enhanced background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-gray-900 to-blue-900/30 pointer-events-none" />
      
      {/* Additional gradient layers for depth */}
      <div className="fixed inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50 pointer-events-none" />
      
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <FollowMe />
      
      {/* Enhanced floating background elements */}
      <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-48 h-48 bg-pink-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="fixed top-3/4 left-1/3 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Index;
