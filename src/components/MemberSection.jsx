import React from "react";
import "../assets/styles/MemberSection.css";

// set into array and layout per picture
const MemberSection = () => {
  const members = [
    {
      name: "Aiah",
      imageUrl: "src/assets/images/bini_aiah.png",
      layout: "layout-1",
    },
    {
      name: "Colet",
      imageUrl: "src/assets/images/bini_colet.png",
      layout: "layout-2",
    },
    {
      name: "Gwen",
      imageUrl: "src/assets/images/bini_gwen.png",
      layout: "layout-1",
    },
    {
      name: "Jhoanna",
      imageUrl: "src/assets/images/bini_juwana.png",
      layout: "layout-2",
    },
    {
      name: "Maloi",
      imageUrl: "src/assets/images/bini_maloi.png",
      layout: "layout-1",
    },
    {
      name: "Mikah",
      imageUrl: "src/assets/images/bini_mikha.png",
      layout: "layout-2",
    },
    {
      name: "Sheena",
      imageUrl: "src/assets/images/bini_sheena.png",
      layout: "layout-1",
    },
    {
      name: "Stacey",
      imageUrl: "src/assets/images/bini_staku.png",
      layout: "layout-2",
    },
  ];

  return (
    <section className="member-section">
      <div className="section-container">
        <h2 className="member-title">Members</h2>
        <div className="members-grid">
          {members.map((member, index) => (
            <div key={member.name} className={`member-card ${member.layout}`}>
              <img
                src={member.imageUrl}
                alt={member.name}
                className="member-image"
              />
              <h3 className="member-name">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSection;
