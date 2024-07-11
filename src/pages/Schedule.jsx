import EventCalendar from "../components/EventCalendar";
import Sidebar, { SidebarItem } from "../components/SideBar";
import { addDays, subDays } from "date-fns";
import {
  CalendarDays,
  UserCircle,
  LayoutDashboard,
  Settings,
  LifeBuoy,
} from "lucide-react";
import Todo from "../components/Todo";

const events = [
  { date: subDays(new Date(), 6), title: "Quiz" },
  { date: subDays(new Date(), 1), title: "Trip" },
  { date: addDays(new Date(), 3), title: "Test" },
  { date: addDays(new Date(), -10), title: "Quiz" },
];

const tasks = [
  "Elective Mathematics Quiz on the 3 July",
  "Trip to Akosombo on the 8 July",
  "Core Mathematics Test on 12 July ",
];

function Schedule() {
  return (
    <div className="flex gap-6">
      <Sidebar>
        <SidebarItem icon={<UserCircle size={20} />} text="Profile" />
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          to={"/"}
          c
        />
        <SidebarItem
          icon={<CalendarDays size={20} />}
          text="Calendar"
          active
          to={"/schedule"}
        />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        <SidebarItem
          icon={<Settings size={20} />}
          text="Settings"
          to={"/settings"}
        />
      </Sidebar>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold  text-gray-600 my-4">
          Monthly Agenda
        </h1>
        <EventCalendar className="flex-1" events={events} />
      </div>
      <Todo name="Event Details" tasks={tasks} color="gray" />
    </div>
  );
}

export default Schedule;
