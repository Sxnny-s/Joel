import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from '@clerk/clerk-react';


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import sales  from '../../services/sales'


const formSchema = z.object({

  // 1. Customer Information
  buyerName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  customerPhone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),

  // 2. Deal Details
  contractDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Date must be in YYYY-MM-DD format." }),
  dateClosed: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Date must be in YYYY-MM-DD format." }),
  dateDelivered: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Date must be in YYYY-MM-DD format." }),
  dealType: z.enum(["lease", "finance", "cash"], { message: "Must be lease, finance, or cash." }),
  dealCredit: z.enum(["50%", "100%"], { message: "Must be either 50% or 100%." }),

  // 3. Vehicle Information
  // stockNumber: z.string().min(1, { message: "Stock number is required." }),
  stockType: z.enum(["new", "used"], { message: "Must be new or used." }),
  year: z.number().min(1900).max(new Date().getFullYear() + 1),
  make: z.string().min(1, { message: "Make is required." }),
  model: z.string().min(1, { message: "Model is required." }),
  vin: z.string().length(17, { message: "VIN must be 17 characters." }),

  // 4. Financials
  closePrice: z.number().nonnegative({ message: "Close price must be a positive number." }),
  totalProfit: z.number().nonnegative({ message: "Profit must be a positive number." }),
  financeSales: z.number().nonnegative({ message: "Finance sales must be a positive number." }),

  // 5. Personnel
  salesperson: z.string().min(2, { message: "Sales person name is required." }),
});

const AddSalesForm = () => {
   
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // 1. Customer Information
      buyerName: "",
      customerPhone: "",
  
      // 2. Deal Details
      contractDate: "",
      dateClosed: "",
      dateDelivered: "",
      dealType: "cash", // one of: "lease", "finance", "cash"
      dealCredit: "100%", // one of: "50%", "100%"
  
      // 3. Vehicle Information
      // stockNumber: "",
      stockType: "used", // one of: "new", "used"
      year: new Date().getFullYear(), // sensible default
      make: "",
      model: "",
      vin: "",
  
      // 4. Financials
      closePrice: 0,
      totalProfit: 0,
      financeSales: 0,
  
      // 5. Personnel
      salesperson: "",
    },
  });
  

  // 2. Define a submit handler.


  
 async function onSubmit(values: z.infer<typeof formSchema>)  {

    const { getToken } = useAuth();
    const token = await getToken()

    try {
      const postReq = await sales.Create(values, token )
      console.log('Req', postReq)
      console.log('values',values)
    } catch (error) {
      console.error(error)
    }
  }

  
  return (
    <div className="max-h-[500px] overflow-y-auto">

      <>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

      <FormField
        control={form.control}
        name="buyerName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Buyer Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />


      <FormField
        control={form.control}
        name="customerPhone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Customer Phone</FormLabel>
            <FormControl>
              <Input placeholder="1234567890" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="contractDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contract Date</FormLabel>
            <FormControl>
              <Input placeholder="YYYY-MM-DD" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="dateClosed"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date Closed</FormLabel>
            <FormControl>
              <Input placeholder="YYYY-MM-DD" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="dateDelivered"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date Delivered</FormLabel>
            <FormControl>
              <Input placeholder="YYYY-MM-DD" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="dealType"
        render={({ field }) => (

          <FormItem>
            <FormLabel>Deal Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="lease">Lease</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="cash">Cash</SelectItem>
              </SelectContent>
              
            </Select>
            <FormMessage />

            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="dealCredit"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Deal Credit</FormLabel>
            <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="100%">100%</SelectItem>
                <SelectItem value="50%">50%</SelectItem>
              </SelectContent>
              
            </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />


      <FormField
        control={form.control}
        name="stockType"
        render={({ field }) => (

          <FormItem>
            <FormLabel>Stock Type</FormLabel>
            <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue  />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="used">Used</SelectItem>
              </SelectContent>
              
            </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="year"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Year</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter year" {...field} onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}  />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="make"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Make</FormLabel>
            <FormControl>
              <Input placeholder="Enter make" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="model"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Model</FormLabel>
            <FormControl>
              <Input placeholder="Enter model" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="vin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>VIN</FormLabel>
            <FormControl>
              <Input placeholder="17-character VIN" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="closePrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Close Price</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter close price" {...field} onChange={(e) => field.onChange(e.target.value === ''? '' : Number(e.target.value))}  />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="totalProfit"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Total Profit</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter total profit" {...field} onChange={(e) => field.onChange(e.target.value === "" ? '' : Number(e.target.value))} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />


      <FormField
        control={form.control}
        name="financeSales"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Finance Sales</FormLabel>
            <FormControl>
              
              <Input  type="number" placeholder="Enter finance sales"  {...field}  onChange={(e) => field.onChange(e.target.value === "" ? '' : Number(e.target.value))} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={form.control}
        name="salesperson"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sales Person</FormLabel>
            <FormControl>
              <Input placeholder="Enter salesperson name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </>
        </div>
    )
}

export default AddSalesForm