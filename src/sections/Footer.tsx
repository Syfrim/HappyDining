import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Happy Dining Seafood</h3>
            <p className="text-red-100">
              Bringing authentic Chinese cuisine to your table since 2020.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-red-100">
              <li>Monday - Friday: 11:00 AM - 11:00 PM</li>
              <li>Saturday - Sunday: 11:00 AM - 11:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <ul className="space-y-2 text-red-100">
            <li 
                className="cursor-pointer text-white hover:text-blue-400 hover:underline transition-colors duration-300"
                onClick={() => {
                  window.open("https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRhAMgYIAhBFGDkyBwgDEAAYgAQyBwgEEAAYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxNDQ5ajBqNKgCALACAA&um=1&ie=UTF-8&fb=1&gl=sg&sa=X&geocode=Ka06iyRXGdoxMWdiMOJMgzEv&daddr=50+Temple+St,+Singapore+058595", "_blank");
                }}
            >50 Temple St, Singapore 058595<br /> Singapore, Singapore</li>
              
              <li>Phone: (+65) 6222 3705</li>
              <li>Email: info@happydining.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-red-700 mt-8 pt-8 text-center text-red-100">
          <p>&copy; 2025 Happy Dining Seafood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;