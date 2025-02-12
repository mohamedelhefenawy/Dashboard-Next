import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  
  export default function Tablee() {


    const data = [
      {user:'user_1',
        status:'paid',
        method:'credit',
        n_process:5,
        amount_paid:2500
        },
        {user:'user_2',
          status:'paid',
          method:'cash',
          n_process:3,
          amount_paid:200
          },
          {user:'user_3',
            status:'unpaid',
            method:'cash',
            n_process:1,
            amount_paid:0
            },
            {user:'user_4',
              status:'unpaid',
              method:'paypal',
              n_process:1,
              amount_paid:100
              }
      ]
    return (
      <div className="my-6 bg-white max-w-[90vw] overflow-auto  shadow-xl px-4 py-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">User Transactions</h2>
      <div className="max-h-[400px] rounded-lg border w-full border-gray-200">
        <Table className="">
          <TableHeader className="bg-gray-100 sticky top-0 shadow-md">
            <TableRow>
              <TableHead className=" font-bold text-gray-700">User</TableHead>
              <TableHead className="text-gray-700">Status</TableHead>
              <TableHead className="text-gray-700">Method</TableHead>
              <TableHead className="text-gray-700">Processes</TableHead>
              <TableHead className="text-right text-gray-700">Amount Paid</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                className="even:bg-gray-50 hover:bg-gray-100 transition-all duration-200"
              >
                <TableCell className="font-semibold text-gray-800">{item.user}</TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold 
                    ${item.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  >
                    {item.status}
                  </span>
                </TableCell>
                <TableCell className="capitalize">{item.method}</TableCell>
                <TableCell >{item.n_process}</TableCell>
                <TableCell className="text-right font-medium text-gray-900">
                  ${item.amount_paid.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    )
  }
  