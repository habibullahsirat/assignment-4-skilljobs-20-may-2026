import { Kizil } from "../welcome/kizil";

export function meta() {
  return [
    { title: "Kizil" },
    { name: "description", content: "E-Commerce Kizil" },
  ];
}

export default function Home() {
  return <Kizil />;
}
