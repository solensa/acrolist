"use client";

import { useState, useRef } from "react";
const users = [
  {
    abb: "A&F",
    exp: "Architecture & Facades",
    desc: "A discipline within the Technical function who&apos;s focus is the technical aspects of the architecture, internal fit out, and building envelope elements of a project.",
    id: 1,
  },
  { abb: "AAFR", exp: "All accident frequency ratio", desc: "", id: 2 },
  {
    abb: "Accruals",
    exp: "",
    desc: "Liabilities to pay for goods or services that have been received or supplied but are not yet paid for or invoiced. The costs have been incurred but not yet paid for and are not recorded in the job cost ledger i.e. do not appear as a cost transaction in job cost ledgers. There are two types of Accruals: 1. Manual Accrual, is a cost incurred where a GRN/delivery docket has not been processed into the system. Subcontract Accruals are a type of manual accruals. This is when work is performed by Subcontractors and not processed via a PPC or RCTI in COINS 2. COINS system accruals (GRN&apos;s) – show on some job cost reports and reflect GRN&apos;s/delivery received and processed in COINS but not yet invoiced For Subcontractors, the accrual is the calculated difference between the reported S/C liability and the gross certified.",
    id: 3,
  },
  { abb: "SME", exp: "Small Medium Enterprise", desc: "", id: 4 },
  { abb: "LOR", exp: "Laing O'Rourke", desc: "A construction company.", id: 5 },
  {
    abb: "DfMA",
    exp: "Design for Manufacture and Assembly ",
    desc: "A way of designing and constructing a quality building more quickly, efficiently and sustainably. Using a DfMA approach means that elements of a building are created in manufacturing environment rather than on site, and to more standard designs and specifications.",
    id: 6,
  },
  { abb: "CAT", exp: "", desc: "A small furry animal that believes it rules the world.", id: 7 },
  {
    abb: "DOG",
    exp: "",
    desc: "A small / medium sized waggy animal that is always happy to see you.",
    id: 8,
  },
  { abb: "Acrolist", exp: "", desc: "A tool to help you navigate acronyms.", id: 9 },
  { abb: "zsdnfvjkdfb", exp: "ojsdnfvjdfb", desc: "When you sleep on your keyboard.", id: 10 },
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
      <nav className="lor-grey flex items-center justify-between flex-wrap p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img ref={imageRef} className="fill-current h-8  mr-2" src={"/lor.png"} alt="lor" />
          {/* <span className="font-semibold text-xl tracking-tight">LOR Learn</span> */}
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
      </nav>
      <main className="white-bg flex min-h-screen flex-col items-center  md:p-24">
        <img
          ref={imageRef}
          className="acrolistTitle m-20 mb-0"
          src={"/acrolist.svg"}
          alt="acrolist"
        />
        <input
          className="w-11/12 md:w-3/5 h-12 p-4 rounded-lg m-6 sb-grey"
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Search for acronym or jargon..."
        />
        <ul className={(showList ? "block " : "hidden ") + "w-11/12 md:w-3/5"}>
          {filteredUsers.map((user) => (
            <li key={user.id} className="box-content  p-4 mt-2 rounded-lg li-blue  ">
              <div className="strong">{user.abb}</div>
              <div className="italics mt-2">{user.exp}</div>
              <div className="mt-2">{user.desc}</div>
            </li>
          ))}
          <li className="box-content  p-4 mt-5 rounded-lg li-red  ">
            <div className="strong">Can&apos;t find what you&apos;re looking for?</div>

            <div className="mt-2">
              Ask on Yammer here. When you find out, please add it here (need to add a button here)
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}
