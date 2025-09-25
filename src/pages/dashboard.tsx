import GCHeaderIcons from "../components/UserDashboard/Dashboard/GCHeaderIcons";
import GraphCard from "../components/UserDashboard/Dashboard/GraphCard";
import PredictCard from "../components/UserDashboard/Dashboard/PredictCard";

export default function Dashboard() {
  return (
    <div className="md:p-[16px]">
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-center justify-between">
          <p className="font-[700] text-[24px] leading-[24px] [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--primary-text))]">
            Dashboard
          </p>
          <div className="md:hidden">
            <GCHeaderIcons />
          </div>
        </div>
        <GraphCard />
      </div>
      <div className="mt-[40px]">
        <PredictCard />
      </div>
    </div>
  );
}
