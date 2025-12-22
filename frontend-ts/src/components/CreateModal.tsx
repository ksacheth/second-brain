import { Button } from "./Button.tsx";
import { Cross } from "./CrossIcon.tsx";
import Input from "./Input.tsx";

export function CreateModal({ open, onClose }: {open: boolean, onClose: () => void}) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-50 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                    <Cross />
                </div>
              </div>
              <div>
                <Input  placeholder={"Title"}/>
                <Input placeholder={"Link"} />
              </div>
              <div className="flex justify-center">
                <Button variant="primary" text="Submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

