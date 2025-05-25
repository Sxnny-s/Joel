import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const TableDB = () => {
  const sales = [] // <-- replace with real sales later

  return (
    <>
      <Table>
        <TableCaption>Recent Sales</TableCaption>

        <TableHeader>
            <TableRow>
                <TableHead className="w-[120px]">Sale Date</TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Car Sold</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Follow-up Done</TableHead>
                <TableHead className="text-right">Net Profit</TableHead>
            </TableRow>
        </TableHeader>

        <TableBody>
        <TableRow>
            <TableCell colSpan={6} className="text-center text-muted-foreground italic">
            Sales table coming in the next update...
            </TableCell>
        </TableRow>
        </TableBody>

      </Table>
    </>
  )
}

export default TableDB
