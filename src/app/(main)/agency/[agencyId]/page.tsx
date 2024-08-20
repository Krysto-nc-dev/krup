import CircleProgress from '@/components/global/circle-progress'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { db } from '@/lib/db'
import { AreaChart } from '@tremor/react'
import {
  ClipboardIcon,
  Contact2,
  Goal,
  ShoppingCart,
} from 'lucide-react'
import React from 'react'

const Page = async ({
  params,
}: {
  params: { agencyId: string }
  searchParams: { code: string }
}) => {
  let currency = 'XPF'
  let sessions = [
    { created: '01/01/2023', amount_total: 100 },
    { created: '02/01/2023', amount_total: 150 },
  ]
  let totalClosedSessions = sessions.filter(session => session.amount_total >= 100)
  let totalPendingSessions = sessions.filter(session => session.amount_total < 100)
  let net = 250 // Exemple de revenu net
  let potentialIncome = 50 // Exemple de revenu potentiel
  let closingRate = 50 // Exemple de taux de conversion
  const currentYear = new Date().getFullYear()

  const agencyDetails = await db.agency.findUnique({
    where: {
      id: params.agencyId,
    },
  })

  if (!agencyDetails) return

  const subaccounts = await db.subAccount.findMany({
    where: {
      agencyId: params.agencyId,
    },
  })

  return (
    <div className="relative h-full">
      <h1 className="text-4xl">Dashboard</h1>
      <Separator className=" my-6" />
      <div className="flex flex-col gap-4 pb-6">
        <div className="flex gap-4 flex-col xl:!flex-row">
          <Card className="flex-1 relative">
            <CardHeader>
              <CardDescription>Revenu</CardDescription>
              <CardTitle className="text-4xl">
                {net ? `${currency} ${net.toFixed()}` : `XPF 0.00`}
              </CardTitle>
              <small className="text-xs text-muted-foreground">
                Pour l'année {currentYear}
              </small>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Revenu total généré tel que reflété dans votre tableau de bord.
            </CardContent>
            {/* <Banknot className="absolute right-4 top-4 text-muted-foreground" /> */}
          </Card>
          <Card className="flex-1 relative">
            <CardHeader>
              <CardDescription>Revenu Potentiel</CardDescription>
              <CardTitle className="text-4xl">
                {potentialIncome
                  ? `${currency} ${potentialIncome.toFixed()}`
                  : `XPF 0.00`}
              </CardTitle>
              <small className="text-xs text-muted-foreground">
                Pour l'année {currentYear}
              </small>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              C'est le montant que vous pouvez conclure.
            </CardContent>
            {/* <Banknot className="absolute right-4 top-4 text-muted-foreground" /> */}
          </Card>
          <Card className="flex-1 relative">
            <CardHeader>
              <CardDescription>Clients Actifs</CardDescription>
              <CardTitle className="text-4xl">{subaccounts.length}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Reflète le nombre de sous-comptes que vous possédez et gérez.
            </CardContent>
            <Contact2 className="absolute right-4 top-4 text-muted-foreground" />
          </Card>
          <Card className="flex-1 relative">
            <CardHeader>
              <CardTitle>Objectif de l'agence</CardTitle>
              <CardDescription>
                <p className="mt-2">
                  Reflète le nombre de sous-comptes que vous souhaitez posséder et gérer.
                </p>
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">
                    Actuel: {subaccounts.length}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    Objectif: {agencyDetails.goal}
                  </span>
                </div>
                <Progress
                  value={(subaccounts.length / agencyDetails.goal) * 100}
                />
              </div>
            </CardFooter>
            <Goal className="absolute right-4 top-4 text-muted-foreground" />
          </Card>
        </div>
        <div className="flex gap-4 xl:!flex-row flex-col">
          <Card className="p-4 flex-1">
            <CardHeader>
              <CardTitle>Historique des Transactions</CardTitle>
            </CardHeader>
            <AreaChart
              className="text-sm stroke-primary"
              data={[
                ...(totalClosedSessions || []),
                ...(totalPendingSessions || []),
              ]}
              index="created"
              categories={['amount_total']}
              colors={['primary']}
              yAxisWidth={30}
              showAnimation={true}
            />
          </Card>
          <Card className="xl:w-[400px] w-full">
            <CardHeader>
              <CardTitle>Conversions</CardTitle>
            </CardHeader>
            <CardContent>
              <CircleProgress
                value={closingRate}
                description={
                  <>
                    {sessions && (
                      <div className="flex flex-col">
                        Abandonnés
                        <div className="flex gap-2">
                          <ShoppingCart className="text-rose-700" />
                          {sessions.length}
                        </div>
                      </div>
                    )}
                    {totalClosedSessions && (
                      <div className="flex flex-col">
                        Carts Gagnés
                        <div className="flex gap-2">
                          <ShoppingCart className="text-emerald-700" />
                          {totalClosedSessions.length}
                        </div>
                      </div>
                    )}
                  </>
                }
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Page
