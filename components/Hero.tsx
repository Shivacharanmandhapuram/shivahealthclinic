import React from 'react';
import { Star, ArrowUpRight, Headset, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-cream pt-8 pb-20 overflow-visible scroll-mt-32">
        {/* Main Grid Container based on provided CSS */}
        <div className="mx-auto w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-[34px] px-[25px] items-center">
            
            {/* Left Column */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
                
                {/* Review Badge */}
                <div className="mb-6 sm:mb-8 inline-flex items-center bg-white border border-indigo-100 rounded-lg px-2 sm:px-3 py-2 w-max shadow-sm transform transition-transform hover:scale-105 cursor-default">
                    <div className="flex -space-x-2 sm:-space-x-3 mr-2 sm:mr-4">
                        <img className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=33" alt="Reviewer"/>
                        <img className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=47" alt="Reviewer"/>
                        <img className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-white object-cover hidden sm:inline-block" src="https://i.pravatar.cc/100?img=12" alt="Reviewer"/>
                        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-white bg-teal text-white flex items-center justify-center text-xs font-bold">+</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex text-amber-400 gap-0.5 mb-0.5">
                            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-semibold text-gray-700">150+ Reviews on Zocdoc</span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-sans font-semibold text-gray-900 tracking-tight leading-[1.1] mb-4 sm:mb-6">
                    Your health is <span className="block text-teal">our first priority</span>
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-10 max-w-xl font-normal leading-relaxed">
                    Comprehensive Primary Care, DOT/CDL physicals, and specialized pain management injections. Dr. Gohokar empowers you to take charge of your health through prevention, education, and compassionate care.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 sm:mb-16">
                    <a href="#contact" className="bg-teal hover:bg-teal-dark text-white rounded-full px-8 py-4 font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
                        Contact us <span className="text-xl leading-none">→</span>
                    </a>
                </div>

                {/* Stats / Features */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <div className="flex items-start gap-4 group">
                         <div className="p-3 bg-white rounded-2xl shadow-sm text-teal group-hover:text-coral transition-colors">
                            <Headset className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
                         </div>
                         <div>
                             <h4 className="font-bold text-lg sm:text-xl text-gray-900">Support</h4>
                             <p className="text-sm text-gray-500 font-medium">Patient-centered care</p>
                         </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                         <div className="p-3 bg-white rounded-2xl shadow-sm text-teal group-hover:text-coral transition-colors">
                            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
                         </div>
                         <div>
                             <h4 className="font-bold text-lg sm:text-xl text-gray-900">Rating</h4>
                             <p className="text-sm text-gray-500 font-medium">Rated 5 stars by users</p>
                         </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Image Card */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full order-1 lg:order-2 mb-10 lg:mb-0">
                <div className="absolute inset-0 rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-2xl bg-teal-light">
                     <img 
                        src="/dr.webp"
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"; 
                        }}
                        alt="Dr. Nikhil Gohokar" 
                        className="w-full h-full object-cover"
                     />
                     
                     {/* Gradient Overlay for text readability */}
                     <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/80 via-transparent to-transparent opacity-90"></div>

                     {/* Doctor Name Card Overlay */}
                     <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white z-10">
                        <p className="text-sm sm:text-lg font-medium opacity-90 mb-1 text-teal-100">Primary Care</p>
                        <h3 className="text-2xl sm:text-4xl font-semibold tracking-wide">Dr. Nikhil Gohokar</h3>
                     </div>

                     {/* Floating Action Button */}
                     <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-10">
                        <a href="#about" className="bg-teal hover:bg-white hover:text-teal text-white rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300 shadow-xl group border-2 border-transparent hover:border-teal">
                            <ArrowUpRight className="w-6 h-6 transform group-hover:rotate-45 transition-transform" />
                        </a>
                     </div>
                </div>
                
                {/* Decorative background element behind the card */}
                <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-sage/20 rounded-[40px] hidden lg:block"></div>
            </div>

        </div>
    </section>
  );
};

export default Hero;