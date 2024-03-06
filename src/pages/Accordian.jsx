import AccordianBody from "./AccordianBody";

const Accordian = ({ item, showIndex, toggleAccordian }) => {
  return (
    <div className="flex justify-center" onClick={() => showIndex()}>
      <div className="w-6/12">
        <div className="bg-orange-300 mt-4 p-3 rounded-md">
          <div className="flex justify-between">
            <p>
              {item.title} ({item.itemCards.length})
            </p>
            <span>🔽</span>
          </div>
          {toggleAccordian ? <AccordianBody item={item.itemCards} /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
