import { useContext, useState } from "react"
import { StyledSecHome } from "./styled"
import { SecPerfil } from "../../Components/InfoUser"
import { Header } from "../../Components/Header"
import { AuthContext } from "../../Context/AuthContext"
import { SecContacts } from "../../Components/Contacts"

 
export const Home = () => {

    const { InfoUser } = useContext(AuthContext)

    return(
        <StyledSecHome>
            <Header />
            <SecPerfil InfoUser={InfoUser}/>
            <SecContacts InfoUser={InfoUser}/>
        </StyledSecHome>
    )
}
