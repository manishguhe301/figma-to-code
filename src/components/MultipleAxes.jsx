import ResizableBox from "./ResizableBox";
import { Chart } from "react-charts";
import { useDemoData } from "../../utils/hooks/useDemoData";


export default function MultipleAxes() {

  const { data, primaryAxis, secondaryAxes } = useDemoData()

  return (
    <div className="w-full">

      <ResizableBox width='370'>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            defaultColors: ["#A743EF", "#8B0000"],
            dark: false,
          }}
        />
      </ResizableBox>
      <div
        className="mb-5 flex items-center gap-[30px] justify-center"
      >
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 bg-[#8134AF] rounded-[3px]"
          ></div>
          <span className="text-[#A743EF] font-bold text-sm">Income</span>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="w-4 h-4 bg-[#8B0000] rounded-[3px]"
          ></div>
          <span className="text-[#8B0000]  font-bold text-sm">MomGrowth</span>
        </div>
      </div>
    </div>
  );
}