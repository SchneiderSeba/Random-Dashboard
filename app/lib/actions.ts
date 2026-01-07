'use server';

import z from 'zod';
import { Invoice } from './definitions';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';

const sql = postgres(process.env.DATABASE_PUBLIC_URL!, { ssl: 'require' });

const invoiceSchema = z.object({
    id: z.string(),
    customer_id: z.string(),
    amount: z.coerce.number(),
    date: z.string().optional(),
    status: z.enum( ['paid', 'pending'] ),
});

const invoiceFormSchema = invoiceSchema.omit({ 
    id: true,
    date: true,
});

export async function createInvoice(data: FormData) {

     const { customer_id, amount, status } = invoiceFormSchema.parse({
        customer_id: data.get('customerId'),
        amount: data.get('amount'),
        date: data.get('date'),
        status: data.get('status'),
    });

    const amountInCents = Math.round(amount * 100);
    const dateNow = new Date().toISOString().split('T')[0];

    try {
        await sql`
            INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customer_id}, ${amountInCents}, ${status}, ${dateNow});
        `;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to create invoice.');
    }

    revalidatePath('/dashboard/invoices/create');

    console.log('Creating Invoice data:', { customer_id, amount, status, date: dateNow });
}