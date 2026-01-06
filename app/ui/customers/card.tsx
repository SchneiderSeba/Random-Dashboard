import Image from 'next/image';
import { CustomerCardProps } from '@/app/lib/definitions';

export default function CustomerCard({ customer }: CustomerCardProps) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6 border border-gray-200 hover:shadow-lg transition-shadow hover:shadow-blue-200 duration-300">
      <Image
        src={customer.image_url}
        alt={`${customer.name}'s profile picture`}
        width={80}
        height={80}
        className="rounded-full mb-4 border-2 border-blue-300"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2">{customer.name}</h2>
      <p className="text-gray-500 mb-4">{customer.email}</p>
      <div className="w-full flex justify-between text-center text-sm">
        <div>
          <span className="block text-gray-400">Invoices</span>
          <span className="font-semibold text-gray-700">{customer.total_invoices ?? '-'}</span>
        </div>
        <div>
          <span className="block text-gray-400">Pending</span>
          <span className="font-semibold text-yellow-600">$ {customer.total_pending ?? '-'}</span>
        </div>
        <div>
          <span className="block text-gray-400">Paid</span>
          <span className="font-semibold text-green-600">$ {customer.total_paid ?? '-'}</span>
        </div>
      </div>
    </div>
  );
}