import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Menu from "./Menu";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Wrapper = (props: any) => {
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        (
            async () => {
                try {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { data } = await axios.get('user')
                } catch (e) {
                    setRedirect(true)
                }
            }
        )()
    }, [])

    if(redirect) {
        return <Navigate to='/login' />
    }

    return (
        <>
            <Nav />

            <div className="container-fluid">
            <div className="row">
                <Menu />

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {props.children}
                </main>
            </div>
            </div>
        </>
    )
}

export default Wrapper