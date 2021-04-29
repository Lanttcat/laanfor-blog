/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Index from "../header/index"
import "../layout.css"
import "@fontsource/merriweather"

import * as styles from "../layout.module.scss"
import { blog } from "../../pages/blog"

interface IProp {
  children: React.ReactNode
  pageContext: {
    frontmatter: blog
  }
}

const Layout: React.FC<IProp> = ({ children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery1 {
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
        <h2>{pageContext.frontmatter.title}</h2>
        <p>{pageContext.frontmatter.date}</p>
        <p className={styles.tags}>
          {pageContext.frontmatter.tags.map((x, index) => (
            <span className={styles.tag} key={index}>{x}</span>
          ))}
        </p>
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
