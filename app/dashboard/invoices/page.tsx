import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Pagination from '../../ui/invoices/pagination';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import InvoicesTable from '@/app/ui/invoices/table';
import { Suspense } from 'react';
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';

export default async function MainInvoices({ searchParams }: { searchParams?: { search?: string, page?: number } }) {
    // console.log('Search Params in Invoices Page:', searchParams);
    const params = searchParams ? await searchParams : {};
    const search = params.search || '';
    const currentPage = Number(params.page || 1);

    return(
        <>

            <div className="search flex items-center justify-between m-4">
                <Search placeholder='Search your Invoices'/>
                <CreateInvoice />
            </div>

            <div>
                <Suspense key={search + currentPage}  fallback={<LatestInvoicesSkeleton />}>
                    <InvoicesTable search={search} currentPage={currentPage} />
                </Suspense>
            </div>

            <div className="flex justify-center mt-6 mb-10">
                <Pagination totalPages={10} />
            </div>

            {/* <div className="main-invoices">
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div> */}

        </>
    );
}