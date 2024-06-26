import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from '../src/section/Navbar.jsx'
import Presentation from '../src/section/Presentation.jsx'
import Blog from '../src/section/Blog.jsx'
import Projects from './section/Projects.jsx'
import Footer from './section/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Presentation></Presentation>
    <Blog></Blog>
    <Projects></Projects>
    <Footer></Footer>
  </React.StrictMode>,
)
