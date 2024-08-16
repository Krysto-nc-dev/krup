import { getAuthUserDetails, verifyAndAcceptInvitation } from '@/lib/queries'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'
import { Plan } from '@prisma/client'


const page = async ({
  searchParams,
}: {
  searchParams: { plan?: Plan; state?: string; code?: string }
}) => {
  const agencyId = await verifyAndAcceptInvitation()
   
  // get user details
  const user = await getAuthUserDetails()
 

  if (agencyId) {
    if (user?.role === 'SUBACCOUNT_GUEST' || user?.role === 'SUBACCOUNT_USER') {
      return redirect('/sous-compte')
    } else if (
      user?.role === 'AGENCY_OWNER' ||
      user?.role === 'AGENCY_ADMIN'
    ) {
      if (searchParams.plan) {
        return redirect(
          `/agency/${agencyId}/billing?plan=${searchParams.plan}`,
        )
      }
      if (searchParams.state) {
        const [statePath, stateAgencyId] = searchParams.state.split('___')
        if (stateAgencyId) return <div>Non autorisé</div>
        return redirect(
          `/agency/${stateAgencyId}/${statePath}?code=${searchParams.code}`,
        )
      } else {
        return redirect(`/agency/${agencyId}`)
      }
    } else {
      return <div className='text-red-400'>Non autorisé ! </div>
    }
  }

  const authUser = await currentUser()

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="max-w-[950px] p-4 rounded-xl">
        <h1 className="text-2xl text-primary">Créer votre entreprise</h1>
       
      </div>
    </div>
  )
}

export default page
