import CommandProvider from "./CommandProvider";
import { BellDot, MailPlus, LifeBuoy } from "lucide-react";

export default function () {
  return (
    <header className="w-full">
      <nav className="flex justify-between">
        <div className="w-4/5">
          <CommandProvider />
        </div>
        <ul className="w-1/5 flex justify-around">
          <li>
            <MailPlus size={20} />
          </li>
          <li>
            <BellDot size={20} />
          </li>

          <li>
            <LifeBuoy size={20} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
