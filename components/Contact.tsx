
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thank you ${formData.name}, your message has been sent successfully. We will contact you soon.`);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Have questions about the program or sponsorship opportunities? We're here to help. Reach out to us via the form or our direct contacts.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 bg-green-100 text-green-700 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Office Location</p>
                  <p className="text-lg font-bold text-gray-900">KSMC Headquarters, Kaduna</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 bg-orange-100 text-orange-600 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Phone / WhatsApp</p>
                  <p className="text-lg font-bold text-gray-900">0809 585 9463</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Support</p>
                  <p className="text-lg font-bold text-gray-900">info@ksmc-digital.com.ng</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all outline-none"
                  placeholder="080 0000 0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white font-bold py-4 rounded-xl hover:bg-green-800 transition-all shadow-md flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
