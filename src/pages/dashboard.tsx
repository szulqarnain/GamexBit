import GCHeaderIcons from "../components/UserDashboard/Dashboard/GCHeaderIcons";
import GraphCard from "../components/UserDashboard/Dashboard/GraphCard";

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
    </div>
  );
}

// const chartGridLines = [
//   { value: "115.00", src: "/figmaAssets/line-6.svg" },
//   { value: "114.00", src: "/figmaAssets/line-6.svg" },
//   { value: "113.00", src: "/figmaAssets/line-6.svg" },
//   { value: "112.00", src: "/figmaAssets/line-6.svg" },
//   { value: "111.00", src: "/figmaAssets/line-6-3.svg" },
//   { value: "110.00", src: "/figmaAssets/line-6-1.svg" },
// ];

// const Graph = () => {
//   return (
//     <div className="flex flex-col gap-[37px]">
//       {chartGridLines.map((line, index) => (
//         <div
//           key={index}
//           className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]"
//         >
//           <div className="border-[1px] border-[rgb(var(--border))] flex-1 grow h-0 relative"></div>
//           <p className="bd-nrm-med [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--secondary-text))]">
//             {" "}
//             {line.value}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Graph;
