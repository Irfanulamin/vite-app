import { useState } from "react";
import { prodhanAgent, seniorAgent, shirshoAgent } from "./data/data";
import { UserTable } from "./components/UserTable";
import { Button } from "./components/ui/button";

function App() {
  const [activeSection, setActiveSection] = useState<number>(0);

  const sections = [
    {
      title: "সিনিয়র এজেন্ট",
      description:
        "নিচে দেওয়া মাস্টার এজেন্টের সাথে হোয়াটসএপ নাম্বারে লেনদেন করুন এক্ষেত্রে কোম্পানি সকল প্রকার দায়ভার নিবে।",
    },
    {
      title: "প্রধান এজেন্ট",
      description:
        "এটা আমাদের একমাত্র অফিসিয়াল এজেন্ট লিস্ট। এর বাইরে আমাদের কোন এজেন্ট নেই।",
    },
    {
      title: "শীর্ষ ও উপ-নিয়ন্ত্রক",
      description:
        "এটা আমাদের একমাত্র অফিসিয়াল এজেন্ট লিস্ট। এর বাইরে আমাদের কোন এজেন্ট নেই।",
    },
  ];

  const tableSections = [seniorAgent, prodhanAgent, shirshoAgent];

  return (
    <>
      <div className="w-full bg-black pt-28 pb-24">
        <div className="max-w-3xl mx-auto text-center mb-8 bg-bla">
          <h1 className="text-3xl md:text-4xl font-semibold">
            {sections[activeSection].title}
          </h1>
          <p className="text-lg md:text-xl mt-4 text-[#FDDD04] leading-relaxed">
            {sections[activeSection].description}
          </p>
        </div>
      </div>

      <section className="flex flex-wrap justify-center gap-3 p-8">
        {sections.map((sec, index) => (
          <Button
            key={sec.title}
            className={`${
              activeSection === index ? "border-b-4 border-[#FDDD04]" : ""
            } rounded-none`}
            onClick={() => setActiveSection(index)}
          >
            {sec.title}
          </Button>
        ))}
      </section>

      <UserTable allUsers={tableSections[activeSection]} />
    </>
  );
}

export default App;
