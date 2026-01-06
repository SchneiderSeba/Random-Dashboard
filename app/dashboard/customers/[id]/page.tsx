import { fetchCustomers } from "@/app/lib/data";
import Image from "next/image";
import { Suspense } from "react";
import { CardSkeleton } from "@/app/ui/skeletons";
import CustomerCard from "@/app/ui/customers/card";

export default async function IdCustomer(props: { params: Promise<{ id: string }>, customers: any }) {
    const { id } = await props.params;

    let customerById = null;

    try {
    const customer = await fetchCustomers();
    customerById = customer.find((cust: { id: string }) => cust.id === id);
    console.log("Customer by ID:", customerById);
    } catch (error) {
        console.error("Error fetching customer by ID:", error);
    }

    return (
        <Suspense fallback={<CardSkeleton />}>
            <div>
                <CustomerCard customer={customerById} />
                <span className="flex justify-center m-2">{id}</span>
            </div>
        </Suspense>
    );
}