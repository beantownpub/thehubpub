import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { AboutInfo } from './content/about/main'
import { ContactInfo } from './content/contact/main'
import { FoodMenu } from './foodMenus/main'
import { Home } from './content/main'
import { PrivateParties } from './content/parties/main'

export default function ReactRoutes() {
    console.log('Rendering reactRoutes')
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<AboutInfo/>} />
                <Route path="contact" element={<ContactInfo/>} />
                <Route path="menu" element={<FoodMenu/>} />
                <Route path="parties" element={<PrivateParties/>} />
            </Routes>
        </BrowserRouter>
    )
}
