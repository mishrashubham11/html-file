import { AppProvider } from '@/context/AppContext'
import React, { Children } from 'react'

const Template = () => {
  return (
    <AppProvider>
        {Children}
    </AppProvider>
  )
}

export default Template