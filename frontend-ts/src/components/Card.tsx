import type { ReactElement } from "react";
import { Share } from "../icons/Share";

interface CardInterface {
  title: string;
  timestamp?: string;
  tags?: string[];
  link: string;
  icon?: ReactElement;
  type: "twitter" | "youtube";
}

export function Card(props: CardInterface) {
  return (
    <div>
      <div className="bg-white rounded-md shadow-md border-gray-200 p-4 max-w-72 border">
        <div className="flex justify-between ">
          <div className="flex items-center text-md">
            <div className="pr-2 text-gray-500">
              <Share />
            </div>
            Project Ideas
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={props.link} target="_blank">
                <Share />
              </a>
            </div>
            <div className=" text-gray-500">
              <Share />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {props.type === "youtube" && (
            <iframe
              className="w-full"
              src={props.link.replace("watch", "embed").replace("?v=" ,"/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {props.type == "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={props.link.replace("x", "twitter")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
