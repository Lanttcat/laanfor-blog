import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./index.module.scss"

interface IProps {
  siteTitle: string
}

const Index: React.FC<IProps> = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.wp}>
      <div className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/blog" className={styles.link}>
          Blogs
        </Link>
        <Link to="/about" className={styles.link}>
          About Me
        </Link>
      </div>
      <div>
        <a href="https://twitter.com/name2less"> Twitter </a>
      </div>
    </div>
  </header>
)

Index.defaultProps = {
  siteTitle: ``,
}

export default Index
