import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import "../../App.css"

const SalesChartDB = ({ data }) => {


    const curYear = new Date().getFullYear().toString()

    
    const jan = data.monthlySummary[`${curYear}-01`]?.salesCount || 0;
    const feb = data.monthlySummary[`${curYear}-02`]?.salesCount || 0;
    const mar = data.monthlySummary[`${curYear}-03`]?.salesCount || 0;
    const apr = data.monthlySummary[`${curYear}-04`]?.salesCount || 0;
    const may = data.monthlySummary[`${curYear}-05`]?.salesCount || 0;
    const jun = data.monthlySummary[`${curYear}-06`]?.salesCount || 0;
    const jul = data.monthlySummary[`${curYear}-07`]?.salesCount || 0;
    const aug = data.monthlySummary[`${curYear}-08`]?.salesCount || 0;
    const sep = data.monthlySummary[`${curYear}-09`]?.salesCount || 0;
    const oct = data.monthlySummary[`${curYear}-10`]?.salesCount || 0;
    const nov = data.monthlySummary[`${curYear}-11`]?.salesCount || 0;
    const dec = data.monthlySummary[`${curYear}-12`]?.salesCount || 0;

    const chartData = [
        { month: "January", carsales: jan },
        { month: "February", carsales: feb },
        { month: "March", carsales: mar },
        { month: "April", carsales: apr },
        { month: "May", carsales: may },
        { month: "June", carsales: jun },
        { month: "July", carsales: jul },
        { month: "August", carsales: aug },
        { month: "September", carsales: sep },
        { month: "October", carsales: oct },
        { month: "November", carsales: nov },
        { month: "December", carsales: dec }
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
            <YAxis/>
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