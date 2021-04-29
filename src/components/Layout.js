import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import ArchiveArticle from "../templates/archives/ArchiveArticle"

const Layout = () => {
  return (
    <>
      <Header />
      <ArchiveArticle/>
      <Footer />
    </>
  )
}

export default Layout
