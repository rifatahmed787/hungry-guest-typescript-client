import { useEffect } from "react";

const TitleHook = (title: string) => {
  useEffect(() => {
    document.title = `${title}-Work Schedule`;
  }, [title]);
};

export default TitleHook;
