import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
// Components
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import About from "../components/About";
import Skills from "../components/Skills";
import Promotion from "../components/Promotion";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Gallery />
    <Work />
    <Promotion />
    <About />
    <Skills />
    <Contact />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="BALRAJ AR DESIGNER" />

export default IndexPage
