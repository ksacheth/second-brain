import { Logo } from "../icons/Logo";
import { Twitter } from "../icons/Twitter";
import { Youtube } from "../icons/Youtube";
import { SideBarItem } from "./SideBarItem";

export function SideBar(){
    return <div className="h-screen bg-white border-r w-76 fixed left-0 top-0 border-gray-200 pl-7">
        <div className="flex text-2xl  pt-10 items-center gap-3 ">
            <div className="text-purple-500">
                <Logo />
            </div>
            Brainly
        </div>
        <div className="pt-4">
            <SideBarItem icon={<Twitter/>} text="Twitter"/>
            <SideBarItem icon={<Youtube/>} text="Youtube"/>
        </div>
    </div>
}




