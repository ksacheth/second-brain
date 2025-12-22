import { Button } from "../components/Button";
import Input from "../components/Input";

export function Signin() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button variant="primary" text="Signin" fullwidth={true} loading={false}/>
        </div>
      </div>
    </div>
  );
}
