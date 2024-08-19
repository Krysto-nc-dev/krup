import BlurPage from '@/components/global/blur-page'
import CircleProgress from '../../../../components/global/circle-progress'
import PipelineValue from '../../../../components/global/pipeline-value'
import SubaccountFunnelChart from '../../../../components/global/subaccount-funnel-chart'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { db } from '@/lib/db'
import { AreaChart, BadgeDelta } from '@tremor/react'
import { Contact2, ShoppingCart } from 'lucide-react'
import React from 'react'

type Props = {
  params: { subaccountId: string }
}

const SubaccountPageId = async ({ params }: Props) => {
  const subaccountDetails = await db.subAccount.findUnique({
    where: {
      id: params.subaccountId,
    },
  })

  if (!subaccountDetails) return

  const funnels = await db.funnel.findMany({
    where: {
      subAccountId: params.subaccountId,
    },
    include: {
      FunnelPages: true,
    },
  })

  const funnelPerformanceMetrics = funnels.map((funnel) => ({
    ...funnel,
    totalFunnelVisits: funnel.FunnelPages.reduce(
      (total, page) => total + page.visits,
      0
    ),
  }))

  return (
    <BlurPage>
      <div className="relative h-full">
        <div className="flex flex-col gap-4 pb-6">
          <div className="flex gap-4 flex-col xl:!flex-row">
            <PipelineValue subaccountId={params.subaccountId} />

            <Card className="xl:w-fit">
              <CardHeader>
                <CardDescription>Conversions</CardDescription>
                <CircleProgress
                  value={0} // Remplacer avec la valeur réelle si nécessaire
                  description={
                    <>
                      <div className="flex flex-col">
                        Nombre total de paniers ouverts
                        <div className="flex gap-2">
                          <ShoppingCart className="text-rose-700" />
                          {/* Remplacer avec la valeur réelle si nécessaire */}
                          0
                        </div>
                      </div>
                      <div className="flex flex-col">
                        Paniers remportés
                        <div className="flex gap-2">
                          <ShoppingCart className="text-emerald-700" />
                          {/* Remplacer avec la valeur réelle si nécessaire */}
                          0
                        </div>
                      </div>
                    </>
                  }
                />
              </CardHeader>
            </Card>
          </div>

          <div className="flex gap-4 flex-col xl:!flex-row">
            <Card className="relative">
              <CardHeader>
                <CardDescription>Performance des entonnoirs</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground flex flex-col gap-12 justify-between">
                <SubaccountFunnelChart data={funnelPerformanceMetrics} />
                <div className="lg:w-[150px]">
                  Nombre total de visites de pages à travers tous les entonnoirs. Passez la souris pour obtenir plus de détails sur les performances des pages de l'entonnoir.
                </div>
              </CardContent>
              <Contact2 className="absolute right-4 top-4 text-muted-foreground" />
            </Card>
            <Card className="p-4 flex-1">
              <CardHeader>
                <CardTitle>Activité de commande</CardTitle>
              </CardHeader>
              <AreaChart
                className="text-sm stroke-primary"
                data={[]} // Remplacer avec les données réelles si nécessaire
                index="created"
                categories={['amount_total']}
                colors={['primary']}
                yAxisWidth={30}
                showAnimation={true}
              />
            </Card>
          </div>
          <div className="flex gap-4 xl:!flex-row flex-col">
            <Card className="p-4 flex-1 h-[450px] overflow-scroll relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Historique des transactions
                  <BadgeDelta
                    className="rounded-xl bg-transparent"
                    deltaType="moderateIncrease"
                    isIncreasePositive={true}
                    size="xs"
                  >
                    +12,3%
                  </BadgeDelta>
                </CardTitle>
                <Table>
                  <TableHeader className="!sticky !top-0">
                    <TableRow>
                      <TableHead className="w-[300px]">Email</TableHead>
                      <TableHead className="w-[200px]">Statut</TableHead>
                      <TableHead>Date de création</TableHead>
                      <TableHead className="text-right">Valeur</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="font-medium truncate">
                    {/* Remplacer avec les données réelles si nécessaire */}
                    <TableRow>
                      <TableCell>-</TableCell>
                      <TableCell>
                        <Badge className="bg-emerald-500 dark:text-black">
                          Payé
                        </Badge>
                      </TableCell>
                      <TableCell>-</TableCell>
                      <TableCell className="text-right">-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </BlurPage>
  )
}

export default SubaccountPageId
