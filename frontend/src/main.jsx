import { NextUIProvider } from '@nextui-org/react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './i18n/i18n.js'
import './index.css'
import { useTranslation } from 'react-i18next'

const AppRouter = () => {
	const { i18n } = useTranslation()

	const router = createBrowserRouter([
		{
			path: '/:locale',
			element: <App />,
		},
		{
			path: '*', // Catch all undefined paths
			element: <Navigate to={`/${i18n.language}`} replace />, // Redirect to the current language
		},
	])

	return <RouterProvider router={router} />
}

createRoot(document.getElementById('root')).render(
	<NextUIProvider>
		<AppRouter />
	</NextUIProvider>
)
