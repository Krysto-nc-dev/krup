'use client'
import Loading from '@/components/global/loading'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/components/ui/use-toast'
import { EditorBtns } from '@/lib/constants'
import { getFunnel, getSubaccountDetails } from '@/lib/queries'
import { EditorElement, useEditor } from '@/providers/editor/editor-provider'
import clsx from 'clsx'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'

type Props = {
  element: EditorElement
}

const Checkout = (props: Props) => {
  const { dispatch, state, subaccountId, funnelId, pageDetails } = useEditor()
  const router = useRouter()
  const styles = props.element.styles

  useEffect(() => {
    if (!subaccountId) return
    const fetchData = async () => {
      const subaccountDetails = await getSubaccountDetails(subaccountId)
      if (subaccountDetails) {
        // Do something with the subaccount details if necessary
      }
    }
    fetchData()
  }, [subaccountId])

  useEffect(() => {
    if (funnelId) {
      const fetchData = async () => {
        const funnelData = await getFunnel(funnelId)
        // Do something with the funnel data if necessary
      }
      fetchData()
    }
  }, [funnelId])

  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch({
      type: 'CHANGE_CLICKED_ELEMENT',
      payload: {
        elementDetails: props.element,
      },
    })
  }

  const goToNextPage = async () => {
    if (!state.editor.liveMode) return
    const funnelPages = await getFunnel(funnelId)
    if (!funnelPages || !pageDetails) return
    if (funnelPages.FunnelPages.length > pageDetails.order + 1) {
      const nextPage = funnelPages.FunnelPages.find(
        (page) => page.order === pageDetails.order + 1
      )
      if (!nextPage) return
      router.replace(
        `${process.env.NEXT_PUBLIC_SCHEME}${funnelPages.subDomainName}.${process.env.NEXT_PUBLIC_DOMAIN}/${nextPage.pathName}`
      )
    }
  }

  const handleDeleteElement = () => {
    dispatch({
      type: 'DELETE_ELEMENT',
      payload: { elementDetails: props.element },
    })
  }

  return (
    <div
      style={styles}
      draggable
      onDragStart={(e) => handleDragStart(e, 'contactForm')}
      onClick={handleOnClickBody}
      className={clsx(
        'p-[2px] w-full m-[5px] relative text-[16px] transition-all flex items-center justify-center',
        {
          '!border-blue-500':
            state.editor.selectedElement.id === props.element.id,

          '!border-solid': state.editor.selectedElement.id === props.element.id,
          'border-dashed border-[1px] border-slate-300': !state.editor.liveMode,
        }
      )}
    >
      {state.editor.selectedElement.id === props.element.id &&
        !state.editor.liveMode && (
          <Badge className="absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg ">
            {state.editor.selectedElement.name}
          </Badge>
        )}

      <div className="border-none transition-all w-full">
        <div className="flex flex-col gap-4 w-full">
          {/* You can add any custom content or logic here */}
          <div className="flex items-center justify-center w-full h-40">
            <Loading />
          </div>
        </div>
      </div>

      {state.editor.selectedElement.id === props.element.id &&
        !state.editor.liveMode && (
          <div className="absolute bg-primary px-2.5 py-1 text-xs font-bold  -top-[25px] -right-[1px] rounded-none rounded-t-lg !text-white">
            <Trash
              className="cursor-pointer"
              size={16}
              onClick={handleDeleteElement}
            />
          </div>
        )}
    </div>
  )
}

export default Checkout
