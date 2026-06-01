import OurCollection from "../components/ourcollection/OurCollection";

export function meta() {
  return [
    { title: "Kizil - Our Collections" },
    { name: "description", content: "Our Collections" },
  ];
}

export default function OurCollections() {
  return <OurCollection />;
}
