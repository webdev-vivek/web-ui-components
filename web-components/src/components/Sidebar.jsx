import { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  FolderKanban,
  Settings,
  Mail,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", icon: Home },
    { title: "Profile", icon: User },
    { title: "Projects", icon: FolderKanban },
    { title: "Messages", icon: Mail },
    { title: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Header */}
      <header className="flex items-center justify-between bg-slate-900 px-4 py-4 text-white lg:hidden">
        <h1 className="text-xl font-bold">Webdev</h1>

        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-72 flex-col bg-slate-900 text-white shadow-xl transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between border-b border-slate-700 p-5">
          <h2 className="text-2xl font-bold">Webdev</h2>

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 flex-1 px-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <li key={index}>
                  <a
                    href="#"
                    className={`flex items-center gap-4 rounded-lg px-4 py-3 transition
                      ${
                        index === 0
                          ? "bg-blue-600"
                          : "hover:bg-slate-800"
                      }`}
                  >
                    <Icon size={20} />
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-700 p-5">
          <button className="w-full rounded-lg bg-blue-600 py-2 font-medium transition hover:bg-blue-700">
            Logout
          </button>
        </div>
      </aside>

      
      {/* Main Content */}
      <main className="p-6 lg:ml-72">
        <h1 className="text-3xl font-bold"> Focus on Responsive Sidebar</h1>
        <p className="mt-4 text-gray-600">
          Responsibe Sidebar 
        </p>
      </main>
    </>
  );
};

export default Sidebar;
