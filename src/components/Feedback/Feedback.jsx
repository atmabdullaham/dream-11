import { useEffect, useState } from "react";

const Feedback = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: 5,
    message: "",
  });
  const [saved, setSaved] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("demo_feedback") || "[]");
    setFeedbacks(all);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage for demo purposes
    const all = JSON.parse(localStorage.getItem("demo_feedback") || "[]");
    all.unshift({ ...form, date: new Date().toISOString() });
    localStorage.setItem("demo_feedback", JSON.stringify(all));
    setSaved(true);
    setForm({ name: "", email: "", rating: 5, message: "" });
    setFeedbacks(all);
    setTimeout(() => setSaved(false), 3000);
  };

  const clearFeedbacks = () => {
    localStorage.removeItem("demo_feedback");
    setFeedbacks([]);
  };

  return (
    <div className="w-10/12 mx-auto py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <h2 className="text-2xl font-bold">Feedback</h2>
          <p className="text-blue-100">
            We value your feedback — help us improve.
          </p>
        </div>

        <div className="p-8">
          {saved && (
            <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 rounded">
              Thanks — your feedback was saved.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <select
                name="rating"
                value={form.rating}
                onChange={handleChange}
                className="mt-1 block w-32 rounded-md border-gray-200 p-2"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} ★
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                placeholder="Tell us about your experience"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#E7FE29] py-2 px-4 rounded font-bold"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Recent Feedbacks */}
      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Recent Feedback</h3>
          <button onClick={clearFeedbacks} className="text-sm text-red-600">
            Clear All
          </button>
        </div>
        {feedbacks.length === 0 ? (
          <p className="text-gray-500">No feedback yet.</p>
        ) : (
          <div className="space-y-4">
            {feedbacks.map((fb, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-[#E7FE29]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">
                      {fb.name || "Anonymous"}
                    </div>
                    <div className="text-sm text-gray-500">{fb.email}</div>
                  </div>
                  <div className="text-sm text-gray-700">
                    {new Date(fb.date).toLocaleString()}
                  </div>
                </div>
                <div className="mt-2">
                  <div className="text-yellow-500 mb-2">
                    {Array.from({ length: fb.rating }).map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-700">{fb.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
