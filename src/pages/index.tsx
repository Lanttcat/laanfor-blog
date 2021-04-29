import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Introduce from "../components/introduce"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Introduce />
    {/*<StaticImage*/}
    {/*  src="../images/gatsby-astronaut.png"*/}
    {/*  width={300}*/}
    {/*  quality={95}*/}
    {/*  formats={[`auto`, `webp`, `avif`]}*/}
    {/*  alt="A Gatsby astronaut"*/}
    {/*  style={{ marginBottom: `1.45rem` }}*/}
    {/*/>*/}
    {/*<p>*/}
    {/*  <Link to="/page-2/">Go to page 2</Link> <br />*/}
    {/*  <Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}
    {/*</p>*/}
  </Layout>
)

export default IndexPage
