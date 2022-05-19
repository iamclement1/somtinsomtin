import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from "cdbreact";
import { Link, NavLink } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Logo from '../../Assets/sometinlogo250-150-red.png'

const Sidebar=( { children })=>{
    return (
        <div className="flex">
            <div style={{display:'fixed', height:'100vh', overflow:'scroll initial'}}
        className="">
            <CDBSidebar textColer="#fff"
            className="login-background">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <div className="flex space-x-1 text-center">
                        <div>
                            <img src={ Logo } alt="brand-logo" className="w-8" />
                        </div>
                        <div className="nav-item nav-link">
                            <Link to="/dashboard" className="text-white
                            no-underline">Dashboard</Link>
                        </div>
                    </div>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{textAlign:'center'}}>
                    <div className="sidebar-btn-wrapper" style={{ padding :'20px 5px' }}>
                        &copy; somtin 2022
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
            <div>
                <Navbar />
                { children }
            </div>
        </div>
    )
}

export default Sidebar;