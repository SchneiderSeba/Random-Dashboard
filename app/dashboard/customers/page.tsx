import { fetchCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export default async function MainCustomers() {
    const customersRaw = await fetchCustomers();
    // Map to FormattedCustomersTable[]
    const customers = customersRaw.map((customer: any) => ({
        ...customer,
        total_invoices: customer.total_invoices ?? 0,
        total_pending: customer.total_pending ?? 0,
        total_paid: customer.total_paid ?? 0,
    }));
    return(
        <div>
            <CustomersTable customers={customers} />
        </div>
    );
}