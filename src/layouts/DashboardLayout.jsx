import { Navigate, Outlet } from "react-router-dom";
import {Grid, GridItem} from '@chakra-ui/react'
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

function DashboardLayout() {
    const [token,setToken]=  useState(null)
    useEffect(()=> {
        const t= localStorage.getItem('token')
        setToken(t)
    }, [token])
    return (
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.200">
            <GridItem
            as="aside"
            // colSpan={{ base: 6, lg: 2, xl: 1}}
            bg="blue.700"
            w= '20em'
            minHeight={{ lg: '100vh'}}
            p={{ base: '20px', lg: '30px'}}
            >
                <Sidebar />
            </GridItem>
            <GridItem
            as="main"
            colSpan={{ base: 6, lg: 4, xl: 5}}
            p="40px"
            >
            <Breadcrumbs />
            <Outlet />
            </GridItem>
        </Grid>
    )
}

export default DashboardLayout;