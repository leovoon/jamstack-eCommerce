import React from 'react';
import '../App.css';
const Footer = () => {
  return (
      <footer className="page-footer font-small bg-blue pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-1">
              <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
              <p>You can contact us on Instagram @cal.story</p>
            </div>
            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">Calstory Store</h5><p>Custom made  by <a href="https://www.instagram.com/cal.story/">Calstory</a></p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright
          <span> Calstory Store</span>
        </div>
      </footer>
  );
};
export default Footer