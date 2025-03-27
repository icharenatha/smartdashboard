
import React from 'react';
import Navbar from '@/components/ui-custom/Navbar';
import { Button } from '@/components/ui/button';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, PieChart, Pie, Cell
} from 'recharts';
import { 
  ArrowDownRight, ArrowUpRight, BarChart3, Calendar, Clock, Filter, Grid3X3, 
  LayoutDashboard, MoreHorizontal, PlusCircle, RefreshCw, Search, 
  Users, Wallet, X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import StatCard from '@/components/ui-custom/StatCard';
import ProjectCard from '@/components/ui-custom/ProjectCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Mock data for charts
const projectProgressData = [
  { name: 'Jan', actual: 65, planned: 75 },
  { name: 'Feb', actual: 70, planned: 80 },
  { name: 'Mar', actual: 75, planned: 85 },
  { name: 'Apr', actual: 85, planned: 90 },
  { name: 'May', actual: 90, planned: 90 },
  { name: 'Jun', actual: 92, planned: 95 },
  { name: 'Jul', actual: 95, planned: 97 },
];

const resourceAllocationData = [
  { name: 'Engineering', value: 40 },
  { name: 'Design', value: 20 },
  { name: 'QA', value: 15 },
  { name: 'Management', value: 10 },
  { name: 'Other', value: 15 },
];

const budgetUtilizationData = [
  { name: 'Q1', planned: 150000, actual: 142000 },
  { name: 'Q2', planned: 180000, actual: 183000 },
  { name: 'Q3', planned: 200000, actual: 191000 },
  { name: 'Q4', planned: 220000, actual: 210000 },
];

const projectData = [
  { 
    id: 1,
    title: 'Offshore Platform Construction',
    description: 'Construction of a new offshore drilling platform in the North Sea region.',
    progress: 72,
    dueDate: 'Sep 30, 2023',
    teamSize: 45,
    category: 'Construction'
  },
  { 
    id: 2,
    title: 'Pipeline Maintenance System',
    description: 'Development of an automated monitoring and maintenance system for gas pipelines.',
    progress: 89,
    dueDate: 'Aug 15, 2023',
    teamSize: 18,
    category: 'Maintenance'
  },
  { 
    id: 3,
    title: 'Renewable Energy Integration',
    description: 'Integration of solar and wind energy systems at the main refinery site.',
    progress: 45,
    dueDate: 'Dec 1, 2023',
    teamSize: 24,
    category: 'Energy'
  },
  { 
    id: 4,
    title: 'Environmental Compliance Upgrade',
    description: 'Upgrading existing facilities to meet new environmental regulatory requirements.',
    progress: 60,
    dueDate: 'Oct 12, 2023',
    teamSize: 12,
    category: 'Compliance'
  },
];

const COLORS = ['#7dbe32', '#262262', '#b79b33', '#2E7B95', '#888888'];

const DctDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-lpms-blue">LPMS DCT Dashboard</h1>
            <p className="text-gray-600">Real-time project tracking and performance insights</p>
          </div>
          
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center text-lpms-blue border-lpms-blue">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center text-lpms-blue border-lpms-blue">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button className="bg-lpms-green hover:bg-lpms-green/90">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Active Projects"
            value="16"
            icon={<LayoutDashboard className="h-5 w-5 text-lpms-green" />}
            trend={{ value: 12.5, isPositive: true }}
          />
          
          <StatCard 
            title="Team Members"
            value="128"
            icon={<Users className="h-5 w-5 text-lpms-blue" />}
            trend={{ value: 3.2, isPositive: true }}
          />
          
          <StatCard 
            title="Budget Utilization"
            value="$1.2M"
            icon={<Wallet className="h-5 w-5 text-lpms-gold" />}
            trend={{ value: 2.1, isPositive: false }}
          />
          
          <StatCard 
            title="Avg. Completion Time"
            value="4.2 months"
            icon={<Clock className="h-5 w-5 text-purple-500" />}
            trend={{ value: 5.3, isPositive: true }}
          />
        </div>
        
        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Project Progress Chart */}
          <div className="glassmorphism rounded-xl p-5 col-span-1 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-semibold text-lpms-blue">Project Progress Tracking</h3>
                <p className="text-sm text-gray-500">Actual vs. Planned progress over time</p>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={projectProgressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis unit="%" />
                  <Tooltip />
                  <Area type="monotone" dataKey="planned" stroke="#262262" fillOpacity={0.2} fill="#262262" name="Planned" />
                  <Area type="monotone" dataKey="actual" stroke="#7dbe32" fillOpacity={0.2} fill="#7dbe32" name="Actual" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Resource Allocation Chart */}
          <div className="glassmorphism rounded-xl p-5">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-semibold text-lpms-blue">Resource Allocation</h3>
                <p className="text-sm text-gray-500">By department</p>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="h-[300px] flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={resourceAllocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                    label={(entry) => `${entry.name}: ${entry.value}%`}
                    labelLine={false}
                  >
                    {resourceAllocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Budget Utilization Chart */}
        <div className="glassmorphism rounded-xl p-5 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold text-lpms-blue">Budget Utilization</h3>
              <p className="text-sm text-gray-500">Planned vs. Actual expenses</p>
            </div>
            <div className="flex space-x-2">
              <Select defaultValue="currentYear">
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="currentYear">Current Year</SelectItem>
                  <SelectItem value="lastYear">Last Year</SelectItem>
                  <SelectItem value="allTime">All Time</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetUtilizationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="planned" name="Planned Budget" fill="#262262" />
                <Bar dataKey="actual" name="Actual Expenses" fill="#7dbe32" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Projects Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-lpms-blue">Active Projects</h2>
            <div className="flex space-x-3 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search projects..." className="pl-10 w-64" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="energy">Energy</SelectItem>
                  <SelectItem value="compliance">Compliance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                progress={project.progress}
                dueDate={project.dueDate}
                teamSize={project.teamSize}
                category={project.category}
                to="#"
              />
            ))}
          </div>
        </div>
        
        {/* Calendar Section */}
        <div className="glassmorphism rounded-xl p-5">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-lpms-green mr-3" />
              <h3 className="font-semibold text-lpms-blue">Upcoming Project Milestones</h3>
            </div>
            <Button variant="outline" className="text-lpms-blue border-lpms-blue">
              View Calendar
            </Button>
          </div>
          
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 border border-gray-100">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-lpms-blue/10 rounded-lg flex items-center justify-center text-lpms-blue font-medium mr-4">
                    <div className="flex flex-col items-center">
                      <span className="text-xs">Aug</span>
                      <span className="text-lg">{10 + item}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-lpms-blue">
                      {item === 1 ? 'Phase Completion Review' : 
                       item === 2 ? 'Stakeholder Presentation' : 'Final Inspection'}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item === 1 ? 'Offshore Platform Construction' : 
                       item === 2 ? 'Renewable Energy Integration' : 'Pipeline Maintenance System'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((avatar) => (
                      <div key={avatar} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                        {String.fromCharCode(64 + avatar)}
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DctDashboard;
