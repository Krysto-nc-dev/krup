import BlurPage from '@/components/global/blur-page'
import InfoBar from '@/components/global/info-bar'
import Sidebar from '@/components/sidebar'
import Unauthorized from '@/components/unauthorized'
import {
  getNotificationAndUser,
  verifyAndAcceptInvitation,
} from '@/lib/queries'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
  params: { agencyId: string }
}

type NotificationWithUser = {
  id: string
  title: string
  message: string
  createdAt: string
  User: {
    id: string
    role: 'AGENCY_OWNER' | 'AGENCY_ADMIN' | 'OTHER_ROLES'
    name: string
    email: string
  }
}

const Layout = async ({ children, params }: Props) => {
  const agencyId = await verifyAndAcceptInvitation()
  const user = await currentUser()

  if (!user) {
    return redirect('/')
  }

  if (!agencyId) {
    return redirect('/agency')
  }

  if (
    user.privateMetadata.role !== 'AGENCY_OWNER' &&
    user.privateMetadata.role !== 'AGENCY_ADMIN'
  ) {
    return <Unauthorized />
  }

  const notifications: NotificationWithUser[] = await getNotificationAndUser(agencyId) || []
  const allNoti = notifications || []  // Initialisation de `allNoti` avec une valeur par défaut
  
  return (
    <div className="h-screen overflow-hidden">
      <Sidebar
        id={params.agencyId}
        type="agency"
      />
      <div className="md:pl-[300px]">
        <InfoBar
          notifications={allNoti}
          role={allNoti.length > 0 ? allNoti[0].User.role : undefined}
        />
        <div className="relative">
          <BlurPage>{children}</BlurPage>
        </div>
      </div>
    </div>
  )
}

export default Layout
