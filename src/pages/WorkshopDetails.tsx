import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Calendar, Clock, Users, Share2, Heart,
  Facebook, Twitter, Linkedin, Mail,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { eventService } from '../services/eventService';
import { TicketCategories } from '../components/TicketCategories';

export const WorkshopDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const workshop = id ? eventService.getWorkshopById(Number(id)) : undefined;

  if (!workshop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Workshop Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const shareLinks = [
    { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Mail, label: 'Email', color: 'hover:text-red-500' }
  ];

  const handleTicketSelect = (categoryId: string) => {
    console.log('Selected ticket category:', categoryId);
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {workshop.categories.map(category => (
                <span key={category} className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium">
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {workshop.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {workshop.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {workshop.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {workshop.location}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {workshop.attendees} attending
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <div className="relative">
                <button 
                  className="p-3 rounded-lg glass-card hover:bg-white/40 transition-colors"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                >
                  <Share2 className="w-5 h-5" />
                </button>
                {showShareMenu && (
                  <div className="absolute right-0 mt-2 w-48 glass-card rounded-lg shadow-xl z-10">
                    {shareLinks.map(({ icon: Icon, label, color }) => (
                      <button
                        key={label}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-white/40 
                                  first:rounded-t-lg last:rounded-b-lg ${color}`}
                      >
                        <Icon className="w-5 h-5" />
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button 
                className={`p-3 rounded-lg glass-card hover:bg-white/40 transition-colors
                          ${isLiked ? 'text-pink-500' : 'text-gray-700'}`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Description */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Workshop</h2>
              <p className="text-gray-700 whitespace-pre-line">{workshop.description}</p>
            </div>

            {/* Schedule */}
            {workshop.schedule && (
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Workshop Schedule</h2>
                <div className="space-y-4">
                  {workshop.schedule.map(({ time, activity }, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/40 transition-colors"
                    >
                      <div className="w-24 font-medium text-purple-600">{time}</div>
                      <div className="flex-1">{activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:w-[400px]">
            <div className="glass-card rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Select Tickets</h3>
              <TicketCategories
                categories={workshop.ticketCategories}
                onSelectTicket={handleTicketSelect}
              />

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Location</h4>
                    <p className="text-gray-700">{workshop.location}</p>
                  </div>
                  {workshop.instructor && (
                    <div>
                      <h4 className="font-medium mb-2">Instructor</h4>
                      <p className="text-gray-700">{workshop.instructor}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};