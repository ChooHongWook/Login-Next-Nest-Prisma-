'use client'

import { ReactQueryProvider } from './ReactQueryProvider'
import { Provider as JotaiProvider } from 'jotai'
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <JotaiProvider>
        <ReactQueryProvider>  
                {children}
        </ReactQueryProvider>
    </JotaiProvider>
  )
}