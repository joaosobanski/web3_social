import React, { useEffect } from "react";
import { useAppContext } from "../../store/app-contex";

export default function Home() {
  const { isLoggedIb } = useAppContext();
  useEffect(() => {}, [isLoggedIb]);
  return <div>home</div>;
}
