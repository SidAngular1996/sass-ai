'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import SideBar from './SideBar'
import useClient from '@/hook/useClient'

const MobileSideBar = () => {
  const { isMounted } = useClient()

  if (!isMounted) return null

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0">
        <SideBar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSideBar