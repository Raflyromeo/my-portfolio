import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setIsSubmitting(false);
      e.currentTarget.reset();
    }, 1000);
  };

  return (
    <div className="bg-[rgba(18,17,33,0.9)] pt-16 md:pt-32 pb-20">
      <p className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Contact<span className="text-[#357BC9]">Me</span>
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="p-3 bg-gray-800 text-gray-300 rounded-lg w-full
                     transition-all duration-300 hover:bg-gray-700 focus:bg-gray-700
                     focus:outline-none focus:ring-2 focus:ring-[#357BC9]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="p-3 bg-gray-800 text-gray-300 rounded-lg w-full
                     transition-all duration-300 hover:bg-gray-700 focus:bg-gray-700
                     focus:outline-none focus:ring-2 focus:ring-[#357BC9]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            className="p-3 bg-gray-800 text-gray-300 rounded-lg w-full
                     transition-all duration-300 hover:bg-gray-700 focus:bg-gray-700
                     focus:outline-none focus:ring-2 focus:ring-[#357BC9]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            required
            className="p-3 bg-gray-800 text-gray-300 rounded-lg w-full
                     transition-all duration-300 hover:bg-gray-700 focus:bg-gray-700
                     focus:outline-none focus:ring-2 focus:ring-[#357BC9]"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full mt-4 p-3 bg-gray-800 text-gray-300 rounded-lg
                   transition-all duration-300 hover:bg-gray-700 focus:bg-gray-700
                   focus:outline-none focus:ring-2 focus:ring-[#357BC9]
                   min-h-[8rem] resize-y"
        />
        <div className="flex flex-col items-center gap-4 mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-[#357BC9] text-white font-semibold rounded-lg
                     hover:bg-[#2861a0] transition duration-300
                     shadow-lg shadow-[#357BC9]/30
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {formStatus === 'success' && (
            <p className="text-green-400">Message sent successfully!</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
