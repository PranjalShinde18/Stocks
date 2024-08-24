import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableComponent = () => {
  return (
    <div className="border rounded-xl overflow-hidden">
      <Table>
        <TableHeader className="text-lg font-semibold">
          <TableRow>
            <div className="py-1">
              <TableHead className="w-[100px]">Invoice</TableHead>
            </div>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-gray-500 font-medium">
          <TableRow className="hover:bg-slate-100">
            <div className="py-2">
              <TableCell className="font-medium">INV001</TableCell>
            </div>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <div className="py-2">
              <TableCell className="font-medium">INV001</TableCell>
            </div>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <div className="py-2">
              <TableCell className="font-medium">INV001</TableCell>
            </div>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <div className="py-2">
              <TableCell className="font-medium">INV001</TableCell>
            </div>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <div className="py-2">
              <TableCell className="font-medium">INV001</TableCell>
            </div>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <div className="py-2">
              <TableCell className="font-medium">INV001</TableCell>
            </div>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <div className="py-2">
              <TableCell className="font-medium">INV001</TableCell>
            </div>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <div className="py-2">
              <TableCell className="font-medium">INV001</TableCell>
            </div>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <div className="py-2">
              <TableCell className="font-medium">INV001</TableCell>
            </div>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
