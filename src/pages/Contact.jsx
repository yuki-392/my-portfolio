import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

        {/* 連絡フォーム */}
        <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form action="https://formspree.io/f/xldbdrgv" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* ソーシャルメディアリンク */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yuki-392"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-github text-3xl"></i>
            </a>
            <a
              href="https://twitter.com/your_twitter_handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/your_linkedin_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            {/* Phone */}
            <a
              href="tel:+819033018715"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fas fa-phone-alt text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
