import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import { clearDirtyQueriesListToEmitViaWebsocket } from "gatsby/dist/redux/actions/internal"

type blog = {
  title: string
  path: string
  date: string
}

interface INode {
  node: {
    frontmatter: blog
  }
}

interface IProps {
  data: {
    allMdx: {
      edges: INode[]
    }
  }
}

const Blog: React.FC<IProps> = ({ data }) => {
  const allBlog = data.allMdx.edges.map((x: INode) => x.node.frontmatter)
  return (
    <Layout>
      <Seo title="Blog" />
      <div>
        <ul>
          {allBlog.map((data, index) => (
            <li key={index}>
              <Link to={data.path}>{data.title}</Link>
              <div>{data.date}</div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AllMdxQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
            date(fromNow: true, formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`

export default Blog
