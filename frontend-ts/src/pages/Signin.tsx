import { useRef } from "react";
import { Button } from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(
      import.meta.env.VITE_BACKEND_URL + "/api/v1/signin",
      {
        username,
        password,
      }
    );
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);

    navigate("/dashboard");
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl">
        <Input referance={usernameRef} placeholder="Username" />
        <Input referance={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button
            variant="primary"
            text="Signin"
            fullwidth={true}
            loading={false}
            onClick={signin}
          />
        </div>
      </div>
    </div>
  );
}
