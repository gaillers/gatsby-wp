import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Header(props) {
  const menu = useStaticQuery(graphql`
    query MyQuery {
      wpgraphql {
        generalSettings {
          url
        }
        menu(id: "dGVybToy") {
          name
          menuItems {
            nodes {
              id
              label
              url
            }
          }
        }
        themeGeneralSettings {
          option_header {
            headerLogo {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  `)

  const { url } = menu.wpgraphql.generalSettings
  const { title } = props
  const {
    altText,
    mediaItemUrl,
  } = menu.wpgraphql.themeGeneralSettings.option_header.headerLogo

  const items = menu.wpgraphql.menu.menuItems.nodes.map(item => ({
    ...item,
    url: item.url.replace(url, ""),
  }))

  return (
    <header className="header" style={{ backgroundColor: "#1e90ff" }}>
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="home">
            <img src={mediaItemUrl} alt={altText} />
          </Link>
        </div>
          <nav className="nav">
            <ul className="nav__item">
              {items.map(item => (
                <li
                  key={item.id}
                  className={`nav__link ${title === item.label ? "link" : ""}`}
                >
                  <Link to={item.url}>
                    {item.label}
                  </Link>

                  {/* <ul className="dropdown">
                        {dropdowns.map(dropdown => (
                          <li
                            key={dropdown.id}
                            className={`menu-item ${
                              title === dropdown.label ? "current-menu-item" : ""
                            }`}
                          >
                            <Link key={dropdown.url} to={dropdown.url}>
                              {dropdown.label}
                            </Link>
                          </li>
                        ))}
                      </ul> */}
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </header>
  )
}
