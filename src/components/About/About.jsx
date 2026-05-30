const About = () => {
  const features = [
    {
      icon: "🎯",
      title: "Fantasy Cricket",
      description:
        "Build your dream team and compete in exciting fantasy cricket leagues with players from around the world.",
    },
    {
      icon: "💰",
      title: "Real-Time Updates",
      description:
        "Get live scores, player statistics, and instant updates as matches unfold across multiple tournaments.",
    },
    {
      icon: "🏆",
      title: "Massive Contests",
      description:
        "Participate in thousands of contests with varying stakes and compete for incredible prizes and rewards.",
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description:
        "Access detailed player statistics, performance metrics, and expert insights to make informed decisions.",
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description:
        "Play with confidence on our highly secure and transparent gaming platform with fair play guarantees.",
    },
    {
      icon: "🌍",
      title: "Global Community",
      description:
        "Join millions of cricket enthusiasts worldwide and engage with a vibrant fantasy gaming community.",
    },
  ];

  const milestones = [
    { number: "50M+", label: "Active Users" },
    { number: "1000+", label: "Daily Contests" },
    { number: "₹500Cr+", label: "Prize Pool" },
    { number: "24/7", label: "Customer Support" },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "Continuously improving our platform with cutting-edge technology and features.",
    },
    {
      title: "Integrity",
      description:
        "Maintaining the highest standards of fairness, transparency, and responsible gaming.",
    },
    {
      title: "Excellence",
      description:
        "Delivering exceptional user experience and world-class customer service.",
    },
    {
      title: "Community",
      description:
        "Building a passionate community of cricket fans and gaming enthusiasts.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="w-10/12 mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About Dream 11
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Where Cricket Meets Fantasy - The Ultimate Gaming Platform for
            Cricket Enthusiasts
          </p>
        </div>
      </div>

      <div className="w-10/12 mx-auto py-16">
        {/* Mission Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To revolutionize the way cricket fans engage with the sport by
              providing an innovative, transparent, and entertaining fantasy
              cricket platform. We're committed to delivering the best user
              experience while maintaining the highest standards of fairness and
              responsible gaming.
            </p>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#E7FE29] to-yellow-400 rounded-xl p-8 text-center shadow-lg"
              >
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {milestone.number}
                </div>
                <div className="text-gray-700 font-semibold">
                  {milestone.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Dream 11?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 border-t-4 border-[#E7FE29]"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E7FE29] flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Story
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Dream 11 started with a simple vision: to bring the excitement of
              fantasy cricket to millions of fans worldwide. What began as a
              small startup has grown into one of the largest fantasy sports
              platforms in India and beyond.
            </p>
            <p>
              Our journey has been driven by a passion for cricket and a
              commitment to providing the best gaming experience. We've invested
              heavily in technology, security, and customer support to ensure
              that every player has a safe, fair, and enjoyable experience.
            </p>
            <p>
              Today, Dream 11 is trusted by millions of users who engage with
              our platform daily to live their cricket fantasies. We continue to
              innovate and expand our offerings to include more tournaments,
              leagues, and contests.
            </p>
            <p>
              We're proud to be part of the cricket ecosystem and look forward
              to continuing our journey of bringing cricket fans closer to the
              sport they love.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#E7FE29] to-yellow-400 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Join the Game?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Start building your dream team today and compete with cricket fans
            around the world. Join millions of players already experiencing the
            thrill of fantasy cricket.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
            Get Started Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
