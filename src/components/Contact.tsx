import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';
export const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bd472c7",       // replace with your service ID
      "template_jt835wh",      // replace with your template ID
      formRef.current,
      "itIv04vC0b84VQuS4" // replace with your public key from EmailJS
    ).then(
      (result) => {
        console.log(result.text);
        toast.success("Message sent successfully");
      },
      (error) => {
        console.error(error.text);
        toast.error("Message sent successfully");
      }
    );

    e.target.reset();
  };
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Let's collaborate on your next amazing project
          </p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 relative">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
            
            <div className="relative">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            
            <div className="relative">
              <textarea
                rows={6}
                name="message"
                placeholder="Your Message"
                className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
            >
              Send Message
            </button>
          </form>
          
          {/* Background decorative shapes */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border border-purple-500/20 rounded-full animate-pulse" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce" />
          
          {/* Curved background elements */}
          <div className="absolute top-0 right-1/4 w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          
          {/* Dot patterns */}
          <div className="absolute top-8 right-8 grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
