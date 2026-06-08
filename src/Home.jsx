import { useContext } from "react";
import { AppContext } from "./App";
export default function Home() {
  const { user } = useContext(AppContext);
  return (
    <div>
      Home
      <h2>{user?.name}</h2>
    </div>
  );
}
