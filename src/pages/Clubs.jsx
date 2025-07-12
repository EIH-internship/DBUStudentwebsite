import { useState } from 'react'

function Clubs() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Technology', 'Service']

  const clubs = [
    {
      name: 'Debate Society',
      category: 'Academic',
      members: 45,
      description: 'Developing critical thinking and public speaking skills through competitive debates'
    },
    {
      name: 'Football Club',
      category: 'Sports',
      members: 60,
      description: 'University football team competing in inter-university tournaments'
    },
    {
      name: 'Drama Club',
      category: 'Cultural',
      members: 32,
      description: 'Theatrical performances and creative expression through drama and arts'
    },
    {
      name: 'Computer Science Society',
      category: 'Technology',
      members: 78,
      description: 'Programming workshops, hackathons, and tech innovation projects'
    },
    {
      name: 'Volunteer Corps',
      category: 'Service',
      members: 55,
      description: 'Community service and volunteer work in local communities'
    },
    {
      name: 'Photography Club',
      category: 'Cultural',
      members: 28,
      description: 'Capturing university life and developing photography skills'
    }
  ]

  const filteredClubs = selectedCategory === 'All' 
    ? clubs 
    : clubs.filter(club => club.category === selectedCategory)

  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Student Clubs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join one of our many student clubs and organizations to pursue your interests, 
            develop new skills, and connect with like-minded peers.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs.map((club, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                  {club.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {club.members} members
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {club.name}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {club.description}
              </p>
              
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Join Club
              </button>
            </div>
          ))}
        </div>

        {/* Create Club CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Want to Start a New Club?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Have an idea for a new club or organization? We support student initiatives 
            and can help you get started with the registration process.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start a Club
          </button>
        </div>
      </div>
    </div>
  )
}

export default Clubs