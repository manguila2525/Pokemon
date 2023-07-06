import { createBrowserRouter } from 'react-router-dom'
import { HomeView } from './Pages'
import { Layout } from './components/Layout/Layout'
export const Routes = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomeView />,
			},
		],
	},
])
