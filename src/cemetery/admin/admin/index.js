import { useEffect } from "react";
import ResponsiveDrawer from "../../../shared/layout/drawer-layout";
import { Outlet } from "react-router-dom";
import { useUser } from '../../../hooks/useUser'

export const AdminPanel = () => {
  
  const {user} = useUser()

  useEffect(() => {
    console.log('user',user)
  },[user])
  
  return <ResponsiveDrawer user={{ user }} content={<Outlet />} />;
};
