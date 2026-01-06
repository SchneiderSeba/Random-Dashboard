import { fetchCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export default async function MainCustomers() {
    const customers = await fetchCustomers();
    return(
        <div>
            <CustomersTable customers={customers} />
        </div>
    );
}