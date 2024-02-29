"use client"

import { IEvent } from '@/lib/database/models/event.model'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Checkout from './Checkout'

function CheckoutButton({event}:{event:IEvent}) {
    const {user} = useUser()
    const userId = user?.publicMetadata.userId as string
  const hasEventFinished =new Date(event.endDateTime)<new Date()
  
    return (
    <div className='flex items-center gap-3'>
        {/* CANNOT BUY PAST EVENT  */}
         {hasEventFinished?(
            <p className="p-2 text-red-400">
                Sorry, ticktes are no longer available.
            </p>
        ):( 
            <>
              <SignedOut>
                <Button asChild className='button rounded-full' size= "lg">
                    <Link href="/sign-in">
                        Get Tickets
                    </Link>
                </Button>
            </SignedOut>
            <SignedIn>
                <Checkout event={event} userId={userId} />
            </SignedIn>
            </>
        )} 
    </div>
  )
}

export default CheckoutButton