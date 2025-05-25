import { current } from "@reduxjs/toolkit"

const stats = (data : any) => {
    const monthlySummary: any = {}

    const TotalRev = data.reduce((a,c) => c.closePrice + a, 0)
    const TotalProfit = data.reduce((a,c) => c.totalProfit + a, 0)
    const TotalSales = data.length
    const SalesThisMonth = data.filter(sale => new Date(sale.dateClosed).toLocaleString('default', {month: 'long', year:'numeric'})  == new Date().toLocaleString('default', {month: 'long', year: 'numeric'}) )
    const ProfitThisMonth = SalesThisMonth.reduce((a,c) => c.totalProfit + a, 0)

    //filter by current year
    data.forEach(sale => {

        const curYear = new Date().toLocaleString('default', {year:"numeric"} )
    
        const date = new Date(sale.dateClosed);
        const key =  `${date.getFullYear()}-${date.getMonth()}`;

    
        if (date.getFullYear().toString() == curYear){


            if(!monthlySummary[key]) {
                monthlySummary[key] = { salesCount: 0, totalProfit: 0 };
            }
    
            monthlySummary[key].salesCount += 1
            monthlySummary[key].totalProfit += sale.totalProfit
        }
                        
    })
    
    console.log(monthlySummary)
   


    
   



    // check thw amount of sales last month if its less than 5 show message 'Not enough sales data to compare.'
    //const SalesLastMonth = data.filter(sale => new Date().toLocaleString('default', {month: 'long', year:'numeric'})  == new Date().toLocaleString('default', {month: 'long', year: 'numeric'}) )

 
    

    // get the current date ex march 8th 

    // go to the previous month febuary and find all the sale between the 1-8th

    // use both of these dates to show a % change 

    

    return {TotalRev, TotalProfit ,TotalSales , SalesThisMonth: SalesThisMonth.length, ProfitThisMonth , monthlySummary}
}

export {stats} 