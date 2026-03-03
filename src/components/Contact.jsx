import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_7gjmlej",
        "template_sbmks8n",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        "CjZlf-r8r98B6JhhV"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Check console.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="portfolio-container">
        <h2>Get In Touch</h2>

        <div className="contact-content">
          {/* LEFT SIDE */}
          <div className="contact-info">
            <p className="contact-intro">
              Let’s build something together. Have a project in mind or just
              want to say hi? Feel free to reach out.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail size={20} color="#a78bfa" />
                <div>
                  <span className="contact-label">Email</span>
                  <a
                    href="mailto:jyothimokara123@gmail.com"
                    className="contact-value"
                  >
                    jyothimokara123@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={20} color="#a78bfa" />
                <div>
                  <span className="contact-label">Phone</span>
                  <p className="contact-value">+91 82478 93335</p>
                </div>
              </div>

              <div className="contact-item">
                <MapPin size={20} color="#a78bfa" />
                <div>
                  <span className="contact-label">Location</span>
                  <p className="contact-value">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                disabled={loading}
              >
                {loading ? "Sending..." : (
                  <>
                    <Mail size={18} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}