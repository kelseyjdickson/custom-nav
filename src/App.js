import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    {
      id: "askdhf",
      label: "Can I use react on projects?",
      content: "Yes, you can!",
    },
    {
      id: "cool",
      label: "Am I tired?",
      content: "Yes, you can!",
    },
    {
      id: "nice",
      label: "Can I eat mustard?",
      content: "Yes, you can!",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
