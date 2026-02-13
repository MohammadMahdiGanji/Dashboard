// import type
import type { JSX } from "react";
import type { CardType } from "../../types/CardType";

// import react
import { useState, useEffect } from "react";

// import component
import Card from "../card/index";

// import get data card from server
import { getDataCardFromServer } from "./fetchFromServer";

export default function index(): JSX.Element {
  const [cards, setCards] = useState<CardType[]>([]);

  const getData = async () => {
    try {
      let data = await getDataCardFromServer<CardType[]>(
        "http://localhost:3000/dashboardCards"
      );
      setCards(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-y-5 @lg:gap-x-5 @4xl:gap-y-5 @4xl:gap-x-8">
      {cards?.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
