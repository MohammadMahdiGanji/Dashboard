// import type
import type { JSX } from "react";

// import component
import WrapperCard from "../../components/wrapper-card/index";
import Chart from "../../components/chart/index";

export default function Home(): JSX.Element {
  return (
    <main>
      <WrapperCard />

      <Chart />
    </main>
  );
}
