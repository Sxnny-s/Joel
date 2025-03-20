import React from 'react';
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import SalesChartDB from '@/components/ui/SalesChartDB';



const Dashboard = () => {
  return (
    <div>
      <SignedIn>
        <h1>Welcome to your Dashboard!</h1>
          <div className='p-6'>
            <h1>Dashboard Overview</h1>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2  gap-4 mb-6 '>
              {/* Total revenue */}
              <Card className='w-full h-auto'>
                <CardContent className='text-left'>
                  <div className='tracking-tight text-sm font-medium mb-2'>Total Revenue</div>
                  <div className='text-2xl font-bold'>$420,545.52</div>
                  {/* <p className='text-xs text-muted-foreground'>+20.1% from last month</p> */}
                </CardContent>

              </Card>
              {/* Total Profit */}
              <Card className='w-full h-auto'>
                <CardContent className='text-left'>
                  <div className='tracking-tight text-sm font-medium mb-2'>Total Profit</div>
                  <div className='text-2xl font-bold'>$12,345.42</div>
                  {/* <p className='text-xs text-muted-foreground'>+20.1% from last month</p> */}
                </CardContent>

              </Card>

              {/* Total Sales */}

              <Card className='w-full h-auto'>
                <CardContent className='text-left'>
                  <div className='tracking-tight text-sm font-medium mb-2'>Total Sales</div>
                  <div className='text-2xl font-bold'>83</div>
                  {/* <p className='text-xs text-muted-foreground'>+3.1% from last month</p> */}
                </CardContent>

              </Card>

              {/* Highest Sale Month  */}
              <Card className='w-full h-auto'>
                <CardContent className='text-left'>
                  <div className='tracking-tight text-sm font-medium mb-2'>Sales/Profit (Last 30 days)</div>
                  <div className='text-2xl font-bold'>+19 |  $14,345 </div>
                  <p className='text-xs text-muted-foreground'>+12.5% from last month</p>
                </CardContent>

              </Card>
            </div>






            <div className='grid lg:grid-cols-[55%_45%] sm:grid-cols-1 gap-4'>
              <Card>
                <SalesChartDB/>
              </Card>

              <Card>

              </Card>

            </div>



          </div>
          







      </SignedIn>
      <SignedOut>
        <p>Please sign in to view your dashboard.</p>
        {/* <SignInButton /> */}
      </SignedOut>
    </div>
  );
}

export default Dashboard;
