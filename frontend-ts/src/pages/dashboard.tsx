import { Button } from "../components/Button";
import "../App.css";
import { PlusIcon } from "../icons/Plus";
import { Share } from "../icons/Share";
import { Card } from "../components/Card";
import { CreateModal } from "../components/CreateModal";
import { useEffect, useState } from "react";
import { SideBar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  async function deleteContent({
    title,
    link,
  }: {
    title: string;
    link: string;
  }) {
    await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/v1/content`, {
      data: { title, link },
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    refresh();
  }

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
            text="Add Item"
            startIcon={<PlusIcon />}
            onClick={() => {
              setModalOpen(true);
            }}
          />
          <Button
            variant="secondary"
            size="md"
            text="Share"
            onClick={async () => {
              const response = await axios.post(
                import.meta.env.VITE_BACKEND_URL + "/api/v1/share",
                {
                  share: true,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
              alert(shareUrl);
            }}
            startIcon={<Share />}
          />
        </div>

        <div className="flex flex-wrap gap-4">
          {contents.map(({ type, link, title }) => (
            <Card
              deleteContent={() => deleteContent({ title, link })}
              key={`${type}:${link}:${title}`}
              type={type}
              link={link}
              title={title}
            />
          ))}
          {/* <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=AwZ8PtoqCeU"
            title="First Video"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
