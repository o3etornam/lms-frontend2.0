import clsx from "clsx";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isToday,
  startOfMonth,
  addMonths,
  subMonths,
} from "date-fns";
import { useMemo, useState } from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EventCalendar = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);

  const eventsByDate = useMemo(() => {
    return events.reduce((acc, event) => {
      const dateKey = format(event.date, "yyyy-MM-dd");
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(event);
      return acc;
    }, {});
  }, [events]);

  return (
    <div className="p-4 border-2 border-purple-500 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={handlePreviousMonth}
          className="text-gray-500 font-semibold"
        >
          &lt; Previous
        </button>
        <h2 className="text-center text-2xl text-gray-500 font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="text-gray-500 font-semibold"
        >
          Next &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {WEEKDAYS.map((day) => {
          return (
            <div key={day} className="font-bold text-center text-gray-600">
              {day}
            </div>
          );
        })}
        {Array.from({ length: startingDayIndex }).map((_, index) => {
          return (
            <div
              key={`empty-${index}`}
              className="border-2 rounded-md border-purple-500 p-2 text-center"
            />
          );
        })}
        {daysInMonth.map((day, index) => {
          const dateKey = format(day, "yyyy-MM-dd");
          const todaysEvents = eventsByDate[dateKey] || [];
          return (
            <div
              key={index}
              className={clsx(
                "border-2 rounded-md border-purple-500 p-2 text-center",
                {
                  "bg-green-500": isToday(day),
                  "text-gray-900": isToday(day),
                }
              )}
            >
              {format(day, "d")}
              {todaysEvents.map((event) => {
                return (
                  <div
                    key={event.title}
                    className="bg-indigo-600 rounded-md text-gray-900 mt-1"
                  >
                    {event.title}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
