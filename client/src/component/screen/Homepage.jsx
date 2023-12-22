import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import Cards from '../Cards';
import DiscussionForum from '../DiscussionForum';
import FinancialEducation from '../FinancialEducation';
import InvestmentPlanner from '../InvestmentPlanner';

const Homepage = () => {
  return (
    <div>
      <Hero title="FinCom" subtitle="Empowering Financial Inclusion" cta="Get Started" />
      <Cards />
      <DiscussionForum />
      <div style={{ display: 'flex', flexWrap: 'wrap' }} className='calculator-background'>
        <div className="calculator-content">
          <h2>Financial Planning Made Easy</h2>
          <p>Explore our investment planner to secure your financial future.</p>
          <Link to="/all-calculators">
            <button>More Calculators</button>
          </Link>
        </div>
        <InvestmentPlanner />

        <div className="grid-background" style={{ position: 'absolute', zIndex: '0', top: '-50%' }}>
          <img src="/src/assets/grid-background.svg" alt="" />
        </div>
      </div>
      <FinancialEducation />

      {/* Subscribe to Newsletter CTA */}
      <section className="cta">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest financial insights and news. Subscribe now!</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
