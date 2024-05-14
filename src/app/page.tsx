"use client";

import Link from "next/link";
import { useState, useRef } from "react";
const users = [
  {
    abb: "SMR",
    exp: "Small Modular Reactors",
    desc: "Small modular reactors (SMRs) have a power capacity of up to 300 MW(e) per unit. Many SMRs, which can be factory-assembled and transported to a location for installation, are envisioned for markets such as industrial applications or remote areas with limited grid capacity.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=1&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "1",
  },
  {
    abb: "AFR",
    exp: "Accident Frequency Rate",
    desc: "Accident Frequency Rate (AFR), a standard way in calculating the number of RIDDOR accidents proportioned to the number of man hours worked. Calculated as follows: AFR = Number of reportable accidents x (100,000 / Total number of hours worked for all employees).",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=2&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "2",
  },
  {
    abb: "",
    exp: "Asite",
    desc: "Laing O'Rourke's (LOR) chosen Business-to-Business (B2B) technology partner, providing LOR with the software to manage processes throughout our business: collaboration, tendering and contract management. The tool promotes more efficient interaction and better communication between companies, enabling access to current, accurate and consistent data and providing decision-makers with better visibility and control.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=3&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "3",
  },
  {
    abb: "BIM",
    exp: "Building Information Modelling",
    desc: "Industry acronym that stands for 'Building Information Modelling.' The construction industry has, for years used computer aided design to show people what a project will look like. Advances in digital technology means that we can now ask computer models to layer detailed information around cost, programme, specifications, carbon and lifecycle information onto the more conventional, digital illustration of a project. Because computer compatibility is improving, the BIM model can pull information provided by Laing O'Rourke, the client, consultants and sub-contractors into one place. A project now has the ability, through BIM to make assumptions and changes, the consequences of which are played out on screen. It means that we can engineer a project from an earlier stage, providing better cost certainty before we get to site. The clearer visual representation helps us to explain a project to clients, end users or members of the public much more easily which in turn helps with quicker decision making and broader understanding.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=4&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "4",
  },
  {
    abb: "BU",
    exp: "Business Unit",
    desc: "Business Unit",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=5&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "5",
  },
  {
    abb: "BUL",
    exp: "Business Unit Leader",
    desc: "Business Unit Leader",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=6&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "6",
  },
  {
    abb: "",
    exp: "Career Toolkits",
    desc: "To support career discussions, career toolkits have been created to help staff search out opportunities and navigate the next steps of their career within the business. They are a guide to help staff within the function to understand the pre-requisite skills, knowledge and behaviours of the roles within the organisation. With this in mind, it will allow them to think about the skill gaps they may have in their current role, as well as future roles on their career path.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=7&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "7",
  },
  {
    abb: "CHT",
    exp: "Crown House Technologies",
    desc: "Crown House Technologies; Laing O'Rourke's Mechanical and Electrical Engineering Business",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=8&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "8",
  },
  {
    abb: "CIPS",
    exp: "Chartered Institute of Purchasing & Supply",
    desc: "Chartered Institute of Purchasing & Supply",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=9&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "9",
  },
  {
    abb: "CPCS",
    exp: "Construction Plant Competence Scheme",
    desc: "Construction Plant Competence Scheme - a card scheme to prove the skills of plant operators. It is based on a combination of professional competence and health and safety awareness - two essential qualities for operating plant.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=10&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "10",
  },
  {
    abb: "CSCS",
    exp: "Construction Skills Certification Scheme",
    desc: "Construction Skills Certification Scheme – set up to help the industry improve quality and reduce accidents. Those who have undertaken the scheme are presented with a CSCS card – recognising their qualifications and competence – allowing them to gain access and work on the site",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=11&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "11",
  },
  {
    abb: "DfMA",
    exp: "Design for Manufacture & Assembly",
    desc: "Laing O'Rourke acronym that stands for 'Design for Manufacture & Assembly' an approach or ethos that we believe will fundamentally challenge and change the construction industry. Our DfMA approach is founded on the understanding that we must challenge and change conventional approaches within our industry, delivering projects in a more efficient, predictable, smarter, and safer way and providing affordable outcomes. To do this we have to work with our clients at an earlier design stage, bringing our engineering expertise to provide solutions that deliver a project faster and to a quality previously not expected within the industry. Conventional approaches depend upon on-site construction. A DfMA ethos challenges that approach and suggests that we can design and manufacture major elements of a project in a more controlled environment, off-site e.g. at EIP or CHt Wolverhampton. These manufactured components are then assembled on-site.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=12&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "12",
  },
  {
    abb: "DIFR",
    exp: "Disabling Injury Frequency Rate",
    desc: "Disabling Injury Frequency Rate (DIFR), a standard way in calculating the number of disabling injury's proportioned to the number of hours worked. A disabling injury is classed as a lost time accident (LTA), Calculated as follows: DIFR = Number of LTA's x (100,000 / Total number of hours worked for all employees).",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=13&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "13",
  },
  {
    abb: "EIP",
    exp: "Explore Industrial Park",
    desc: "Laing O'Rourke acronym that stands for Explore Industrial Park; Laing O'Rourke's manufacturing facility based in Steetley, Nottinghamshire. EIP, together with Bison and Crown House Technology's off-site facility make up our manufacturing capability, central to our DfMA ambitions",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=14&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "14",
  },
  {
    abb: "EngEx",
    exp: "Engineering Excellence Group",
    desc: "Engineering Excellence Group",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=15&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "15",
  },
  {
    abb: "",
    exp: "Engineering Enterprise",
    desc: "Laing O'Rourke wants to move away from being known as a 'main contractor' – a company that is brought in to deliver, largely, already determined designs to company known globally for its excellence in engineering; an engineering enterprise. An engineering enterprise is involved in projects at a much earlier stage, influencing design decisions with innovative engineering ideas. This vision means that we work with world class partners in key industry sectors. We make sure that we are sitting at the “top table” with strategically important clients whilst managing our risk and making profit. Becoming an engineering enterprise is part of our 2020 Vision.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=16&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "16",
  },
  {
    abb: "",
    exp: "Excellence Plus",
    desc: "The Laing O'Rourke behavioural framework",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=17&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "17",
  },
  {
    abb: "",
    exp: "Expanded",
    desc: "Our Piling Demolition and structures business Unit",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=18&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "18",
  },
  {
    abb: "GDP",
    exp: "Graduate Development Programme",
    desc: "Graduate Development Programme",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=19&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "19",
  },
  {
    abb: "",
    exp: "Gift Register",
    desc: "We ensure all gifts and hospitality are within acceptable limits and never offer or accept anything that could be perceived as a bribe or an attempt to inappropriately influence a business decision. All gifts and hospitality must be registered on the Gifts, Hospitality and Conflicts of Interest register – also known at the 'Gift Register'",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=20&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "20",
  },
  {
    abb: "",
    exp: "iGATE",
    desc: "The company intranet site. News, views, videos, People, Support; Keeping you in touch with everything you need to know to get the most out of Laing O'Rourke.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=21&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "21",
  },
  {
    abb: "iGMS",
    exp: "Integrated Group Management System",
    desc: "Integrated Group Management System The place for all procedures, technical information, guidance, templates, checklists and learning documentation and e-learning to support projects on 'how we go to work.' An online resource to make our information more accessible and our organisation more efficient.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=22&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "22",
  },
  {
    abb: "",
    exp: "Infor",
    desc: "Infor Expenses is our Group-wide expenses system for all staff to submit an expenses claim",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=23&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "23",
  },
  {
    abb: "",
    exp: "Infoworks",
    desc: "Infoworks is title under which Laing O'Rourke publishes it stakeholder editorial content. Originally produced as a quarterly business review and update for employees, its outlook is now equally industry-focused and targets external, as well as internal, stakeholders as a brand building tool supporting work-winning. Offering insight into Laing O'Rourke's global engineering enterprise, it also offers thought-leadership pieces from in-house and wider industry experts. Contributors range from project teams, to clients, to leading journalists",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=24&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "24",
  },
  {
    abb: "",
    exp: "Insite",
    desc: "The insite team deliver our cost planning capability, providing early cost advice to clients and helping the business develop and maintain key strategic relationships",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=25&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "25",
  },
  {
    abb: "",
    exp: "iTrent",
    desc: "System for booking annual leave and viewing payslips",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=26&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "26",
  },
  {
    abb: "",
    exp: "Launchpad",
    desc: "Accessed on the left hand side of the iGATE home page, this provides links to all the business systems.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=27&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "27",
  },
  {
    abb: "RICS",
    exp: "Royal Institute of Chartered Surveyors",
    desc: "Royal Institute of Chartered Surveyors",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=28&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "28",
  },
  {
    abb: "RIDDOR",
    exp: "Reporting of Injuries, Diseases and Dangerous Occurrences",
    desc: "Reporting of Injuries, Diseases and Dangerous Occurrences to the Health and Safety Executive (HSE).",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=29&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "29",
  },
  {
    abb: "",
    exp: "Select",
    desc: "Our Plant Hire Business Unit",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=30&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "30",
  },
  {
    abb: "",
    exp: "SuccessFactors",
    desc: "The HR System which holds all personal and employment information about employees, it is also where you set your annual goals, performance appraisals are completed, and is used for Talent Management, Succession Planning, Learning and Development",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=31&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "31",
  },
  {
    abb: "",
    exp: "TIME",
    desc: "The TIMEsheet system where employees record work type against budget codes",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=32&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "32",
  },
  {
    abb: "",
    exp: "Vetter",
    desc: "Vetter UK is the specialist stone contractor within the Laing O'Rourke Group and one of the leading companies within the UK stone industry",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=33&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "33",
  },
  {
    abb: "",
    exp: "Yammer",
    desc: "The company social networking site",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=34&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "34",
  },
  {
    abb: "Test2",
    exp: "Test",
    desc: "Test",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=35&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "35",
  },
];

export default function Home() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [showList, setShowList] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredItems = users.filter(
      (user) =>
        user.abb.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.exp.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // if there is no search term, hide the list
    // if (searchTerm === "") {
    //   setShowList(false);
    // } else {
    //   setShowList(true);
    // }
    setFilteredUsers(filteredItems);
  };
  return (
    <>
      {/* <nav className="lor-grey flex items-center justify-between flex-wrap p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img ref={imageRef} className="fill-current h-8  mr-2" src={"/lor.png"} alt="lor" />
        </div>
        <div className="block">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            onClick={() => setShowNav(!showNav)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow ">
          <div className={(showNav ? "block " : "hidden ") + "text-sm "}>
            <a href="#responsive-header" className="mt-4  text-gray-200 hover:text-white mr-4">
              LOR Learn
            </a>
            <a
              href="#responsive-header"
              className="block mt-4  text-gray-200 hover:text-white mr-4"
            >
              iGMS
            </a>
          </div>
        </div>
      </nav> */}
      <main className="white-bg flex min-h-screen flex-col lor-border-red p-[30px]">
        {/* <img
          ref={imageRef}
          className="acrolistTitle w-7/12 md:w-4/12 m-20 mb-0"
          src={"/acrolist.svg"}
          alt="acrolist"
        /> */}
        <div className="flex flex-row mb-4">
          <input
            className="w-9/12 md:w-5/12 h-12 p-4 rounded-l sb-grey"
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Search for acronyms or jargon..."
          />
          <button className="w-3/12 md:w-24 h-12 p-2 rounded-r lor-yellow font-semibold inline-block align-middle text-[18px]">
            Search
          </button>
        </div>
        <div className="mb-10 text-[15px]">
          Add your own Jargon{" "}
          <a
            href="https://laingorourke-my.sharepoint.com/:l:/p/rclaridge/FMZ22bOgMxZLoaXSDBItALYBQtqO_EW2vHrobPXDcQzlQw"
            target="_blank"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mb-10"
          >
            here
          </a>{" "}
          (tool upated weekly).
        </div>
        <ul className={(showList ? "block " : "hidden ") + "w-12/12 md:w-5/5"}>
          {filteredUsers.map((user) => (
            <li key={user.id} className="box-content  p-4 mb-3 rounded li-blue relative">
              <div className="strong text-[20px]">{user.abb}</div>
              <div className="mt-2 text-[20px]">{user.exp}</div>
              <div className="mt-2 font-normal text-[15px]">{user.desc}</div>
              <div className="mt-2 font-normal">
                <a href={user.link} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute right-[15px] top-[15px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </a>
              </div>
            </li>
          ))}
          <li className="box-content  p-4 mt-5 rounded li-red  ">
            <div className="strong">Can't find what you're looking for?</div>

            <div className="mt-2">
              <Link
                className="link"
                href="https://web.yammer.com/main/org/laingorourke.com.au/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiI2MjgzODQzOTkzNiJ9/all"
                target="_blank"
              >
                Ask on Yammer here
              </Link>
              . When you find out,&nbsp;
              <Link
                className="link"
                href="https://laingorourke-my.sharepoint.com/:l:/p/rclaridge/FMZ22bOgMxZLoaXSDBItALYBQtqO_EW2vHrobPXDcQzlQw"
                target="_blank"
              >
                please add it here
              </Link>
              &nbsp;so that it may appear in this tool for others to benefit from!
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}
