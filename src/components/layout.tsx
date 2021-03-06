/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Index from "./header/index"
import "./layout.css"
import "@fontsource/merriweather"

import * as styles from "./layout.module.scss"

interface IProp {
  children: React.ReactNode
}

const Layout: React.FC<IProp> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Index siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={styles.layout}>
        <main style={{ minHeight: `60vh` }}>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> by Laanfor.
        </footer>
      </div>
    </>
  )
}

export default Layout
