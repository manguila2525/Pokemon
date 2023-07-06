import { Navbar, Sidebar } from '../molecules'
import { Outlet } from 'react-router-dom'
import './styles.css'
export const Layout = () => {
	return (
		<div>
			<Navbar />
			<div className="flex">
				<div className="sidebar">
					<Sidebar />
				</div>
				<div className="main">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
