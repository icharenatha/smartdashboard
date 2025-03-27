
import React from 'react';
import { ArrowRight, BarChart3, BrainCog, Grid3X3, MessagesSquare, Sparkles } from 'lucide-react';
import PortalCard from '@/components/ui-custom/PortalCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/ui-custom/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-lpms-blue rounded-2xl flex items-center justify-center mb-8 animate-float">
            <div className="text-white font-bold text-3xl">LP</div>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lpms-blue mb-6 leading-tight animate-fade-in">
              LPMS Integrated Portal System
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delay">
              A comprehensive digital ecosystem designed to streamline project management, 
              enhance productivity, and leverage AI-powered solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-delay-long">
              <Button asChild className="bg-lpms-green hover:bg-lpms-green/90 text-white">
                <Link to="/dct" className="px-6 py-6 flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-lpms-blue text-lpms-blue hover:bg-lpms-blue/5">
                <a href="#portals" className="px-6 py-6">Explore Portals</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Portal Cards Section */}
        <section id="portals" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lpms-blue mb-4 animate-fade-in">Our Portals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in">
              Access our specialized platforms designed to meet your project management, 
              application, and artificial intelligence needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PortalCard
              title="LPMS DCT"
              description="Real-time digital dashboard for comprehensive project tracking and monitoring with integrated data visualization."
              icon={<BarChart3 className="h-6 w-6 text-white" />}
              to="/dct"
              iconBgColor="bg-lpms-green"
              delay="none"
            />
            
            <PortalCard
              title="LPMS App"
              description="Access a suite of specialized applications designed to enhance project execution and team productivity."
              icon={<Grid3X3 className="h-6 w-6 text-white" />}
              to="/app"
              iconBgColor="bg-lpms-blue"
              delay="short"
            />
            
            <PortalCard
              title="LPMS AI"
              description="Leverage the power of artificial intelligence with our collection of AI-powered tools and machine learning models."
              icon={<BrainCog className="h-6 w-6 text-white" />}
              to="/ai"
              iconBgColor="bg-lpms-gold"
              delay="long"
            />
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lpms-blue mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our integrated portal system offers a comprehensive suite of features to streamline your workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="glassmorphism p-6 rounded-xl">
              <div className="p-3 bg-lpms-green/10 rounded-lg w-fit mb-4">
                <BarChart3 className="h-5 w-5 text-lpms-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-lpms-blue">Real-time Analytics</h3>
              <p className="text-gray-600">Monitor project performance with live data visualization and intelligent insights.</p>
            </div>
            
            <div className="glassmorphism p-6 rounded-xl">
              <div className="p-3 bg-lpms-blue/10 rounded-lg w-fit mb-4">
                <Grid3X3 className="h-5 w-5 text-lpms-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-lpms-blue">Integrated Applications</h3>
              <p className="text-gray-600">Access specialized tools designed to support every aspect of your project lifecycle.</p>
            </div>
            
            <div className="glassmorphism p-6 rounded-xl">
              <div className="p-3 bg-lpms-gold/10 rounded-lg w-fit mb-4">
                <BrainCog className="h-5 w-5 text-lpms-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-lpms-blue">AI-Powered Insights</h3>
              <p className="text-gray-600">Harness the power of artificial intelligence to optimize decision-making processes.</p>
            </div>
            
            <div className="glassmorphism p-6 rounded-xl">
              <div className="p-3 bg-purple-500/10 rounded-lg w-fit mb-4">
                <MessagesSquare className="h-5 w-5 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-lpms-blue">Collaborative Platform</h3>
              <p className="text-gray-600">Enable seamless communication and collaboration across your entire team.</p>
            </div>
            
            <div className="glassmorphism p-6 rounded-xl">
              <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4">
                <Sparkles className="h-5 w-5 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-lpms-blue">Intuitive Interface</h3>
              <p className="text-gray-600">Enjoy a clean, modern user experience designed with efficiency in mind.</p>
            </div>
            
            <div className="glassmorphism p-6 rounded-xl">
              <div className="p-3 bg-emerald-500/10 rounded-lg w-fit mb-4">
                <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-lpms-blue">Quality Assurance</h3>
              <p className="text-gray-600">Implement robust quality control measures to ensure project excellence.</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-lpms-blue text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="bg-white text-lpms-blue p-2 rounded-md font-bold">LPMS</div>
                <span className="font-semibold text-xl">Portal</span>
              </div>
              <p className="mt-2 text-white/70 max-w-md">
                Empowering teams with integrated digital solutions for project excellence.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
              <div>
                <h4 className="font-semibold mb-3">Portals</h4>
                <ul className="space-y-2">
                  <li><a href="/dct" className="text-white/70 hover:text-white">LPMS DCT</a></li>
                  <li><a href="/app" className="text-white/70 hover:text-white">LPMS App</a></li>
                  <li><a href="/ai" className="text-white/70 hover:text-white">LPMS AI</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-white">Documentation</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white">Support</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white">Training</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
            © {new Date().getFullYear()} LPMS Portal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
