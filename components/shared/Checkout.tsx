import React from 'react'
import { Button } from '../ui/button'
import { IEvent } from '@/lib/database/models/event.model'

function Checkout({event,userId}:{event:IEvent, userId:string}) {
    const onCheckout =async ()=>{
        console.log('checkout')
    }
  return (
    <form onSubmit={onCheckout} method='post'>
        <Button type='submit' role='link' size="lg" className='button sm:w-fit'>
        {event.isFree ? 'Get Ticket' : 'Buy Ticket'}

        </Button>
    </form>
  )
}

export default Checkout