import React, {useState} from "react";
import AdminSidebar from "./sidebar";
import AdminHeader from "./header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  return (
    <div className="flex min-h-screen w-full">
        <AdminSidebar open={openSidebar} setOpen={setOpenSidebar}/>
        <div className="flex flex-1 flex-col">
            <AdminHeader setOpen={setOpenSidebar} />
            <main className="flex-1 flex flex-col bg-muted/40 p-4 md:p-6">
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default AdminLayout;