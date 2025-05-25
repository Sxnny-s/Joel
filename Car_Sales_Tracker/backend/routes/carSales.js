const CarSale = require('../models/carSale')
const express = require('express')
const app = express()
const router = express.Router()
const carSaleScheme = require('../schemas/carSaleSchema')
const { z } = require('zod')


// add new car Sale to database
router.post('/addCarSale',async (req,res) => {
    

    userId = req.auth.userId

    try {
        // validate the request body form zod schema
        const validatedData = carSaleScheme.parse(req.body)

       

        // Create a new sale object
        const newSale = new CarSale({
            ...validatedData,
            userId,
        })

        console.log(newSale)

         // save to DB
         await newSale.save();
         res.status(201).json(newSale);

    } catch (error) {

        if (error instanceof z.ZodError) {
            return res.status(400).json({errors: error.errors})
        }

        console.error('Error saving sales Data',error)
        res.status(500).json({error: 'Internal erver Error'})
    }
})

// // Getting all Sales Data
// router.get('/salesData',async (req,res) => {
//     try {
//         const sales = await CarSale.find({})
//         res.json(sales)
           
//     } catch (error) {
//         console.error("Error getting companies", error)
//         res.status(500).json({error: "internal Server Error"})
//     }
// })

// getting all sales data for a single user
router.get('/salesData/:id', async (req, res) => {
    try {
        const id = req.params.id
        const userData = await CarSale.find({ userId: id}) 

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