import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./index.module.scss"

interface IProps {
  siteTitle: string
}

const Index: React.FC<IProps> = ({ siteTitle }) => (
  <header className={styles.header}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link to="/blog/">Blogs</Link> <br />
      {/*<h1 style={{ margin: 0 }}>*/}
      {/*  <Link*/}
      {/*    to="/"*/}
      {/*    style={{*/}
      {/*      color: `white`,*/}
      {/*      textDecoration: `none`,*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {siteTitle}*/}
      {/*  </Link>*/}
      {/*</h1>*/}
    </div>
  </header>
)

Index.defaultProps = {
  siteTitle: ``,
}

export default Index
