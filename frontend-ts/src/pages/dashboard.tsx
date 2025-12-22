import { Button } from "../components/Button";
import "../App.css";
import { PlusIcon } from "../icons/Plus";
import { Share } from "../icons/Share";
import { Card } from "../components/Card";
import { CreateModal } from "../components/CreateModal";
import { useState } from "react";
import { SideBar } from "../components/Sidebar";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <SideBar />
      <div className="p-4 ml-76 min-h-screen bg-gray-300">
      <CreateModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />

      <div className="flex justify-end gap-4">
        <Button
          variant="primary"
          size="md"
          text="Primary Button"
          startIcon={<PlusIcon />}
          onClick={() => {
            setModalOpen(true);
          }}
        />
        <Button
          variant="secondary"
          size="md"
          text="Secondary Button"
          startIcon={<Share />}
        />
      </div>

      <div className="flex gap-4">
        <Card
          type="twitter"
          link="https://x.com/solana/status/2002871992752697777"
          title="First Tweet"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=AwZ8PtoqCeU"
          title="First Video"
        />
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
