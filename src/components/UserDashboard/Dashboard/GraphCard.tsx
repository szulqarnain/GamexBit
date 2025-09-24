import Graph from "./Graph";
import GraphCardHeader from "./GraphCardHeader";

const GraphCard = () => {
  return (
    <div className="rounded-[16px] border-[1px] border-[rgb(var(--border))] text-[rgb(var(--primary-text))] md:px-[24px] md:py-[19px] p-[16px] flex flex-col gap-[35px]">
      <GraphCardHeader />
      <Graph />
    </div>
  );
};

export default GraphCard;
