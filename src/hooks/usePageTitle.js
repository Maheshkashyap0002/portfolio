import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    const base = "Mahesh Kumar — Full Stack Web Developer";
    document.title = title ? `${title} | Mahesh Kumar` : base;
  }, [title]);
}

export default usePageTitle;
