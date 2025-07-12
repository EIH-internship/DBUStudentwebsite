import { Link } from 'react-router-dom'
import { Users, BookOpen, Trophy, ArrowRight, Star, Calendar, MessageSquare } from 'lucide-react'

function Home() {
  const stats = [
    { icon: Users, number: '50+', label: 'Active Clubs' },
    { icon: BookOpen, number: '15K+', label: 'Students' },
    { icon: Trophy, number: '100+', label: 'Events/Year' }
  ]

  const features = [
    {
      icon: Users,
      title: 'Student Clubs',
      description: 'Join diverse clubs and organizations that match your interests and passions',
      link: '/clubs'
    },
    {
      icon: Star,
      title: 'Leadership Programs',
      description: 'Develop leadership skills through various programs and initiatives',
      link: '/about'
    },
    {
      icon: Calendar,
      title: 'Events & Activities',
      description: 'Participate in exciting events, workshops, and cultural activities',
      link: '/clubs'
    },
    {
      icon: MessageSquare,
      title: 'Student Voice',
      description: 'Have your voice heard in university decisions that affect student life',
      link: '/contact'
    }
  ]

  const announcements = [
    {
      title: 'Student Council Elections 2024',
      date: 'March 15, 2024',
      urgent: true
    },
    {
      title: 'Annual Cultural Festival',
      date: 'April 20, 2024',
      urgent: false
    },
    {
      title: 'New Club Registration Open',
      date: 'February 28, 2024',
      urgent: false
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
                Your Voice,{' '}
                <span className="text-yellow-400">Your Future</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Join the Debre Birhan University Student Council and shape your 
                academic experience through leadership, service, and community engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/clubs"
                  className="bg-yellow-500 text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center"
                >
                  Join a Club
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students with backpacks"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 lg:mt-16 pt-8 lg:pt-16 border-t border-blue-500">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-xs sm:text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover opportunities to grow, lead, and make a difference in your university experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
              Latest Announcements
            </h2>
            <Link
              to="/announcements"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 hover:shadow-md transition-shadow ${
                  announcement.urgent ? 'border-l-4 border-red-500' : ''
                }`}
              >
                {announcement.urgent && (
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mb-3 font-medium">
                    Urgent
                  </span>
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {announcement.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {announcement.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gray-900 text-white">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already making a difference at DBU
          </p>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home