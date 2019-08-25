import React from "react"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
        
        >
          
        </h1>
      )
    } else {
      header = (
        <h3
          
        >{title}
          
        </h3>
      )
    }
    return (
      <div
        
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          
        </footer>
      </div>
    )
  }
}

export default Layout
