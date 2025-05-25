import React from 'react';
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import SalesChartDB from '@/components/ui/SalesChartDB';
import TableDB from '@/components/ui/TableDB';
import { SaleFromPopOver } from '@/components/ui/SaleFromPopOver';
import AlertPopUp from '@/components/ui/alertPopUp';


// Sales data
import { useSalesData } from '../../hooks/useSalesData'
import { stats } from '../../utils/dashboardStats'


// icons 
import { DollarSign, Wallet, Car , BarChart3 } from "lucide-react"

const Dashboard = () => {

  const {data , status, error } = useSalesData()

  if (status === 'pending') return <p>Loading sales data</p>  
  if (status === 'error') return <p> Error loading data: {error} </p>
  
  const DBstats = stats(data) 

  
  



  return (
    <div>
      <SignedIn>

        <h1 className='mb-8'>Welcome to your Dashboard!</h1>
        

        <AlertPopUp/>

          <Card>
                <div className='p-7'>
                  {/* <h1>Dashboard Overview</h1> */}
                  <SaleFromPopOver />

                  <div className='grid lg:grid-cols-4 sm:grid-cols-2  gap-4 mb-6 mt-8 '>
                    {/* Total revenue */}
                    <Card className='w-full h-auto'>

                      <CardContent className='relative text-left'>
                          <div className='tracking-tight text-sm font-medium mb-2'>Total Revenue</div>
                          <div className='text-2xl font-bold'>${DBstats.TotalRev} </div>
                        
                          <DollarSign className="absolute top-1 right-4 h-5 w-5 text-muted-foreground" />

                        {/* <p className='text-xs text-muted-foreground'>+20.1% from last month</p> */}
                      </CardContent>

                    </Card>




                    {/* Total Profit */}
                    <Card className='w-full h-auto'>
                      <CardContent className='relative text-left'>
                        <div className='tracking-tight text-sm font-medium mb-2'>Total Profit</div>
                        <div className='text-2xl font-bold'>${DBstats.TotalProfit}</div>
                        <Wallet className="absolute top-1 right-4 h-5 w-5 text-muted-foreground" /> 
                        {/* <p className='text-xs text-muted-foreground'>+20.1% from last month</p> */}
                      </CardContent>

                    </Card>

                    {/* Total Sales */}

                    <Card className='w-full h-auto'>
                      <CardContent className='relative text-left'>
                        <div className='tracking-tight text-sm font-medium mb-2'>Total Sales</div>
                        <div className='text-2xl font-bold'>{DBstats.TotalSales}</div>
                        <Car className="absolute top-1 right-4 h-6 w-6 text-muted-foreground" />
                        {/* <p className='text-xs text-muted-foreground'>+3.1% from last month</p> */}
                      </CardContent>

                    </Card>

                    {/* Sales This Month  */}

                    <Card className='w-full h-auto'>
                      <CardContent className='relative text-left'>
                        <div className='tracking-tight text-sm font-medium mb-2'>Sales/Profit  --- ( {new Date().toLocaleString('default', {month: 'long'})} )</div>
                        <div className='text-2xl font-bold'>+{DBstats.SalesThisMonth} |  ${DBstats.ProfitThisMonth} </div>

                        <BarChart3 className="absolute top-1 right-4 h-5 w-5 text-muted-foreground" />

                        {/* <p className='text-xs text-muted-foreground'>+12.5% from last month</p> */}
                      </CardContent>
                    </Card>


                  </div>

                  <div className='grid lg:grid-cols-[55%_45%] sm:grid-cols-1 gap-4'>
                    <Card>
                      <SalesChartDB   data={DBstats}/>
                    </Card>

                    <Card>
                      <TableDB />
                    </Card>

                  </div>
        
              </div>
          </Card>


      </SignedIn>
      <SignedOut>
        <p>Please sign in to view your dashboard.</p>
        {/* <SignInButton /> */}
      </SignedOut>
    </div>
  );
}

export default Dashboard;
