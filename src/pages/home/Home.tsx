// import type
import type { JSX } from "react";

// import component
import WrapperCard from "../../components/wrapper-card/index";
import Chart from "../../components/chart/index"

export default function Home(): JSX.Element {
  return (
    <main>
      <WrapperCard />
    <div className="flex flex-col gap-3 @5xl:flex-row">
    <Chart />
    <Chart />
    </div>
    </main>
  );
}
