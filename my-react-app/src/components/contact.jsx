export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">Get in Touch</h2>
          <p className="text-lg mb-8 text-gray-300 max-w-xl mx-auto">
            Have a project in mind or just want to connect? Reach out via WhatsApp!
          </p>
          <a
            href="https://wa.me/+254716870275"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  }