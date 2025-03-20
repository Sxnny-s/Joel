import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import "../../App.css"

const SalesChartDB = () => {

    const chartData = [
        { month: "January", carsales: 186 },
        { month: "February", carsales: 305 },
        { month: "March", carsales: 237 },
        { month: "April", carsales: 73 },
        { month: "May", carsales: 209 },
        { month: "June", carsales: 214 },
        { month: "July", carsales: 186 },
        { month: "August", carsales: 305 },
        { month: "September", carsales: 237 },
        { month: "October", carsales: 73 },
        { month: "November", carsales: 209 },
        { month: "December", carsales: 214 }
      ];      

    const chartConfig = {
        carsales: {
            label: "Sales",
            color: "#2563eb"
        }
    } satisfies ChartConfig


    return (
        <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
            <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false}/>
            <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={6}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent/>} />
            <ChartLegend content={<ChartLegendContent/>}/>
            <Bar dataKey="carsales" fill='var(--color-carsales)' radius={4} /> 
            </BarChart>
        </ChartContainer>
  )
}

export default SalesChartDB