import { useEffect } from "react";

const TitleHook = (title: string) => {
  useEffect(() => {
    document.title = `Hungryguest-${title}`;
  }, [title]);
};

export default TitleHook;
