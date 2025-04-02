import React, { useState } from 'react';

const BulkOrder: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-bold text-center mb-4">
        Looking to Contact Us or place a Bulk Order? Write to us & we'll get back to you soonly!
      </h2>
      <div className="text-center mb-6">
        <p><strong>Head Office</strong></p>
        <p>No. 18 Dr. T.V. Road, Chetpet, Chennai 600031, Tamil Nadu, India</p>
        <p>Email: info@shreemithai.com</p>
        <p>Customer Care: +91 44 28282828 (10am to 6pm)</p>
        <p>For Enquiry / Feedback, write to us.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded-md h-24"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default BulkOrder;
