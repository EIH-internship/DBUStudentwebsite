function About() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            About DBU Student Council
          </h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 mb-8 text-center">
              The Debre Birhan University Student Council is the official representative body 
              of all students at DBU, dedicated to enhancing student life and academic experience.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To advocate for student rights and interests, promote academic excellence, 
                  and create an inclusive environment where all students can thrive and succeed 
                  in their university journey.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the leading student organization in Ethiopia, fostering innovation, 
                  leadership, and community engagement while preparing students to become 
                  future leaders in their respective fields.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: 'Integrity', description: 'We uphold the highest standards of honesty and transparency' },
                  { title: 'Unity', description: 'We bring together students from all backgrounds and disciplines' },
                  { title: 'Excellence', description: 'We strive for excellence in everything we do' },
                  { title: 'Service', description: 'We are dedicated to serving the needs of all students' }
                ].map((value, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About