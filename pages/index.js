import styles from "../styles/Home.module.css";
import GameComp from "../gameComponents/gameComp";

// Loading Component dynamically

export default function Home() {
  return (
    <div className="">
      <GameComp />
    </div>
  );
}

// Convert this to a component to Static Site Generation
