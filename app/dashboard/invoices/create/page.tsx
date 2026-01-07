import Form from '@/app/ui/invoices/create-form';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchCustomers } from '@/app/lib/data';

export default async function CreateInvoicePage() {
    const customers = await fetchCustomers();
    return (
        <>
            <div className="max-w-2xl mx-auto p-4 md:p-6 lg:p-8">
                <h1 className="text-2xl font-semibold mb-6">Create New Invoice</h1>
                <Form customers={customers} />
            </div>

            <div>
                <LatestInvoices />
            </div>
        </>
    );
}