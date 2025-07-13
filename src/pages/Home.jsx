import { Link } from 'react-router-dom'
import { Users, BookOpen, Trophy, ArrowRight, Star, Calendar, MessageSquare, Award } from 'lucide-react'

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Voice,{' '}
                <span className="text-yellow-400">Your Future</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Join the Debre Birhan University Student Council and shape your 
                academic experience through leadership, service, and community engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/clubs"
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Join a Club
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students celebrating graduation"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-20 animate-bounce"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-blue-500">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover opportunities to grow, lead, and make a difference in your university experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-blue-200">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Latest Announcements
              </h2>
              <p className="text-xl text-gray-600">
                Stay updated with the latest news and events
              </p>
            </div>
            <Link
              to="/announcements"
              className="text-blue-600 hover:text-blue-700 font-medium mt-4 sm:mt-0"
            >
              View All →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                  announcement.urgent ? 'border-red-500 bg-red-50' : 'border-blue-500'
                }`}
              >
                {announcement.urgent && (
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full mb-4 font-medium">
                    Urgent
                  </span>
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {announcement.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {announcement.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students who are already making a difference at DBU
            </p>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home