function Branches() {
  const branches = [
    {
      name: 'Academic Affairs',
      description: 'Handles academic policies, curriculum feedback, and student academic concerns',
      contact: 'academic@dbu.edu.et'
    },
    {
      name: 'Student Services',
      description: 'Manages student welfare, housing, dining, and general campus services',
      contact: 'services@dbu.edu.et'
    },
    {
      name: 'Clubs & Organizations',
      description: 'Oversees student clubs, societies, and extracurricular activities',
      contact: 'clubs@dbu.edu.et'
    },
    {
      name: 'Sports & Recreation',
      description: 'Coordinates sports activities, tournaments, and recreational programs',
      contact: 'sports@dbu.edu.et'
    },
    {
      name: 'Cultural Affairs',
      description: 'Organizes cultural events, festivals, and diversity programs',
      contact: 'culture@dbu.edu.et'
    },
    {
      name: 'Community Outreach',
      description: 'Manages community service projects and volunteer opportunities',
      contact: 'outreach@dbu.edu.et'
    }
  ]

  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Branches
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The DBU Student Council is organized into specialized branches to better serve 
            student needs and interests across all areas of university life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {branch.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {branch.description}
              </p>
              <div className="text-sm text-blue-600 font-medium">
                📧 {branch.contact}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Need Help?
          </h2>
          <p className="text-blue-800 mb-6">
            Not sure which branch to contact? Reach out to our main office and we'll 
            direct you to the right department.
          </p>
          <a
            href="mailto:info@dbu.edu.et"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Main Office
          </a>
        </div>
      </div>
    </div>
  )
}

export default Branches