"use client";

import Link from "next/link";
import { useState, useRef } from "react";
const users = [
  {
    abb: "AFR",
    exp: "Accident Frequency Rate",
    desc: "Accident Frequency Rate (AFR), a standard way in calculating the number of RIDDOR accidents proportioned to the number of man hours worked. Calculated as follows: AFR = Number of reportable accidents x (100,000 / Total number of hours worked for all employees).     ",
    id: "1",
  },
  {
    abb: "",
    exp: "Asite",
    desc: "Laing O'Rourke's (LOR) chosen Business-to-Business (B2B) technology partner, providing LOR with the software to manage processes throughout our business: collaboration, tendering and contract management. The tool promotes more efficient interaction and better communication between companies, enabling access to current, accurate and consistent data and providing decision-makers with better visibility and control.     ",
    id: "2",
  },
  {
    abb: "BIM",
    exp: "Building Information Modelling",
    desc: "Industry acronym that stands for 'Building Information Modelling.' The construction industry has, for years used computer aided design to show people what a project will look like. Advances in digital technology means that we can now ask computer models to layer detailed information around cost, programme, specifications, carbon and lifecycle information onto the more conventional, digital illustration of a project. Because computer compatibility is improving, the BIM model can pull information provided by Laing O'Rourke, the client, consultants and sub-contractors into one place. A project now has the ability, through BIM to make assumptions and changes, the consequences of which are played out on screen. It means that we can engineer a project from an earlier stage, providing better cost certainty before we get to site. The clearer visual representation helps us to explain a project to clients, end users or members of the public much more easily which in turn helps with quicker decision making and broader understanding.     ",
    id: "3",
  },
  { abb: "BU", exp: "Business Unit ", desc: "", id: "4" },
  { abb: "BUL", exp: "Business Unit Leader ", desc: "", id: "5" },
  {
    abb: "",
    exp: "Career Toolkits",
    desc: "To support career discussions, career toolkits have been created to help staff search out opportunities and navigate the next steps of their career within the business. They are a guide to help staff within the function to understand the pre-requisite skills, knowledge and behaviours of the roles within the organisation. With this in mind, it will allow them to think about the skill gaps they may have in their current role, as well as future roles on their career path. ",
    id: "6",
  },
  {
    abb: "CHT",
    exp: "Crown House Technologies",
    desc: "Crown House Technologies; Laing O'Rourke's Mechanical and Electrical Engineering Business ",
    id: "7",
  },
  { abb: "CIPS", exp: "Chartered Institute of Purchasing & Supply ", desc: "", id: "8" },
  {
    abb: "CPCS",
    exp: "Construction Plant Competence Scheme",
    desc: "a card scheme to prove the skills of plant operators. It is based on a combination of professional competence and health and safety awareness - two essential qualities for operating plant.   ",
    id: "9",
  },
  {
    abb: "CSCS",
    exp: "Construction Skills Certification Scheme",
    desc: "set up to help the industry improve quality and reduce accidents. Those who have undertaken the scheme are presented with a CSCS card – recognising their qualifications and competence – allowing them to gain access and work on the site",
    id: "10",
  },
  {
    abb: "DfMA /  70/60/30",
    exp: "Design for Manufacture & Assembly",
    desc: "Laing O'Rourke acronym that stands for 'Design for Manufacture & Assembly' an approach or ethos that we believe will fundamentally challenge and change the construction industry. Our DfMA approach is founded on the understanding that we must challenge and change conventional approaches within our industry, delivering projects in a more efficient, predictable, smarter, and safer way and providing affordable outcomes. To do this we have to work with our clients at an earlier design stage, bringing our engineering expertise to provide solutions that deliver a project faster and to a quality previously not expected within the industry. Conventional approaches depend upon on-site construction. A DfMA ethos challenges that approach and suggests that we can design and manufacture major elements of a project in a more controlled environment, off-site e.g. at EIP or CHt Wolverhampton. These manufactured components are then assembled on-site.    ",
    id: "11",
  },
  {
    abb: "DIFR",
    exp: "Disabling Injury Frequency Rate",
    desc: "a standard way in calculating the number of disabling injury's proportioned to the number of hours worked. A disabling injury is classed as a lost time accident (LTA), Calculated as follows:  DIFR = Number of LTA's x (100,000 / Total number of hours worked for all employees). ",
    id: "12",
  },
  {
    abb: "EIP",
    exp: "Explore Industrial Park",
    desc: "Laing O'Rourke's manufacturing facility based in Steetley, Nottinghamshire. EIP, together with Bison and Crown House Technology's off-site facility make up our manufacturing capability, central to our DfMA ambitions ",
    id: "13",
  },
  { abb: "EngEx", exp: "Engineering Excellence Group ", desc: "", id: "14" },
  {
    abb: "",
    exp: "Engineering Enterprise",
    desc: "Laing O'Rourke wants to move away from being known as a 'main contractor' – a company that is brought in to deliver, largely, already determined designs to company known globally for its excellence in engineering; an engineering enterprise. An engineering enterprise is involved in projects at a much earlier stage, influencing design decisions with innovative engineering ideas. This vision means that we work with world class partners in key industry sectors. We make sure that we are sitting at the “top table” with strategically important clients whilst managing our risk and making profit. Becoming an engineering enterprise is part of our 2020 Vision.     ",
    id: "15",
  },
  {
    abb: "",
    exp: "Excellence Plus",
    desc: "The Laing O'Rourke behavioural framework ",
    id: "16",
  },
  {
    abb: "",
    exp: "Expanded",
    desc: "Our Piling Demolition and structures business Unit ",
    id: "17",
  },
  { abb: "GDP", exp: "Graduate Development Programme ", desc: "", id: "18" },
  {
    abb: "",
    exp: "Gift Register",
    desc: "We ensure all gifts and hospitality are within acceptable limits and never offer or accept anything that could be perceived as a bribe or an attempt to inappropriately influence a business decision.  All gifts and hospitality must be registered on the Gifts, Hospitality and Conflicts of Interest register – also known at the 'Gift Register' ",
    id: "19",
  },
  {
    abb: "",
    exp: "iGATE",
    desc: "The company intranet site. News, views, videos, People, Support; Keeping you in touch with everything you need to know to get the most out of Laing O'Rourke. ",
    id: "20",
  },
  {
    abb: "iGMS",
    exp: "Integrated Group Management System",
    desc: "The place for all procedures, technical information, guidance, templates, checklists and learning documentation and e-learning to support projects on 'how we go to work.'  An online resource to make our information more accessible and our organisation more efficient.",
    id: "21",
  },
  {
    abb: "",
    exp: "Infor",
    desc: "Infor Expenses is our Group-wide expenses system for all staff to submit an expenses claim ",
    id: "22",
  },
  {
    abb: "",
    exp: "Infoworks",
    desc: "Infoworks is title under which Laing O'Rourke publishes it stakeholder editorial content. Originally produced as a quarterly business review and update for employees, its outlook is now equally industry-focused and targets external, as well as internal, stakeholders as a brand building tool supporting work-winning. Offering insight into Laing O'Rourke's global engineering enterprise, it also offers thought-leadership pieces from in-house and wider industry experts. Contributors range from project teams, to clients, to leading journalists ",
    id: "23",
  },
  {
    abb: "",
    exp: "Insite",
    desc: "The insite team deliver our cost planning capability, providing early cost advice to clients and helping the business develop and maintain key strategic relationships ",
    id: "24",
  },
  {
    abb: "",
    exp: "iTrent",
    desc: "System for booking annual leave and viewing payslips ",
    id: "25",
  },
  {
    abb: "",
    exp: "Launchpad",
    desc: "Accessed on the left hand side of the iGATE home page, this provides links to all the business systems. ",
    id: "26",
  },
  { abb: "RICS", exp: "Royal Institute of Chartered Surveyors ", desc: "", id: "27" },
  {
    abb: "RIDDOR",
    exp: "Reporting of Injuries, Diseases and Dangerous Occurrences to the Health and Safety Executive (HSE).   ",
    desc: "",
    id: "28",
  },
  { abb: "", exp: "Select", desc: "Our Plant Hire Business Unit ", id: "29" },
  {
    abb: "",
    exp: "SuccessFactors",
    desc: "The HR System which holds all personal and employment information about employees, it is also where you set your annual goals, performance appraisals are completed, and is used for Talent Management, Succession Planning, Learning and Development ",
    id: "30",
  },
  {
    abb: "",
    exp: "TIME",
    desc: "The TIMEsheet system where employees record work type against budget codes ",
    id: "31",
  },
  {
    abb: "",
    exp: "Vetter",
    desc: "Vetter UK is the specialist stone contractor within the Laing O'Rourke Group and one of the leading companies within the UK stone industry ",
    id: "32",
  },
  { abb: "", exp: "Yammer", desc: "The company social networking site ", id: "33" },
];

export default function Home() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredItems = users.filter(
      (user) =>
        user.abb.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.exp.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // if there is no search term, hide the list
    if (searchTerm === "") {
      setShowList(false);
    } else {
      setShowList(true);
    }
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
        <div className="flex flex-row mb-12">
          <input
            className="w-9/12 md:w-5/12 h-12 p-4 rounded-l sb-grey"
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Search for acronyms or jargon..."
          />
          <button className="w-3/12 md:w-24 h-12 p-2 rounded-r lor-yellow strong inline-block align-middle">
            Search
          </button>
        </div>
        <ul className={(showList ? "block " : "hidden ") + "w-11/12 md:w-3/5"}>
          {filteredUsers.map((user) => (
            <li key={user.id} className="box-content  p-4 mb-3 rounded-lg li-blue  ">
              <div className="strong">{user.abb}</div>
              <div className="italics mt-2">{user.exp}</div>
              <div className="mt-2">{user.desc}</div>
            </li>
          ))}
          <li className="box-content  p-4 mt-5 rounded-lg li-red  ">
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
                href="https://laingorourke-my.sharepoint.com/:l:/p/rclaridge/FMZ22bOgMxZLoaXSDBItALYBQtqO_EW2vHrobPXDcQzlQw?e=TTbKeZ"
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
