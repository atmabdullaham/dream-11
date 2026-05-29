import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "general",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form Data:", formData);
      setIsLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", category: "general", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactChannels = [
    {
      icon: "📧",
      title: "Email",
      description: "Send us an email",
      details: ["support@dream11.com", "info@dream11.com"],
      responsive: true,
    },
    {
      icon: "📞",
      title: "Phone",
      description: "Call us directly",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      responsive: true,
    },
    {
      icon: "📍",
      title: "Address",
      description: "Visit our office",
      details: ["123 Cricket Lane", "New Delhi, India 110001"],
      responsive: false,
    },
    {
      icon: "⏰",
      title: "Working Hours",
      description: "Available during",
      details: ["Mon - Fri: 9 AM - 6 PM", "Sat - Sun: 10 AM - 4 PM"],
      responsive: false,
    },
  ];

  const categories = [
    "General Inquiry",
    "Technical Support",
    "Business Partnership",
    "Feedback",
    "Bug Report",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-[#E7FE29] via-yellow-300 to-orange-400 py-16 mb-12">
        <div className="w-10/12 mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Have questions or feedback? We're here to help! Reach out to us
            through any of our contact channels.
          </p>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactChannels.map((channel, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-[#E7FE29]"
            >
              <div className="text-4xl mb-3">{channel.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {channel.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {channel.description}
              </p>
              <div className="space-y-1">
                {channel.details.map((detail, i) => (
                  <p key={i} className="text-sm text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Form Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
            <p className="text-blue-100">
              We'll respond to your inquiry within 24 hours
            </p>
          </div>

          <div className="p-8">
            {/* Success Message */}
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg flex items-start gap-3 animate-in fade-in">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-bold text-green-900">Success!</h4>
                  <p className="text-green-800">
                    Your message has been sent. We'll get back to you soon!
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E7FE29] transition-colors"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E7FE29] transition-colors"
                  required
                />
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Inquiry Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E7FE29] transition-colors bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat.toLowerCase()}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here... (minimum 10 characters)"
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E7FE29] transition-colors resize-none"
                  minLength="10"
                  required
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Characters: {formData.message.length}
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#E7FE29] to-yellow-400 text-gray-900 font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="inline-block animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {[
              {
                q: "How quickly will I receive a response?",
                a: "We typically respond to all inquiries within 24 hours during business days.",
              },
              {
                q: "What if I prefer to call?",
                a: "You can reach our support team by phone during working hours listed above.",
              },
              {
                q: "Is there a physical office I can visit?",
                a: "Yes, you can visit our office at 123 Cricket Lane, New Delhi, India 110001.",
              },
              {
                q: "Can I submit feedback anonymously?",
                a: "We require a name and email so we can follow up on your feedback, but we respect your privacy.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-lg shadow-md p-4 cursor-pointer border-l-4 border-gray-200 hover:border-[#E7FE29] transition-colors"
              >
                <summary className="font-semibold text-gray-900 flex items-center justify-between">
                  {faq.q}
                  <span className="text-2xl group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
