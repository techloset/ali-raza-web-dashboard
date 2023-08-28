import React from "react";
import Revenue from "../components/Revenue";
import Chart from "../components/Chart";
import Devices from "../components/Devices";
import Countries from "../components/Countries";
import CompaignPerformance from "../components/CompaignPerformance";

export default function Dashboard() {
  return (
    <div>
      <Revenue />
      <div className="grid lg:flex lg:flex-row lg:space-x-5  gap-4 w-full  space-y-6">
        <Chart />
        <Devices />
      </div>
      <div className="grid lg:flex lg:flex-row lg:space-x-5 gap-4 w-full  space-y-6">
        <CompaignPerformance />
        <Countries />
      </div>
    </div>
  );
}
