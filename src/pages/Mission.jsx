function Mission() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            Mission & Vision
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <p className="text-lg text-blue-800 leading-relaxed">
                To advocate for student rights and interests, promote democratic governance, 
                and create an inclusive environment where all students can participate and 
                thrive in their university experience through leadership development, 
                community service, and academic excellence.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-green-900 mb-6">Our Vision</h2>
              <p className="text-lg text-green-800 leading-relaxed">
                To be the leading student union in Ethiopia, fostering academic excellence, 
                social engagement, and preparing students to become future leaders in their 
                communities and beyond while maintaining the highest standards of integrity 
                and service.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Goals</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                'Enhance student academic experience and support',
                'Promote student welfare and well-being',
                'Foster leadership and personal development',
                'Strengthen university-student relationships',
                'Encourage community engagement and service',
                'Support diverse student clubs and organizations'
              ].map((goal, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission