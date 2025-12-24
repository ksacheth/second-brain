import { useRef, useState } from "react";
import { Button } from "./Button.tsx";
import { Cross } from "./CrossIcon.tsx";
import Input from "./Input.tsx";
import axios from "axios";
import { useContent } from "../hooks/useContent.tsx";

const ContentType = {
  Youtube: "youtube",
  Twitter: "twitter",
} as const;

type ContentType = (typeof ContentType)[keyof typeof ContentType];

export function CreateModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      import.meta.env.VITE_BACKEND_URL + "/api/v1/content",
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    onClose();
  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-200/50 fixed top-0 left-0  flex justify-center">
          <div className="flex flex-col justify-center ">
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <Cross />
                </div>
              </div>
              <div>
                <Input referance={titleRef} placeholder={"Title"} />
                <Input referance={linkRef} placeholder={"Link"} />
              </div>
              <div>
                <h1>Type</h1>
                <div className="flex">
                  <Button
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Youtube);
                    }}
                  ></Button>
                  <Button
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Twitter);
                    }}
                  ></Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Button onClick={addContent} variant="primary" text="Submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
