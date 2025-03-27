
import React from 'react';
import Navbar from '@/components/ui-custom/Navbar';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Database, FileText, FolderSearch, Grid3X3, HardHat, History, ListChecks, PlaneTakeoff, PlusCircle, RefreshCw, Scale, Search, Settings, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ApplicationCard from '@/components/ui-custom/ApplicationCard';
import { toast } from '@/components/ui/use-toast';

const applicationCategories = [
  { id: 'all', name: 'All Applications' },
  { id: 'project', name: 'Project Management' },
  { id: 'quality', name: 'Quality Management' },
  { id: 'resource', name: 'Resource Planning' },
  { id: 'document', name: 'Document Management' },
];

const applications = [
  {
    id: 1,
    title: 'Project Supporting Application',
    description: 'Comprehensive project management and tracking system for monitoring progress, resources, and deliverables.',
    category: 'project',
    icon: <Grid3X3 className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-lpms-green',
  },
  {
    id: 2,
    title: 'ERMIS Application',
    description: 'Enterprise Resource Management Information System for efficient allocation and tracking of resources.',
    category: 'resource',
    icon: <Database className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-lpms-blue',
  },
  {
    id: 3,
    title: 'Weld Tracking Management',
    description: 'Specialized tool for tracking and managing welding processes, quality control, and certification.',
    category: 'quality',
    icon: <HardHat className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-lpms-gold',
  },
  {
    id: 4,
    title: 'Manpower Planning',
    description: 'Strategic workforce planning and scheduling tool optimized for project requirements.',
    category: 'resource',
    icon: <Users className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-purple-500',
  },
  {
    id: 5,
    title: 'QMS Online',
    description: 'Digital Quality Management System for ensuring compliance with standards and procedures.',
    category: 'quality',
    icon: <ListChecks className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-cyan-500',
  },
  {
    id: 6,
    title: 'Document Control System',
    description: 'Centralized repository for managing project documentation, revisions, and approvals.',
    category: 'document',
    icon: <FileText className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-indigo-500',
  },
  {
    id: 7,
    title: 'Resource Utilization Tracker',
    description: 'Monitor and optimize the allocation and utilization of project resources.',
    category: 'resource',
    icon: <PlaneTakeoff className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-emerald-500',
  },
  {
    id: 8,
    title: 'Audit Management System',
    description: 'Schedule, conduct, and track audits to ensure compliance with industry standards.',
    category: 'quality',
    icon: <Scale className="h-6 w-6 text-white" />,
    iconBgClass: 'bg-pink-500',
  }
];

const recentApplications = [2, 5, 1]; // IDs of recently used applications

const AppPortal = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || app.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const recentApps = applications.filter(app => recentApplications.includes(app.id));

  const handleAppClick = (appTitle: string) => {
    toast({
      title: "Application Launching",
      description: `${appTitle} is being launched. Please wait...`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-lpms-blue">LPMS Application Portal</h1>
            <p className="text-gray-600">Access all your productivity and project management applications</p>
          </div>
          
          <div className="flex space-x-3 mt-4 md:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search applications..." 
                className="pl-10 w-64" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-lpms-green hover:bg-lpms-green/90">
              <PlusCircle className="mr-2 h-4 w-4" />
              Request App
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="applications" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="applications" className="text-sm">All Applications</TabsTrigger>
            <TabsTrigger value="recent" className="text-sm">Recently Used</TabsTrigger>
            <TabsTrigger value="favorites" className="text-sm">Favorites</TabsTrigger>
          </TabsList>
          
          <TabsContent value="applications">
            <div className="flex overflow-x-auto scrollbar-hidden space-x-2 mb-6 pb-2">
              {applicationCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={cn(
                    "rounded-full whitespace-nowrap",
                    activeCategory === category.id 
                      ? "bg-lpms-blue hover:bg-lpms-blue/90" 
                      : "text-lpms-blue border-lpms-blue/30"
                  )}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApplications.map((app) => (
                <ApplicationCard
                  key={app.id}
                  title={app.title}
                  description={app.description}
                  icon={app.icon}
                  iconBgClass={app.iconBgClass}
                  onClick={() => handleAppClick(app.title)}
                />
              ))}
              
              {filteredApplications.length === 0 && (
                <div className="col-span-full py-12 text-center">
                  <FolderSearch className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-lpms-blue mb-2">No applications found</h3>
                  <p className="text-gray-500">
                    {searchQuery ? `No results for "${searchQuery}"` : "No applications in this category"}
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentApps.map((app) => (
                <ApplicationCard
                  key={app.id}
                  title={app.title}
                  description={app.description}
                  icon={app.icon}
                  iconBgClass={app.iconBgClass}
                  onClick={() => handleAppClick(app.title)}
                />
              ))}
              
              <div className="glassmorphism rounded-xl p-5 flex flex-col items-center justify-center text-center">
                <History className="h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-lpms-blue mb-2">Application History</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Recently used applications will appear here for quick access
                </p>
                <Button variant="outline" className="text-lpms-blue border-lpms-blue">
                  View All Applications
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="favorites">
            <div className="glassmorphism rounded-xl p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-gray-100 mb-4">
                <Clock className="h-8 w-8 text-gray-300" />
              </div>
              <h3 className="text-xl font-medium text-lpms-blue mb-2">No Favorites Yet</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                You haven't added any applications to your favorites yet. 
                Mark applications as favorites for quick access.
              </p>
              <Button variant="outline" className="text-lpms-blue border-lpms-blue mx-auto">
                Browse Applications
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Quick Access Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-lpms-blue mb-6">Quick Access</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Project Calendar', 'User Settings', 'Help Center', 'Admin Panel'].map((item, index) => (
              <div 
                key={index} 
                className="glassmorphism rounded-xl p-4 flex items-center space-x-3 cursor-pointer portal-card-hover"
                onClick={() => toast({
                  title: "Quick Access",
                  description: `Opening ${item}...`,
                })}
              >
                <div className={cn(
                  "rounded-lg p-2", 
                  index === 0 ? "bg-lpms-green/10 text-lpms-green" : 
                  index === 1 ? "bg-lpms-blue/10 text-lpms-blue" : 
                  index === 2 ? "bg-lpms-gold/10 text-lpms-gold" : 
                  "bg-purple-500/10 text-purple-500"
                )}>
                  {index === 0 ? <Calendar className="h-5 w-5" /> : 
                   index === 1 ? <Settings className="h-5 w-5" /> : 
                   index === 2 ? <FolderSearch className="h-5 w-5" /> : 
                   <Users className="h-5 w-5" />}
                </div>
                <span className="font-medium text-lpms-blue">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Updates & Announcements */}
        <div className="glassmorphism rounded-xl p-6">
          <h2 className="text-xl font-bold text-lpms-blue mb-4">Updates & Announcements</h2>
          
          <div className="space-y-4">
            {[
              { title: 'QMS Online Update', date: 'August 21, 2023', desc: 'New features added to the Quality Management System.' },
              { title: 'Scheduled Maintenance', date: 'August 25, 2023', desc: 'System maintenance scheduled from 11 PM to 2 AM.' },
              { title: 'New Application Available', date: 'September 1, 2023', desc: 'The Document Verification System is now available for all users.' }
            ].map((update, index) => (
              <div key={index} className="p-4 border-b border-gray-100 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lpms-blue">{update.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{update.desc}</p>
                  </div>
                  <span className="text-xs bg-gray-100 rounded-full px-2 py-1 text-gray-600">
                    {update.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <Button variant="outline" className="text-lpms-blue border-lpms-blue">
              View All Updates
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppPortal;
