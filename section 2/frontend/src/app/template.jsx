import { AppProvider } from '@/context/AppContext'
import React, { Children } from 'react'
import Navbar from '@/components/navbar'

const Template = ({children}) => {
  return (
    <AppProvider>
        <Navbar />
        {/* this navbar in imported from componet navbar file  */}
        {children}
    </AppProvider>
  )
}

export default Template