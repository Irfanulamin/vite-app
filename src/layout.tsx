import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "বোনাসের এর নিয়মাবলি", path: "/bonus-rule" },
    { name: "ওয়ালেট এজেন্ট এর নিয়মাবলি", path: "/" },
    { name: "প্রধান এজেন্ট এর নিয়মাবলি", path: "/" },
    { name: "কুইজ", path: "/" },
    { name: "ভিডিও", path: "/" },
  ];

  return (
    <>
      {/*NAVBAR */}
      <header className="bg-[#000000] text-[#FDDD04] w-full">
        <nav>
          <div className="flex justify-between items-center gap-4 px-4 py-4 lg:px-8">
            <div className="shrink-0">
              <img
                className="w-40 lg:w-64 object-contain"
                src="/logo.png"
                alt="Logo"
              />
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-white text-sm lg:text-base font-medium hover:text-[#FDDD04] transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 hover:bg-slate-700 rounded-lg transition-colors">
                  <Menu size={24} className="text-[#FDDD04]" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-black p-6">
                <div className="flex flex-col gap-6">
                  <div className="mb-4">
                    <img
                      className="w-32 object-contain"
                      src="/logo.png"
                      alt="Logo"
                    />
                  </div>
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className="text-white text-base font-medium hover:text-[#FDDD04] transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* ✅ MAIN CONTENT */}
      <main className="bg-[#343333] text-[#FDDD04] min-h-screen">
        <Outlet />
      </main>

      {/* ✅ FOOTER */}
      <footer className="bg-[#000000] text-base-content p-10 font-[inter]">
        <div className="md:flex justify-between">
          <aside className="flex-2">
            <img
              className="max-w-[40%]"
              src="./WhatsApp_Image_2025-10-17_at_7.58.24_PM-removebg-preview.png"
              alt=""
            />
            <h2 className="text-[#FDDD04] text-3xl font-bold">
              আমাদের সম্পর্কে
            </h2>
            <p className="text-[#FDDD04] mb-4">
              বাংলাদেশে Josh365-এর একমাত্র অনুমোদিত প্রতিনিধি হিসেবে আমরা
              আপনাদের জন্য নিরাপদ, দ্রুত এবং নির্ভরযোগ্য পরিষেবা প্রদানে
              অঙ্গীকারবদ্ধ।
            </p>
          </aside>

          <div className="flex flex-col md:flex-row gap-8">
            <nav>
              <h6 className="text-[#FDDD04] font-bold">নতুন একাউন্ট খুলুন</h6>
              <h6 className="text-[#FDDD04] font-bold mt-1">
                সাধারণ প্রশ্নোত্তর
              </h6>
            </nav>

            <nav>
              <h6 className="text-[#FDDD04] font-bold">মাস্টার এজেন্ট</h6>
              <h6 className="text-[#FDDD04] font-bold mt-1">
                এডমিন ও সাব-এডমিন
              </h6>
              <h6 className="text-[#FDDD04] font-bold mt-1">
                কাস্টমার সার্ভিস
              </h6>
              <h6 className="text-[#FDDD04] font-bold mt-1">সুপার এজেন্ট</h6>
            </nav>

            <nav>
              <h6 className="text-[#FDDD04] text-2xl font-semibold">
                support@josh365
              </h6>
            </nav>
          </div>
        </div>

        <div className="text-center text-white border-t border-gray-700 mt-8 pt-4">
          Copyright © {new Date().getFullYear()} - Josh365. All rights reserved.
        </div>
      </footer>
    </>
  );
}
