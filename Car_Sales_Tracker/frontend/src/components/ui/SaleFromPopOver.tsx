import React from 'react'
import {Button} from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import AddSalesForm from './AddSalesForm'
  

export const SaleFromPopOver = () => {
  return (
    <>
    <Popover>
      <PopoverTrigger asChild>
        <Button>Add Sale</Button>
      </PopoverTrigger>
      <PopoverContent>
      <AddSalesForm/>
      </PopoverContent>
    </Popover>
    
    </>
  )
}
