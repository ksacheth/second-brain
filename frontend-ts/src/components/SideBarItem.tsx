import type { ReactElement } from "react";

export function SideBarItem({text, icon} : {
    text: string;
    icon: ReactElement;
}) {
     return <div className="flex items-center gap-2 mt-4 hover:bg-gray-200 rounded p-4 max-w-48 cursor-pointer transition-all">
        {icon} {text} 
     </div>
}