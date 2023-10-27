import React from 'react';
import { LiaTruckMovingSolid } from "react-icons/lia";
import { MdOutlineManageAccounts } from "react-icons/md";
import { SiCodenewbie } from "react-icons/si";

const homeConfig = {
  greeting: (
    <h1 className="heading">
      Hola! I'm <strong className="main-name">Oscar Perales</strong>
    </h1>
  ),
  titles: [
    "Rookie Data Scientist",
    "Founder & Entrepreneur",
    "Startup Alumnus",
    "First Generation Mexican"
  ],
  about: {
    start: "Over the past six years, my journey has been marked by the co-founding of a business that achieved successful acquisition. These experiences have enhanced my strategic insight and expertise in data-driven decision-making, while my dedication to lifelong learning and supporting the data science community.",
    exit: "I am dedicated to ongoing growth, further enhancing my expertise in Python, various BI tools, and eagerly embracing any challenges that come my way!"
  },
  workTimeline: [
    {
      id: "work-2",
      title: "Data Scientist",
      company: "Freelance",
      description: "I am a freelance data scientist dedicated to continuous skill development, actively working on projects that further my expertise in the field.",
      date: "July 2023-present",
      icon: <SiCodenewbie />,
      tags: ["machine learning", "python", "freelancer", "AI research", "react projects", "github"]
    },
    {
      id: "work-1",
      title: "3PL Success Director",
      company: "CallBox",
      description: "Managing client relationships and overseeing the seamless operation of logistics solutions, with the added advantage of being part of the company that acquired us.",
      date: "January 2022-December 2022",
      icon: <MdOutlineManageAccounts />,
      tags: ["client success", "3PL leadership", "CRM", "logistics strategy expert", "last-mile delivery"]
    },
    {
      id: "work-0",
      title: "Co-Founder",
      company: "Gozova",
      description: "A transformative journey that spanned from the very inception of our company to the moment of acquisition. I undertook a diverse range of roles, forging a deep understanding of entrepreneurship, resilience, and the intricate workings of a thriving startup environment.",
      date: "June 2017-December 2021",
      icon: <LiaTruckMovingSolid />,
      tags: ["startup co-founder", "acquisition experience", "venture building", "leadership", "market disruption"]
    }
  ]
};

export default homeConfig;
