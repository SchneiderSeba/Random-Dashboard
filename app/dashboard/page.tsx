import { Suspense } from "react";
import { RevenueChartSkeleton } from "../ui/skeletons";
import RevenueChart from "../ui/dashboard/revenue-chart";

export default async function MainDashboard() {
    
  return (
    <div>
        <div className="main-chart flex items-center justify-between mb-6">
                        <Suspense fallback={<RevenueChartSkeleton />}>
                            <RevenueChart />
                        </Suspense>
                    </div>
    </div>
);
};