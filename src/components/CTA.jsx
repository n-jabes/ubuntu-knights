import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta">
      <p>
        You have any feedback for us? <br className="sm:block hidden" /> Help us
        make meaningful impact to the African society!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
