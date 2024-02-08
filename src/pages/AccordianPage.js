import Accordion from "../components/Accordion";

const AccordianPage = () => {
  const items = [
    {
      id: "askdhf",
      label: "Can I use react on projects?",
      content: "0",
    },
    {
      id: "cool",
      label: "Am I tired?",
      content: "1",
    },
    {
      id: "nice",
      label: "Can I eat mustard?",
      content: "2",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordianPage;
