import { Link } from 'react-router-dom'
import { Users, BookOpen, Trophy } from 'lucide-react'

function Home() {
  const stats = [
    { icon: Users, number: '50+', label: 'Active Clubs' },
    { icon: BookOpen, number: '15K+', label: 'Students' },
    { icon: Trophy, number: '100+', label: 'Events/Year' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Your Voice,{' '}
                <span className="text-yellow-400">Your Future</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Join the Debre Birhan University Student Council and shape your 
                academic experience through leadership, service, and community engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/clubs"
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center"
                >
                  Join a Club
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students with backpacks"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-blue-500">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-yellow-400" />
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover opportunities to grow, lead, and make a difference in your university experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Student Clubs',
                description: 'Join diverse clubs and organizations that match your interests and passions',
                icon: '🎯'
              },
              {
                title: 'Leadership Programs',
                description: 'Develop leadership skills through various programs and initiatives',
                icon: '👥'
              },
              {
                title: 'Community Service',
                description: 'Make a positive impact through community service and volunteer opportunities',
                icon: '🤝'
              },
              {
                title: 'Academic Support',
                description: 'Access resources and support to excel in your academic journey',
                icon: '📚'
              },
              {
                title: 'Events & Activities',
                description: 'Participate in exciting events, workshops, and cultural activities',
                icon: '🎉'
              },
              {
                title: 'Student Voice',
                description: 'Have your voice heard in university decisions that affect student life',
                icon: '📢'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already making a difference at DBU
          </p>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home