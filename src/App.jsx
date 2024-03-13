import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import BrandLogo from './components/BrandLogo/BrandLogo'
import Services from './components/Service/Services'
import Testimontials from './components/Testimontials/Testimontials.jsx'
import BlogsComp from './components/Blogs/BlogsComp.jsx'
import Footer from './components/Footer/Footer.jsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
  }, [])
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandLogo />
      <Services />
      <Testimontials />
      <BlogsComp />
      <Footer />
    </div>
  )
}

export default App
