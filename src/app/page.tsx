"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
var users = [
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
    desc: "AFR is a standard metric in health and safety management, used to measure the number of accidents per 100,000 working hours. This is in line with the Health and Safety Executive (HSE) guidelines and commonly referenced in Construction (Design and Management) Regulations 2015 (CDM 2015).",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=2&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "2",
  },
  {
    abb: "Asite",
    exp: "Asite",
    desc: "Laing O'Rourke's (LOR) chosen Business-to-Business (B2B) technology partner, providing LOR with the software to manage processes throughout our business: collaboration, tendering and contract management. The tool promotes more efficient interaction and better communication between companies, enabling access to current, accurate and consistent data and providing decision-makers with better visibility and control.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=3&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "3",
  },
  {
    abb: "BIM",
    exp: "Building Information Management (BIM)",
    desc: "Industry acronym that stands for 'Building Information Modelling.' The construction industry has, for years used computer aided design to show people what a project will look like. Advances in digital technology means that we can now ask computer models to layer detailed information around cost, programme, specifications, carbon and lifecycle information onto the more conventional, digital illustration of a project. Because computer compatibility is improving, the BIM model can pull information provided by Laing O'Rourke, the client, consultants and sub-contractors into one place. A project now has the ability, through BIM to make assumptions and changes, the consequences of which are played out on screen. It means that we can engineer a project from an earlier stage, providing better cost certainty before we get to site. The clearer visual representation helps us to explain a project to clients, end users or members of the public much more easily which in turn helps with quicker decision making and broader understanding.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=4&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "4",
  },
  {
    abb: "BU",
    exp: "Business Unit",
    desc: "A Business Unit (BU) within Laing O'Rourke refers to a specific operational division responsible for delivering a portfolio of projects. The term aligns with organisational structures in the UK construction industry, where distinct BUs manage various sectors or regions in accordance with corporate governance frameworks.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=5&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "5",
  },
  {
    abb: "BUL",
    exp: "Business Unit Leader",
    desc: "The Business Unit Leader (BUL) is responsible for overseeing the strategic direction and operational performance of a specific Business Unit. In UK construction, this role is pivotal in ensuring project delivery aligns with regulatory requirements, health and safety standards, and quality assurance measures as outlined by the Construction (Design and Management) Regulations (CDM).",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=6&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "6",
  },
  {
    abb: "Career Toolkits",
    exp: "Career Toolkits",
    desc: "To support career discussions, career toolkits have been created to help staff search out opportunities and navigate the next steps of their career within the business. They are a guide to help staff within the function to understand the pre-requisite skills, knowledge and behaviours of the roles within the organisation. With this in mind, it will allow them to think about the skill gaps they may have in their current role, as well as future roles on their career path.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=7&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "7",
  },
  {
    abb: "CHT",
    exp: "Crown House Technologies",
    desc: "Crown House Technologies; Laing O'Rourke's Mechanical and Electrical Engineering Business CHT is a 'Specialist Trading Business Group' (STBG) within the Laing O'Rourke Group ",
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
    desc: "CPCS is a UK certification scheme for plant operators, ensuring they meet health, safety, and environmental standards. The scheme is endorsed by the Construction Industry Training Board (CITB) and is often required for operating construction machinery on-site.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=10&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "10",
  },
  {
    abb: "CSCS",
    exp: "Construction Skills Certification Scheme",
    desc: "CSCS is a mandatory certification scheme that verifies a worker’s qualifications and training to perform specific roles on construction sites. It is required for compliance with UK health and safety legislation, particularly the CDM Regulations.",
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
    abb: "Engineering Enterprise",
    exp: "Engineering Enterprise",
    desc: "Laing O'Rourke wants to move away from being known as a 'main contractor' – a company that is brought in to deliver, largely, already determined designs to company known globally for its excellence in engineering; an engineering enterprise. An engineering enterprise is involved in projects at a much earlier stage, influencing design decisions with innovative engineering ideas. This vision means that we work with world class partners in key industry sectors. We make sure that we are sitting at the “top table” with strategically important clients whilst managing our risk and making profit. Becoming an engineering enterprise is part of our 2020 Vision.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=16&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "16",
  },
  {
    abb: "Excellence Plus",
    exp: "Excellence Plus",
    desc: "The Laing O'Rourke behavioural framework",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=17&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "17",
  },
  {
    abb: "Expanded",
    exp: "Expanded",
    desc: "Our Piling Demolition and structures business Unit Expanded is a 'Specialist Trading Business Group' (STBG) within the Laing O'Rourke Group ",
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
    abb: "Gift Register",
    exp: "Gift Register",
    desc: "We ensure all gifts and hospitality are within acceptable limits and never offer or accept anything that could be perceived as a bribe or an attempt to inappropriately influence a business decision. All gifts and hospitality must be registered on the Gifts, Hospitality and Conflicts of Interest register – also known at the 'Gift Register'",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=20&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "20",
  },
  {
    abb: "iGATE",
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
    abb: "Infor",
    exp: "Infor",
    desc: "Infor Expenses is our Group-wide expenses system for all staff to submit an expenses claim",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=23&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "23",
  },
  {
    abb: "Infoworks",
    exp: "Infoworks",
    desc: "Infoworks is title under which Laing O'Rourke publishes it stakeholder editorial content. Originally produced as a quarterly business review and update for employees, its outlook is now equally industry-focused and targets external, as well as internal, stakeholders as a brand building tool supporting work-winning. Offering insight into Laing O'Rourke's global engineering enterprise, it also offers thought-leadership pieces from in-house and wider industry experts. Contributors range from project teams, to clients, to leading journalists",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=24&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "24",
  },
  {
    abb: "Insite",
    exp: "Insite",
    desc: "The insite team deliver our cost planning capability, providing early cost advice to clients and helping the business develop and maintain key strategic relationships",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=25&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "25",
  },
  {
    abb: "iTrent",
    exp: "iTrent",
    desc: "System for booking annual leave and viewing payslips",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=26&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "26",
  },
  {
    abb: "Launchpad",
    exp: "Launchpad",
    desc: "Accessed on the left hand side of the iGATE home page, this provides links to all the business systems.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=27&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "27",
  },
  {
    abb: "RICS",
    exp: "Royal Institute of Chartered Surveyors",
    desc: "RICS is a global professional body promoting and enforcing the highest standards in the valuation, management, and development of land, real estate, construction, and infrastructure. Their standards are crucial for maintaining professional ethics in the construction industry.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=28&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "28",
  },
  {
    abb: "RIDDOR",
    exp: "Reporting of Injuries, Diseases and Dangerous Occurrences",
    desc: 'RIDDOR (Reporting of Injuries, Diseases and Dangerous Occurrences Regulations): Improvement: "RIDDOR requires employers, site managers, and other responsible parties to report certain workplace incidents to the Health and Safety Executive (HSE). These include work-related accidents, diseases, and near-misses, ensuring compliance with health and safety legislation.',
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=29&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "29",
  },
  {
    abb: "Select",
    exp: "Select",
    desc: "Our Plant Hire Business Unit Select is a 'Specialist Trading Business Group' (STBG) within the Laing O'Rourke Group ",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=30&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "30",
  },
  {
    abb: "SuccessFactors",
    exp: "SuccessFactors",
    desc: "The HR System which holds all personal and employment information about employees, it is also where you set your annual goals, performance appraisals are completed, and is used for Talent Management, Succession Planning, Learning and Development",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=31&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "31",
  },
  {
    abb: "TIME",
    exp: "TIME",
    desc: "The TIMEsheet system where employees record work type against budget codes",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=32&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "32",
  },
  {
    abb: "Vetter",
    exp: "Vetter",
    desc: "Vetter UK is a the specialist stone contractor and 'Specialist Trading Business Group' (STBG) within the Laing O'Rourke Group and one of the leading companies within the UK stone industry",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=33&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "33",
  },
  {
    abb: "Yammer",
    exp: "Yammer",
    desc: "The company social networking site. Yammer is a social networking tool developed by Microsoft for internal business communication. It allows employees to communicate and collaborate across departments, share updates, ask questions, and build communities within an organization. It has been a standalone app for many years, serving as a company-wide forum to connect people. Viva Engage is part of Microsoft’s larger Viva suite, which focuses on employee experience, including learning, insights, and well-being. Viva Engage brings Yammer's capabilities into Microsoft Teams, offering the same core social networking and community-building features that Yammer does.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=34&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "34",
  },
  {
    abb: "STBG",
    exp: "Specialist Trading Business Group",
    desc: 'The STBG (Specialist Trading Business Group) comprises of Laing O\'Rourke subsidiary companies; Expanded, Expanded Piling, Select Plant Hire, Vetter (UK), Centre of Excellence for Modern Construction (CEMC) and Crown House Technologies who in addition to working as "one team" on internal jobs, also work independently externally.',
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=36&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "36",
  },
  {
    abb: "BSA",
    exp: "Building Safety Act 2022",
    desc: "This Act makes ground-breaking reforms to give residents and homeowners more rights, powers, and protections – so homes across the country are safer. It delivers far-reaching protections for qualifying leaseholders from the costs associated with remediating historical building safety defects, and an ambitious toolkit of measures that will allow those responsible for building safety defects to be held to account. It overhauls existing regulations, creating lasting change and makes clear how residential buildings should be constructed, maintained and made safe. The Act creates three new bodies to provide effective oversight of the new regime: the Building Safety Regulator, the National Regulator of Construction Products and the New Homes Ombudsman.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=37&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "37",
  },
  {
    abb: "BSR",
    exp: "Building Safety Regulator",
    desc: "BSR in England is part of HSE and was established under The Building Safety Act 2022 to: -regulate higher-risk buildings -raise safety standards of all buildings -help professionals in design, construction, and building control, to improve their competence",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=38&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "38",
  },
  {
    abb: "GDP",
    exp: "Global Data Platform",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=39&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "39",
  },
  {
    abb: "LMR",
    exp: "LOR Minimum Requirements",
    desc: "Technical data sheets with minimum standards (please add iGMS link)",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=40&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "40",
  },
  {
    abb: "ICE",
    exp: "Institution of Civil Engineers",
    desc: "Professional Institution to get Chartered with www.ice.org.uk",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=41&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "41",
  },
  {
    abb: "RAMS",
    exp: "Risk Assessment Method Statement",
    desc: "RAMS documents are used in the construction industry to outline the hazards and risks associated with a task, and the control measures to mitigate those risks. It is a legal requirement under the Management of Health and Safety at Work Regulations 1999.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=42&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "42",
  },
  {
    abb: "Contiguous pile wall",
    exp: "Contiguous pile wall",
    desc: "These are closely spaced pile walls which are defined in Groynes in coastal engineering (CIRIA C793), published by CIRIA in 2020 as ‘…cast-in-place concrete piles immediately adjacent to or touching each other. Sometimes used for plank piles.’ If there are gaps between the contiguous piles, these can be sealed with a substance that creates a watertight retaining wall. Contiguous pile walls are sometimes used for the construction of cellars or basements. This allows the piles to be installed and then used as a retaining wall during the excavation process. For more information, see pile foundations.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=44&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "44",
  },
  {
    abb: "FSR",
    exp: "Fatal & Severe Risks",
    desc: "Fatal and Severe Risk. A health and safety term for the assessment of potential fatal and severe risks and the investigation of near misses.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=48&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "48",
  },
  {
    abb: "TWC",
    exp: "Temporary Works Coordinator",
    desc: "The Temporary Works Coordinator (TWC) is a person appointed with overall responsibility for managing temporary works on a site ensuring that safety standards comply with CDM 2015 regulations and British Standard BS5975:2019, which provides guidelines for temporary works procedures. The TWC is appointed by the Principal Contractor (PC). A TWC can be appointed by another contractor to manage their own temporary works but they would ultimately be responsible to the PC’s TWC. The TWC can delegate certain day-to-day activities, such as site inspection to a nominated Temporary Works Supervisor (TWS). All TWC and TWS appointments are recorded and identified in a register maintained by the DI, eg in an organogram.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=49&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "49",
  },
  {
    abb: "TWS",
    exp: "Temporary Works Supervisor",
    desc: "TWS (Temporary Works Supervisor): The role of a Temporary Works Supervisor involves overseeing temporary works on a construction site to ensure they are planned, managed, and executed safely and in compliance with BS 5975, which provides procedural control for temporary works.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=50&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "50",
  },
  {
    abb: "EDB",
    exp: "Engineering Design Brief",
    desc: "EDB (Engineering Design Brief): The Engineering Design Brief outlines the scope, requirements, and key design objectives for engineering work. It is used to communicate design expectations clearly between stakeholders, ensuring adherence to relevant standards like the Eurocodes or British Standards.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=51&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "51",
  },
  {
    abb: "TWDB",
    exp: "Temporary Works Design Brief",
    desc: "TWDB (Temporary Works Design Brief): The Temporary Works Design Brief provides essential information required for the design of temporary works. It aligns with the recommendations in BS 5975, ensuring safe and structured design processes.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=52&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "52",
  },
  {
    abb: "RFP",
    exp: "Request for proposal",
    desc: "RFP (Request for Proposal): A Request for Proposal (RFP) is a formal document soliciting proposals from contractors, suppliers, or service providers for a construction project. It is part of the procurement process and ensures compliance with regulations such as the Public Contracts Regulations 2015.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=53&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "53",
  },
  {
    abb: "HSF",
    exp: "Health and Safety File",
    desc: "HSF (Health and Safety File): The Health and Safety File is a document required by the Construction (Design and Management) Regulations 2015 (CDM 2015), which records important health and safety information needed for any future construction work or maintenance on a building.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=54&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "54",
  },
  {
    abb: "BLB",
    exp: "Building Log Book",
    desc: " Also refer to BUG - Building User Guide",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=55&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "55",
  },
  {
    abb: "BUG",
    exp: "Building User Guide",
    desc: " Also refer to BLB - Building Log Book",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=56&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "56",
  },
  {
    abb: "AFC",
    exp: "Approved For Construction",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=57&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "57",
  },
  {
    abb: "AFP",
    exp: "Application For Payment",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=58&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "58",
  },
  {
    abb: "AFR",
    exp: "Accident Frequency Rate",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=59&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "59",
  },
  {
    abb: "AGS",
    exp: "The Association of Geotechnical and Geo-environmental Specialists",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=60&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "60",
  },
  {
    abb: "AIM",
    exp: "Asset Information Model",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=61&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "61",
  },
  {
    abb: "AIP",
    exp: "Approval in Principle",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=62&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "62",
  },
  {
    abb: "AIR",
    exp: "Asset Information Requirements",
    desc: "BIM/ISO19650",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=63&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "63",
  },
  {
    abb: "ALARP",
    exp: "As Low As Reasonably Practicable",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=64&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "64",
  },
  {
    abb: "AMOSS",
    exp: "Automatic Mast Operator Safety Systems",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=65&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "65",
  },
  {
    abb: "AMP",
    exp: "Assumed Meta Population",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=66&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "66",
  },
  {
    abb: "AMS",
    exp: "Asset Management System",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=67&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "67",
  },
  {
    abb: "Anthropocene",
    exp: "Anthropocene",
    desc: "The Anthropocene Epoch is an unofficial unit of geologic time, used to describe the most recent period in Earth's history when human activity started to have a significant impact on the planet's climate and ecosystems",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=68&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "68",
  },
  {
    abb: "AP",
    exp: "Accountable Person",
    desc: "Accountable Person under the Building Safety Act, also refer to PAP - Principal Accountable Person ",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=69&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "69",
  },
  {
    abb: "APA",
    exp: "Asset Protection Agreement",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=70&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "70",
  },
  {
    abb: "LOIN",
    exp: "Level Of Information Need",
    desc: "The LOR Design Management team completed and managed an exercise to identify information requirements for each System/Element/Function typically constructed by LOR based on NBS Uniclass Tables. Minimum information requirements can then be rapidly assembled based on a scope of work and used to populate Task Information Delivery Plans (TIDPs). TIDPs can then be uploaded into Asite to generate placeholders for information and used to track progress.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=71&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "71",
  },
  {
    abb: "PAP",
    exp: "Principal Accountable Person",
    desc: "Principal Accountable Person under the Building Safety Act, also refer to AP - Accountable Person ",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=72&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "72",
  },
  {
    abb: "CDM 2015",
    exp: "Construction (Design and Management) Regulations 2015",
    desc: "The CDM 2015 regulations are structured in five parts. Part 1 - Introduction, including interpretation (regulations 1 to 3) Part 2 - Client duties (regulation 5 determines who the PD and Principal Contractor (PC) are / when they should be appointed (regulation 4 to 7)) Part 3 - Health and Safety duties and roles (regulations 8 to 15) Part 4 - General requirements for all construction sites (regulations 16 to 35) Part 5 - General (regulations 36 to 39) Schedules 1 to 5",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=75&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "75",
  },
  {
    abb: "TIDP",
    exp: "Task Information Delivery Plan",
    desc: "Also refer to MIDP Ref IS019650 Part 2",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=76&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "76",
  },
  {
    abb: "MIDP",
    exp: "Master Information Delivery Plan",
    desc: "Also refer to TIDP Ref IS019650 Part 2",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=77&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "77",
  },
  {
    abb: "BCF",
    exp: "BIM Collaboration File",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=78&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "78",
  },
  {
    abb: "BCO",
    exp: "Building Control Office",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=79&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "79",
  },
  {
    abb: "BFLO",
    exp: "BFLO Information",
    desc: "The Building (Higher-Risk Buildings Procedures) (England) Regulations 2023: Handover of information on completion etc 38.—(1) The client for HRB work, a stage of HRB work or work to existing HRB must give— (a)the BFLO information; and (b)the specified golden thread information, to the relevant person no later than the date the work is completed, or where regulation 45 (partial completion certificates) applies no later than the date the part of the building is to be occupied.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=81&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "81",
  },
  {
    abb: "BRD",
    exp: "Business Requirements Document",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=82&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "82",
  },
  {
    abb: "BSA Stages",
    exp: "",
    desc: "BSA Stages 'Pre-Planning … GW 1 Pre-Construction …. GW 2 Construction …. GW 3 Occupancy'",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=83&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "83",
  },
  {
    abb: "BSCF",
    exp: "Building Safety Competence Foundation",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=84&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "84",
  },
  {
    abb: "BTI",
    exp: "Building Trustworthiness Indicator",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=85&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "85",
  },
  {
    abb: "CABE",
    exp: "Chartered Association of Building Engineers",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=86&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "86",
  },
  {
    abb: "CAPEX ",
    exp: "Capital Expenditure ",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=87&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "87",
  },
  {
    abb: "CDE",
    exp: "Common Data Environment",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=88&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "88",
  },
  {
    abb: "CLC",
    exp: "Construction Leadership Council",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=89&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "89",
  },
  {
    abb: "CIRT",
    exp: "Construction Industry Rating Tool",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=90&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "90",
  },
  {
    abb: "DLUHC",
    exp: "Department for Levelling Up, Housing and Communities",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=91&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "91",
  },
  {
    abb: "DOA",
    exp: "Project Delegation of Authority Tool",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=92&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "92",
  },
  {
    abb: "FEF",
    exp: "Fire and Emergency File",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=93&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "93",
  },
  {
    abb: "ITPG",
    exp: "IT Portfolio Group",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=94&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "94",
  },
  {
    abb: "LABC",
    exp: "Local Area Building Control",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=95&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "95",
  },
  {
    abb: "MEP",
    exp: "Mechanical and Electrical Plant",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=96&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "96",
  },
  {
    abb: "MFA",
    exp: "Multi Factor Authentication",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=97&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "97",
  },
  {
    abb: "NHOS",
    exp: "New Homes Ombudsman Service",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=98&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "98",
  },
  {
    abb: "PCSA",
    exp: "Preconstruction Service Agreement",
    desc: 'Pre‐Construction Services Agreement, the purpose of which is to develop the offer for Main contract (generally applicable to design & build projects where the design and methodology are complex and not sufficiently mature; also known as the first stage of the two‐stage tender for the Main contract). See separate definition for "Main contract".',
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=99&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "99",
  },
  {
    abb: "PSUM",
    exp: "Project Startup and Mobilisation",
    desc: "Project Start-Up & Mobilisation (PSUM) focuses on the critical start-up phase of the project, ensuring that we have a successful and detailed handover from the bid team. PSUM provides rigour and governance on all our projects as it supports iGMS by ensuring that our two mobilisation Gateways – 5 (Start) and 6 (Construct) – are adhered to, and that we are always delivering great projects and the best outcome for our Clients.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=100&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "100",
  },
  {
    abb: "SLA",
    exp: "Service Level Agreement ",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=101&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "101",
  },
  {
    abb: "UAT",
    exp: "User Acceptance Testing ",
    desc: 'User acceptance testing (UAT) consists of a process of verifying that a solution works for the user. It is not system testing (ensuring software does not crash and meets documented requirements) but rather ensures that the solution will work for the user (i.e. tests that the user accepts the solution); software vendors often refer to this as "Beta testing". This testing should be undertaken by the intended end user, or a subject-matter expert (SME), preferably the owner or client of the solution under test, and provide a summary of the findings for confirmation to proceed after trial or review. In software development, UAT as one of the final stages of a project often occurs before a client or customer accepts the new system. Users of the system perform tests in line with what would occur in real-life scenarios.',
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=102&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "102",
  },
  {
    abb: "DCQ",
    exp: "Designer Competence Questionnaire",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=103&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "103",
  },
  {
    abb: "SCCQ",
    exp: "Subcontractor Competence Questionnaire",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=104&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "104",
  },
  {
    abb: "GEC",
    exp: "Global Executive Committee",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=105&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "105",
  },
  {
    abb: "ELN",
    exp: "European Leadership Network",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=106&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "106",
  },
  {
    abb: "EEC",
    exp: "European Executive Committee",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=107&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "107",
  },
  {
    abb: "DLP",
    exp: "Defects Liability Period",
    desc: "The defects liability period (now called the 'rectification period' in Joint Contracts Tribunal (JCT) contracts) is a period specified in construction contracts that begins on certification of practical completion and typically lasts six to twelve months. During this period, the client reports any defects that arise to the contract administrator who decides whether they are defects (i.e. works that are not in accordance with the contract), or whether they are maintenance issues. If the contract administrator considers they are defects, then they may issue instructions to the contractor to make them good within a reasonable time. Note, it is actually the contractor's responsibility to identify and rectify defects, not the client's, so if the client does bring defects to the contractor's notice, they should make clear that this is not a comprehensive list of all defects Practical completion is the point at which construction work is certified as practically complete under the building contract. As well as signifying the beginning of the defects liability period, this has the effect of: Releasing half of the retention (an amount retained from payments due to the contractor to ensure they complete the works). Ending the contractor's liability for liquidated damages. Allowing the client to occupy the site.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=108&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "108",
  },
  {
    abb: "DI",
    exp: "Designated Individual (DI)",
    desc: "The Designated Individual (DI) is a ‘senior person’ appointed to manage the organisation’s procedures for temporary works",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=109&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "109",
  },
  {
    abb: "EPD",
    exp: "Environmental Product Declaration",
    desc: "https://bregroup.com/services/standards/environmental/en-15804-environmental-product-declaration-epd: An EPD measures the environmental impact of a product. It is generated based on data obtained through life cycle assessment (LCA). An LCA is performed using a peer-reviewed Product Category Rules document (PCR) in line with the European standard EN 15804, ISO 14025, and other related international standards. EPDs have many uses within an organisation. They can be used as marketing material and for the improvement of product manufacture or process efficiency. They can feed into whole building assessment schemes and other comparative tools. They can also inform building information modelling (BIM) computer-aided design (CAD) software to make comparisons and assess design options that improve a building’s environmental performance. https://www.iso.org/standard/72463.html ISO 22057:2022 Sustainability in buildings and civil engineering works — Data templates for the use of environmental product declarations (EPDs) for construction products in building information modelling (BIM)",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=110&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "110",
  },
  {
    abb: "TORPS",
    exp: "Tender Out-Return-Place Order-Start on Site",
    desc: "https://laingorourke.sharepoint.com/sites/igms-eu/projectlifecycle/Pages/Procurement_TORPS.aspx Applicable to all projects only and not applicable to fixed facilities e.g. CEMC. ​​​purpose To create the project procurement programme (TORPS) which is used to manage the package tender process and ensure timely completion of package procurement activity in alignment with the overall project construction programme. TORPS is an acronym of the key stages in the procurement of packages (T=Tender Information, O=Out to Tender, R=Return of Tenders, P=Place Order, S=Start on Site). These are the mandatory milestone events used in the procurement programme but can be supplemented where appropriate due to the scale and complexity of the Project and agreed by the relevant Procurement Leader. The TORPS Schedule is created in Excel with relevant reporting dashboards in PowerBi and will be used to manage both project and category procurement of sub-contract work packages and materials in an efficient and consistent manner.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=111&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "111",
  },
  {
    abb: "VUCA",
    exp: "Volatility, Uncertainty, Complexity and Ambiguity",
    desc: "https://en.wikipedia.org/wiki/VUCA#:~:text=VUCA%20is%20an%20acronym%20based,of%20general%20conditions%20and%20situations. VUCA is an acronym based on Warren Bennis's and Burt Nanus's leadership theories. It describes or reflects on the volatility, uncertainty, complexity, and ambiguity of general conditions and situations. The VUCA framework provides a lens through which organizations can interpret their challenges and opportunities. It emphasizes strategic foresight, insight, and the behaviour of entities within organizations. Furthermore, it highlights systemic and behavioural failures often associated with organisational missteps. V = Volatility: Characterizes the rapid and unpredictable nature of change. U = Uncertainty: Denotes the unpredictability of events and issues. C = Complexity: Describes the intertwined forces and issues, making cause-and-effect relationships unclear. A = Ambiguity: Points to the unclear realities and potential misunderstandings stemming from mixed messages. These elements articulate how organizations perceive their current and potential challenges. They establish the parameters for planning and policy-making. Interacting in various ways, they can either complicate decision-making or enhance the ability to strategize, plan, and progress. Essentially, VUCA lays the groundwork for effective management and leadership. ",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=112&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "112",
  },
  {
    abb: "AP",
    exp: "Appointed Person",
    desc: "In lifting operations, an appointed person is the person responsible for the execution and safety of a lifting operation",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=113&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "113",
  },
  {
    abb: "COTS",
    exp: "Commercial Off The Shelf supplies",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=114&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "114",
  },
  {
    abb: "ASFP",
    exp: "Association for specialist fire protection",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=115&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "115",
  },
  {
    abb: "HPC",
    exp: "Hinkley Point C",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=116&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "116",
  },
  {
    abb: "GIP",
    exp: "Global Integration Platform",
    desc: "",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=117&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "117",
  },
  {
    abb: "PDI",
    exp: "Personal Development Instance",
    desc: "IT acronym referring to ServiceNow. A PDI is essentially a sandbox in which you can play with features without affecting the live version.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=118&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "118",
  },
  {
    abb: "IFE",
    exp: "Institution of Fire Engineers",
    desc: "The Institution of Fire Engineers (IFE) is a global professional membership body for those in the fire sector that seek to increase their knowledge, professional recognition and understanding of fire through a global discourse. With over 100 years of history, the IFE is instrumental in shaping a future world that is safer from fire.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=119&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "119",
  },
  {
    abb: "PQQ",
    exp: "Pre-Qualification Questionnaire",
    desc: "Part of the Clients and Markets workflow.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=120&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "120",
  },
  {
    abb: "AWE",
    exp: "Atomic Weapons Establishment",
    desc: "The Atomic Weapons Establishment is a United Kingdom Ministry of Defence research facility responsible for the design, manufacture and support of warheads for the UK's nuclear weapons. ",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=121&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "121",
  },
  {
    abb: "SQEP",
    exp: "Suitably Qualified and Experienced Person",
    desc: 'The term "Suitably Qualified and Experienced Person" (SQEP) refers to an individual who possesses the appropriate qualifications, skills, knowledge, and experience necessary to perform a specific task or role effectively, safely, and competently. The concept of SQEP is often used in regulated industries such as nuclear energy, healthcare, construction, and engineering, where safety and quality are critical.',
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=122&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "122",
  },
  {
    abb: "RAID",
    exp: "Risks, Assumptions, Issues, and Dependencies",
    desc: "A RAID log is a project management tool used to document and track key project elements: Risks, Assumptions, Issues, and Dependencies. It is commonly used in the UK construction industry to ensure that potential obstacles and project dependencies are identified and managed throughout the project lifecycle. The log is typically reviewed and updated regularly to monitor the status of risks and issues, as well as validate assumptions and dependencies. RAID logs support compliance with project governance standards, such as PRINCE2 or APM.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=123&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "123",
  },
  {
    abb: "ASFP",
    exp: "Association of Specialist Fire Protection",
    desc: "The Association of Specialist Fire Protection (ASFP) is a UK-based trade association that focuses on the development and advocacy of best practices for passive fire protection in the construction industry. Established in 1975, the ASFP works closely with regulatory bodies, government, and industry professionals to promote fire safety standards. It provides technical guidance, training, and certification schemes for fire protection products and installations. The ASFP’s work aligns with UK legislation, including the Building Regulations and fire safety standards such as BS 9999 and BS 476.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=124&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "124",
  },
  {
    abb: "PFKG",
    exp: "Passive Fire Knowledge Group",
    desc: "The Passive Fire Knowledge Group (PFKG) is a UK-based industry group focused on improving understanding and compliance with passive fire protection regulations. Passive fire protection refers to fire safety measures incorporated into the fabric of a building to contain fires or slow their spread, including fire doors, fire-resistant walls, and compartmentation. PFKG provides education, resources, and best practices to ensure the correct specification, installation, and maintenance of these systems. The group collaborates with stakeholders across the construction sector to promote fire safety and regulatory compliance. More information can be found at https://www.pfkg.co.uk.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=125&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "125",
  },
  {
    abb: "ICC",
    exp: "Industry Competence Council",
    desc: "Industry Competence Council (ICC) The Industry Competence Council (ICC) was established as part of the UK Government’s response to the recommendations in the Hackitt Review, following the Grenfell Tower fire. It plays a crucial role in improving and overseeing competence across the construction industry, particularly for those involved in high-risk buildings. The ICC brings together various industry bodies and stakeholders to ensure that training, assessment, and professional standards are robust and consistent across all sectors. Its aim is to develop a framework that ensures individuals working on building safety are properly qualified and competent. More information can be found on the Construction Leadership Council's website: https://www.constructionleadershipcouncil.co.uk",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=126&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "126",
  },
  {
    abb: "CQIC",
    exp: "Construction Quality Improvement Collaborative (CQIC)",
    desc: "The Construction Quality Improvement Collaborative (CQIC) is a joint initiative between the public and construction sectors in Scotland, aimed at enhancing construction quality. It emerged from the Construction Recovery Plan during the pandemic and is now a key part of the Scottish Construction Accord. Despite recent improvements, there is a recognized need for a sustainable quality culture in the industry. CQIC promotes good practices to improve performance, which is essential for meeting net zero goals, building standards compliance, safety, productivity, profitability, and the industry's reputation. It leverages knowledge from practice, research, innovation, data, and digital technology, and aligns with other initiatives under the Scottish Construction Accord, such as procurement, skills, and workforce development. The initiative focuses on peer support, linking with existing groups and creating new engagement platforms. It also aims to support the development of related Scottish Government policies and guidance.",
    link: "https://laingorourke-my.sharepoint.com/personal/rclaridge_laingorourke_com/_layouts/15/listform.aspx?PageType=4&ListId=b3d976c6%2D33a0%2D4b16%2Da1a5%2Dd20c122d00b6&ID=127&ContentTypeID=0x0100455A33F275909B4B8460B952813148D200819CC74740FD1B419A8F6240F0CF8D9E",
    id: "127",
  },
].sort((a, b) => a.abb.localeCompare(b.abb));

export default function Home() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const imageRef = useRef<HTMLImageElement | null>(null);
  // const [showNav, setShowNav] = useState(false);
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
