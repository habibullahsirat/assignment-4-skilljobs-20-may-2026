import NewArrivals from "../components/newarrivals/NewArrivals";

export function meta() {
  return [
    { title: "Kizil - New Arrivals" },
    { name: "description", content: "New Arrivals" },
  ];
}

export default function OurCollections() {
  return <NewArrivals />;
}
