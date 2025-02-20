import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-900 py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <p className="text-slate-400 text-lg">
            We're here to help! Reach out to us for any inquiries or support.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Address */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all">
            <div className="text-blue-400 mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Office</h3>
            <p className="text-slate-400">
              123 Cyber Security Lane<br />
              San Francisco, CA 94107<br />
              United States
            </p>
          </div>

          {/* Phone */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all">
            <div className="text-blue-400 mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Phone</h3>
            <p className="text-slate-400">
              +1 (555) 123-4567<br />
              Mon - Fri, 9am - 5pm PST
            </p>
          </div>

          {/* Email */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all">
            <div className="text-blue-400 mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Email</h3>
            <p className="text-slate-400">
              support@cyberdefense.com<br />
              sales@cyberdefense.com
            </p>
          </div>

          {/* Hours */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all">
            <div className="text-blue-400 mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
            <p className="text-slate-400">
              Mon - Fri: 9am - 5pm PST<br />
              Sat - Sun: Closed
            </p>
          </div>
        </div>

        {/* Map and Contact Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.3898476846816!3d37.77492977975919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807f5e0a3f9f%3A0x1b3b3b3b3b3b3b3b!2s123%20Cyber%20Security%20Ln%2C%20San%20Francisco%2C%20CA%2094107%2C%20USA!5e0!3m2!1sen!2sus!4v1633020000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  rows={4}
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;