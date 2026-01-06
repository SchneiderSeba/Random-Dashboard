import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Pagination from '../../ui/invoices/pagination';
import RevenueChart from '../../ui/dashboard/revenue-chart';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import InvoicesTable from '@/app/ui/invoices/table';
import { Suspense } from 'react';
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';

export default async function MainInvoices(){
    return(
        <>
            {/* <div className="main-chart flex items-center justify-between mb-6">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
            </div> */}

            <div className="search flex items-center justify-between m-4">
                <Search placeholder='Search your Invoices'/>
                <CreateInvoice />
            </div>

            <div>
                <InvoicesTable query="" currentPage={1} />
            </div>

            {/* <div className="main-invoices">
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div> */}

            <div>
                <Pagination totalPages={10} />
            </div>
        </>
    );
}