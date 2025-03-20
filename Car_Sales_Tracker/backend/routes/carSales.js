const CarSale = require('../models/carSale')
const express = require('express')
const app = express()
const router = express.Router()



// add new car to database
router.post('/addCarSale',async (req,res) => {
    try {
        // Deconstructing request body
        const 
            {   customerDOB,
                dateClosed,
                paymentOption,
                salesPerson,
                customerPhoneNumber,
                VIN,
                closedPrice,
                FinanceSales,
                totalProfit,
                userId
            } = req.body
        
        // Creating a new sale object  
        const newSale = new CarSale({
            customerDOB,
            dateClosed,
            paymentOption,
            salesPerson,
            customerPhoneNumber,
            VIN,
            closedPrice,
            FinanceSales,
            totalProfit,
            userId
        })
        // saving to database
        await newSale.save()
        res.status(201).json(newSale)
        
    } catch (error) {
        console.error('Error saving sales Data',error)
        res.status(500).json({error: 'Internal erver Error'})
    }
})

// Getting all Sales Data
router.get('/salesData',async (req,res) => {
    try {
        const sales = await CarSale.find({})
        res.json(sales)
           
    } catch (error) {
        console.error("Error getting companies", error)
        res.status(500).json({error: "internal Server Error"})
    }
})

// getting all sales data for a single user
router.get('/salesData/:id', async (req, res) => {
    try {
        const id = req.params.id
        const userData = await CarSale.find({ userId: id}) 

        if (userData.length === 0) {
            return res.status(404).json({ error: "No sales found for this user." });
        }

        res.json(userData)
    } catch (error) {
        console.error("Error getting users sales data", error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

//Delete Sale
router.delete('/salesData/:id', async (req,res) => {
    try {
        const id = req.params.id
        const deletedSale = await CarSale.findByIdAndDelete(id)

        if(!deletedSale){
            return res.status(404).json({error: `No sale with the id of ${id}`})
        }
        res.status(200).json({message: "sale deleted successfully"})


    } catch (error) {
        console.error("Error deleting sales data", error)
        res.status(500).json({error: 'Internal Server Error'})
    }
E

})

router.put('/salesData/:id', async (req, res) => {
    try {
        const id = req.params.id
        const upDatedSalesDate = await CarSale.findByIdAndUpdate(id, req.body,{new: true})
        if(!upDatedSalesDate){
            return res.status(404).json({error: `No sale with the id of ${id}`})
        }
        res.status(200).json({message: "Updated Successfully"})
    } catch (error) {
          console.error('Error editing Users Sales data', error)
          res.status(500).json({error: 'Internal Server Error'})
    }
})



module.exports = router