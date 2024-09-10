'use client'
import { NextUIProvider } from '@nextui-org/react'

export const ProviderNextUI = ({ children }) => {
	return <NextUIProvider>{children}</NextUIProvider>
}
