import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { AboutInfo } from './content/about/main.js'
import { ContactInfo } from './content/contact/main.js'
import { FoodMenu } from './foodMenus/main.js'
import { Home } from './content/main.js'
import { PrivateParties } from './content/parties/main.js'
// import { ContactForm } from "@jalgraves/react-components-library"

export default function ReactRoutes() {
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
