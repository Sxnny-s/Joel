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
  return (
    <>
        <Table>
            <TableCaption> Recent Sales</TableCaption>

            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead >Google Review</TableHead>
                    <TableHead >Servey</TableHead>
                    <TableHead className="text-right" >Profit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium"> 10/24/2025</TableCell>
                    <TableCell >Wise</TableCell>
                    <TableCell >no</TableCell>
                    <TableCell >no</TableCell>
                    <TableCell className="text-right">$6000</TableCell>
                </TableRow>
            </TableBody>

        </Table>
    </>
  )
}

export default TableDB