
import React from 'react';
import Navbar from '@/components/ui-custom/Navbar';
import { Button } from '@/components/ui/button';
import { 
  BrainCog, Code, Filter, HelpCircle, ImageIcon, 
  MessageSquare, PieChart, PlusCircle, RefreshCw, Search, 
  Shield, Sparkles, UserCheck, Code2, Scan, FileText, BrainCircuit
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AIToolCard from '@/components/ui-custom/AIToolCard';
import { toast } from '@/components/ui/use-toast';

const aiToolsData = [
  {
    id: 1,
    title: 'LPMS Assistant',
    description: 'AI-powered chatbot for answering questions and providing guidance on LPMS systems.',
    category: 'chatbot',
    icon: <MessageSquare className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-lpms-blue',
    rating: 4.5
  },
  {
    id: 2,
    title: 'Document Analyzer',
    description: 'Extract key information from contracts, reports, and technical documents automatically.',
    category: 'document',
    icon: <FileText className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-lpms-green',
    rating: 4.2
  },
  {
    id: 3,
    title: 'Face Recognition',
    description: 'Secure access control and attendance management system using facial recognition.',
    category: 'vision',
    icon: <UserCheck className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-lpms-gold',
    rating: 4.7
  },
  {
    id: 4,
    title: 'Predictive Maintenance',
    description: 'Machine learning model that predicts equipment failures before they occur.',
    category: 'analytics',
    icon: <PieChart className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-purple-500',
    rating: 4.3
  },
  {
    id: 5,
    title: 'Code Generator',
    description: 'AI tool that generates code snippets based on natural language descriptions.',
    category: 'development',
    icon: <Code className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-cyan-500',
    rating: 3.9
  },
  {
    id: 6,
    title: 'Anomaly Detection',
    description: 'Identifies unusual patterns in operational data that may indicate problems.',
    category: 'analytics',
    icon: <Shield className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-red-500',
    rating: 4.1
  },
  {
    id: 7,
    title: 'Image Analyzer',
    description: 'Automatically detect objects, defects, and conditions in photos and videos.',
    category: 'vision',
    icon: <ImageIcon className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-indigo-500',
    rating: 4.4
  },
  {
    id: 8,
    title: 'Smart QA Reviewer',
    description: 'AI that reviews quality assurance documentation for completeness and compliance.',
    category: 'document',
    icon: <Sparkles className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-emerald-500',
    rating: 4.0
  }
];

const AiPortal = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [categoryFilter, setCategoryFilter] = React.useState('all');

  const filteredTools = aiToolsData.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || tool.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  const handleToolClick = (toolTitle: string) => {
    toast({
      title: "AI Tool Launching",
      description: `${toolTitle} is starting up. Please wait a moment...`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-lpms-blue">LPMS AI Portal</h1>
            <p className="text-gray-600">Access powerful AI tools and machine learning models</p>
          </div>
          
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center text-lpms-blue border-lpms-blue">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center text-lpms-blue border-lpms-blue">
              <HelpCircle className="mr-2 h-4 w-4" />
              Help
            </Button>
            <Button className="bg-lpms-green hover:bg-lpms-green/90">
              <PlusCircle className="mr-2 h-4 w-4" />
              Request AI Tool
            </Button>
          </div>
        </div>
        
        {/* Featured AI Tool */}
        <div className="glassmorphism rounded-xl p-6 mb-8 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-lpms-blue opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-lpms-green opacity-10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="flex flex-col justify-center">
              <div className="bg-lpms-blue/10 text-lpms-blue px-3 py-1 rounded-full text-xs font-medium inline-block w-fit mb-4">
                Featured AI Tool
              </div>
              <h2 className="text-3xl font-bold text-lpms-blue mb-4">LPMS Intelligent Assistant</h2>
              <p className="text-gray-600 mb-6">
                Our most advanced AI assistant that can help you with project information, generate reports, 
                answer technical questions, and provide real-time insights across all LPMS systems.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-lpms-blue hover:bg-lpms-blue/90">
                  Launch Assistant
                </Button>
                <Button variant="outline" className="text-lpms-blue border-lpms-blue">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-lpms-blue/10 animate-pulse-subtle flex items-center justify-center">
                    <BrainCircuit className="h-20 w-20 text-lpms-blue opacity-70" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-lpms-blue/30 animate-spin-slow"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full border border-lpms-blue/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Tools Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-lpms-blue mb-4 md:mb-0">AI Tools & Models</h2>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-3 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search AI tools..." 
                className="pl-10 w-full md:w-64" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="chatbot">Chatbots</SelectItem>
                <SelectItem value="vision">Computer Vision</SelectItem>
                <SelectItem value="analytics">Analytics</SelectItem>
                <SelectItem value="document">Document AI</SelectItem>
                <SelectItem value="development">Development</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredTools.map((tool) => (
            <AIToolCard
              key={tool.id}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              rating={tool.rating}
              iconBgClass={tool.iconBgClass}
              onClick={() => handleToolClick(tool.title)}
            />
          ))}
          
          {filteredTools.length === 0 && (
            <div className="col-span-full py-12 text-center">
              <Search className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-lpms-blue mb-2">No AI tools found</h3>
              <p className="text-gray-500">
                {searchQuery ? `No results for "${searchQuery}"` : "No tools in this category"}
              </p>
            </div>
          )}
        </div>
        
        {/* ML Model Performance Dashboard */}
        <div className="glassmorphism rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-lpms-blue">Machine Learning Model Performance</h2>
              <p className="text-sm text-gray-500">Real-time metrics and performance indicators</p>
            </div>
            <Button variant="outline" className="text-lpms-blue border-lpms-blue">
              View Full Dashboard
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Predictive Maintenance', accuracy: '94.2%', training: 'Last updated 3 days ago', color: 'bg-lpms-green' },
              { name: 'Anomaly Detection', accuracy: '91.8%', training: 'Last updated 1 week ago', color: 'bg-lpms-blue' },
              { name: 'Document Classification', accuracy: '89.5%', training: 'Last updated 2 days ago', color: 'bg-lpms-gold' }
            ].map((model, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
                <h3 className="font-medium text-lpms-blue mb-3">{model.name}</h3>
                
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Accuracy</span>
                    <span>{model.accuracy}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className={cn("h-1.5 rounded-full", model.color)}
                      style={{ width: model.accuracy }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 flex items-center">
                  <RefreshCw className="h-3 w-3 mr-1" />
                  {model.training}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent AI Activities */}
        <div className="glassmorphism rounded-xl p-6">
          <h2 className="text-xl font-bold text-lpms-blue mb-6">Recent AI Activities</h2>
          
          <div className="space-y-5">
            {[
              { tool: 'Face Recognition', action: 'Personnel verification completed', time: '10 minutes ago', icon: <UserCheck className="h-5 w-5 text-white" />, color: 'bg-lpms-gold' },
              { tool: 'Document Analyzer', action: 'Project document batch processed', time: '35 minutes ago', icon: <FileText className="h-5 w-5 text-white" />, color: 'bg-lpms-green' },
              { tool: 'LPMS Assistant', action: 'Q&A session with Engineering team', time: '2 hours ago', icon: <MessageSquare className="h-5 w-5 text-white" />, color: 'bg-lpms-blue' },
              { tool: 'Anomaly Detection', action: 'Alert: Unusual pattern detected', time: '3 hours ago', icon: <Shield className="h-5 w-5 text-white" />, color: 'bg-red-500' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={cn("rounded-full p-2 flex-shrink-0", activity.color)}>
                  {activity.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lpms-blue">{activity.tool}</h3>
                      <p className="text-sm text-gray-600 mt-1">{activity.action}</p>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline" className="text-lpms-blue border-lpms-blue">
              View All Activities
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AiPortal;
