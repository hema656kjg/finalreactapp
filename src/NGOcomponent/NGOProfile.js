import React, { useState } from 'react';

const NGOProfile = () => {
  const [showFocusAreas, setShowFocusAreas] = useState(false);

  const toggleFocusAreas = () => {
    setShowFocusAreas(!showFocusAreas);
  };

  return (
    <div className="ngo-profile">
      {/* Introduction */}
      <section className="intro">
        <h2>About Our NGO</h2>
        <p>
          Our NGO is dedicated to making a difference in the lives of underprivileged communities
          through education, healthcare, and empowerment programs. Our values of compassion,
          integrity, and community service drive every project we undertake.
        </p>
      </section>

      {/* Vision and Mission */}
      <section className="vision-mission">
        <h3>Vision</h3>
        <p>
          To create a world where every individual has access to basic rights, education, and 
          healthcare, ensuring a better future for all.
        </p>
        <h3>Mission</h3>
        <p>
          To empower marginalized communities by providing resources and support in education, 
          healthcare, and livelihood opportunities.
        </p>
      </section>

      {/* Impact Stories */}
      <section className="impact-stories">
        <h3>Impact Stories</h3>
        <p>
          "Thanks to this NGO’s education program, my children now have a future. We couldn’t afford 
          school before, but now they’re learning and thriving!" – Beneficiary
        </p>
        <p>
          "The healthcare camp organized in our village saved lives. They brought free medical 
          services where there were none before." – Local Community Leader
        </p>
      </section>

      {/* Focus Areas with Dropdown */}
      <section className="focus-areas">
        <h3>Our Focus Areas</h3>
        <button onClick={toggleFocusAreas}>
          {showFocusAreas ? 'Hide Focus Areas' : 'Show Focus Areas'}
        </button>
        {showFocusAreas && (
          <ul>
            <li>Education for all</li>
            <li>Health and wellness programs</li>
            <li>Women empowerment</li>
            <li>Sustainable livelihoods</li>
          </ul>
        )}
      </section>

      {/* Ongoing Projects */}
      <section className="projects">
        <h3>Ongoing Projects</h3>
        <ul>
          <li>
            <strong>Project Bright Future:</strong> Providing scholarships and after-school tutoring 
            for children in rural areas.
          </li>
          <li>
            <strong>Health for All:</strong> Organizing medical camps in underserved regions to 
            provide free checkups and medications.
          </li>
          <li>
            <strong>Empowering Women:</strong> Skills training programs that enable women to earn a 
            livelihood.
          </li>
        </ul>
      </section>

      {/* Volunteer and Partnership */}
      <section className="volunteer-partnership">
        <h3>Get Involved</h3>
        <p>
          You can make a difference by volunteering with us or becoming a partner. Together, we can 
          reach more people and create lasting change.
        </p>
        <button>Join Us</button>
      </section>

      {/* Donor Recognition */}
      <section className="donors">
        <h3>Our Supporters</h3>
        <p>
          We are grateful to our donors and partners who make our work possible. Your support brings 
          hope and opportunities to those in need.
        </p>
      </section>

      {/* Achievements and Awards */}
      <section className="achievements">
        <h3>Achievements and Awards</h3>
        <p>
          Over the past five years, we’ve provided education to over 10,000 children, organized 
          health camps for 15,000 families, and empowered 5,000 women with skills training. We 
          have been recognized with the National NGO Excellence Award.
        </p>
      </section>
    </div>
  );
};

export default NGOProfile;
