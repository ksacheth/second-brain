import axios from "axios";
import { useEffect, useState } from "react";

type ContentItem = {
  type: "twitter" | "youtube";
  link: string;
  title: string;
};

export function useContent() {
  const [contents, setContents] = useState<ContentItem[]>([]);

  function refresh() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContents(response.data.content);
      });
  }

  useEffect(() => {
    refresh();
  }, []);

  return {contents, refresh};
}
