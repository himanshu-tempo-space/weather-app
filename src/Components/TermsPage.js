// components/TermsPage.js
import React from 'react';
import Navigation from './Navigation';
import '../App.css';

function TermsPage() {
  return (
    <>
      <Navigation />
      <div id="terms-container">
        <h1>Terms and Conditions</h1>
        <div className="content">
          {/* Terms and conditions details */}
        </div>
      </div>
    </>
  );
}

export default TermsPage;
