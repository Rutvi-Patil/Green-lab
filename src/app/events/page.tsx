import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { createPageMetadata, createBreadcrumbSchema, createEventSchema } from '@/utils/metadata';
import { Metadata } from 'next';

// Page-specific metadata
const pageMetadata = createPageMetadata({
  title: 'My Green Lab Events - Conferences, Workshops & Webinars',
  description: 'Join My Green Lab events including conferences, workshops, and webinars on laboratory sustainability. Connect with sustainability professionals and learn best practices.',
  keywords: 'My Green Lab events, laboratory sustainability conference, green lab workshop, sustainability webinar, environmental events',
  canonical: 'https://mygreenlab.org/events',
  openGraph: {
    type: 'website',
    url: 'https://mygreenlab.org/events',
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  },
  twitter: {
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  },
  jsonLd: [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://mygreenlab.org/' },
      { name: 'Events', url: 'https://mygreenlab.org/events' }
    ]),
    createEventSchema({
      name: 'My Green Lab Annual Conference 2024',
      description: 'Join sustainability professionals from around the world for the premier laboratory sustainability conference.',
      startDate: '2024-10-15T09:00:00-07:00',
      endDate: '2024-10-17T17:00:00-07:00',
      location: 'San Diego, CA',
      url: 'https://mygreenlab.org/events'
    })
  ]
});

// Generate metadata for server-side rendering
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    keywords: pageMetadata.keywords,
    openGraph: pageMetadata.openGraph,
    twitter: pageMetadata.twitter,
    alternates: {
      canonical: pageMetadata.canonical,
    },
    other: {
      'application/ld+json': JSON.stringify(pageMetadata.jsonLd),
    },
  };
}

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'My Green Lab Annual Conference 2024',
      date: 'October 15-17, 2024',
      time: '9:00 AM - 5:00 PM PST',
      location: 'San Diego, CA',
      type: 'Conference',
      description: 'Join sustainability professionals from around the world for three days of networking, learning, and collaboration on laboratory sustainability.',
      image: 'https://images.unsplash.com/photo-1540575161948-903b5a534c77?auto=compress&cs=tinysrgb&w=800',
      price: '$499'
    },
    {
      id: 2,
      title: 'Green Lab Certification Workshop',
      date: 'November 8, 2024',
      time: '10:00 AM - 2:00 PM PST',
      location: 'Virtual',
      type: 'Workshop',
      description: 'Learn the step-by-step process for achieving My Green Lab Certification in this interactive virtual workshop.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=compress&cs=tinysrgb&w=800',
      price: '$149'
    },
    {
      id: 3,
      title: 'ACT Ecolabel Product Showcase',
      date: 'December 5, 2024',
      time: '11:00 AM - 12:30 PM PST',
      location: 'Virtual',
      type: 'Webinar',
      description: 'Discover the latest ACT Ecolabel certified products and learn how to incorporate them into your sustainable procurement strategy.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=compress&cs=tinysrgb&w=800',
      price: 'Free'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Sustainable Lab Design Summit',
      date: 'September 12, 2024',
      location: 'Boston, MA',
      type: 'Summit',
      description: 'Exploring innovative approaches to sustainable laboratory design and construction.',
      attendees: 250
    },
    {
      id: 5,
      title: 'Energy Efficiency in Labs Webinar',
      date: 'August 22, 2024',
      location: 'Virtual',
      type: 'Webinar',
      description: 'Best practices for reducing energy consumption in laboratory operations.',
      attendees: 500
    }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-mgl-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                My Green Lab Events
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Connect with sustainability professionals, learn best practices, and advance your laboratory sustainability journey through our events.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Upcoming Events
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  Join us for conferences, workshops, and webinars on laboratory sustainability.
                </p>
              </div>
              <button className="flex items-center text-sm sm:text-base font-semibold text-mgl-lime hover:underline">
                View All Events
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 sm:h-56">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-mgl-lime text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {event.type}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2 text-mgl-lime" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2 text-mgl-lime" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2 text-mgl-lime" />
                        {event.location}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-mgl-lime">{event.price}</span>
                      <button className="px-4 py-2 bg-mgl-lime text-white text-sm font-semibold rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Types of Events
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                We offer various event formats to meet different learning and networking needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-md">
                <div className="w-16 h-16 bg-mgl-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Conferences</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Large-scale events featuring keynote speakers, workshops, and networking opportunities with sustainability professionals worldwide.
                </p>
              </div>

              <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-md">
                <div className="w-16 h-16 bg-mgl-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Workshops</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Hands-on training sessions focused on specific sustainability topics and certification processes.
                </p>
              </div>

              <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-md">
                <div className="w-16 h-16 bg-mgl-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Webinars</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Online presentations and discussions on current trends and best practices in laboratory sustainability.
                </p>
              </div>

              <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-md">
                <div className="w-16 h-16 bg-mgl-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Local Meetups</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Regional gatherings for local sustainability communities to share experiences and collaborate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Past Events
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                See what you missed at our recent events and access recordings and materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-mgl-lime" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin className="w-4 h-4 mr-2 text-mgl-lime" />
                        {event.location}
                      </div>
                    </div>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {event.type}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2 text-mgl-lime" />
                      {event.attendees} attendees
                    </div>
                    <button className="text-mgl-lime font-semibold text-sm hover:underline">
                      View Recording
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 sm:py-16 lg:py-20 bg-mgl-lime">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated on Events
            </h2>
            <p className="text-base sm:text-lg text-white opacity-90 mb-8">
              Subscribe to our newsletter to receive announcements about upcoming events, early bird discounts, and sustainability insights.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="px-6 py-3 bg-white text-mgl-lime font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default EventsPage;
