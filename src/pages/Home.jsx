import "../App.css";
import Hero from "../components/Hero";
import Sidebar from "../components/SideBar";
import { SidebarItem } from "../components/SideBar";
import {
  CalendarDays,
  UserCircle,
  LayoutDashboard,
  Settings,
  LifeBuoy,
} from "lucide-react";
import Todo from "../components/Todo";

const reminders = [
  "Wake Up",
  "Show people",
  "Have my cake and eat it",
  "Maintain composure always",
  "100% Steeze",
];

const annocuement = [
  "Freelance assignment due in 2hrs",
  "School Trip on the 21st",
  "Tracy weds Elijah",
];

function HomePage() {
  return (
    <>
      <div className="flex justify-between">
        <Sidebar>
          <SidebarItem icon={<UserCircle size={20} />} text="Profile" />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
            to={"/"}
          />
          <SidebarItem
            icon={<CalendarDays size={20} />}
            text="Calendar"
            to={"/schedule"}
          />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
            to={"/settings"}
          />
        </Sidebar>
        <Hero />
        <div className="flex flex-col">
          <Todo name="Reminders" color="gray" tasks={reminders} />
          <Todo name="Annoucement" color="gray" tasks={annocuement} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
