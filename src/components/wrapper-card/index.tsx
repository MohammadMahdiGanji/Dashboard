// import type
import type { JSX } from "react";

// import component
import Card from "../card/index";

export default function index(): JSX.Element {
  return (
    <div className="grid grid-cols-12 gap-8">
      <Card
        {...{ id: 1, title: "Users", icon: "users", growth: 45, value: 50 }}
      />
      <Card
        {...{ id: 1, title: "Users", icon: "users", growth: 45, value: 50 }}
      />
      <Card
        {...{ id: 1, title: "Users", icon: "users", growth: 45, value: 50 }}
      />
      <Card
        {...{ id: 1, title: "Users", icon: "users", growth: 45, value: 50 }}
      />
    </div>
  );
}
