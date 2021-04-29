import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "../assets/scss/footer.scss"

const shortid = require("shortid")

export default function Footer() {
  const footer = useStaticQuery(graphql`
    query {
      wpgraphql {
        generalSettings {
          url
        }
        themeFooterSettings {
          opt_footer {
            firstMenuHeading
            firstMenuItems {
              linkText
              icon {
                altText
                uri
                mediaItemUrl
              }
            }
            secondMenuHeading
            secondMenuItems {
              linkText
              icon {
                altText
                uri
                mediaItemUrl
              }
            }
            thirdMenuHeading
            thirdMenuItems {
              linkText
              icon {
                altText
                uri
                mediaItemUrl
              }
            }
            forthMenuHeading
            forthMenuItems {
              linkText
              icon {
                altText
                uri
                mediaItemUrl
              }
            }
            footerLogo {
              altText
              mediaItemUrl
            }
            socialLinks {
              link
              logo {
                altText
                mediaItemUrl
                uri
              }
            }
            subscribeFormText
            copywriteText
            supportIcons {
              link
              icon {
                altText
                link
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `)

  const { url } = footer.wpgraphql.generalSettings
  const {
    altText,
    mediaItemUrl,
  } = footer.wpgraphql.themeFooterSettings.opt_footer.footerLogo

  const footerOptions = footer.wpgraphql.themeFooterSettings.opt_footer

  const TopSectionFooter = () => {
    return (
      <div className="footer__top-section">
        <div className="logo-footer">
          <Link className="footer__home" to={url}>
            <img src={mediaItemUrl} alt={altText} />
          </Link>
        </div>
        <div className="social">
          <ul className="social__item">
            {footerOptions.socialLinks.map(social => {
              return (
                <li key={shortid.generate()}>
                  <Link to={social.link} target="_blank">
                    <img
                      src={social.logo.mediaItemUrl}
                      alt={social.logo.title}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

  const NavSectionFooter = () => {
    return (
      <div className="footer__nav-section">
        <div className="footer__nav-block nav-guide">
          <h3>{footerOptions.firstMenuHeading}</h3>
          <nav className="footer-nav__nav">
            <ul className="footer-nav__nav-item">
              {footerOptions.firstMenuItems.map(item => {
                return (
                  <li key={shortid.generate()}>
                    <Link to={item.icon.uri} target="_blank">
                      <img
                        src={item.icon.mediaItemUrl}
                        alt={item.icon.altText}
                      />
                      {item.linkText}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <div className="footer__nav-block nav-games">
          <h3>{footerOptions.secondMenuHeading}</h3>
          <nav className="footer__nav">
            <ul className="footer-nav__nav-item">
              {footerOptions.secondMenuItems.map(item => {
                return (
                  <li key={shortid.generate()}>
                    <Link to={item.icon.uri} target="_blank">
                      <img
                        src={item.icon.mediaItemUrl}
                        alt={item.icon.altText}
                      />
                      {item.linkText}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <div className="footer__nav-block nav-casino">
          <h3>{footerOptions.thirdMenuHeading}</h3>
          <nav className="footer__nav">
            <ul className="footer-nav__nav-item">
              {footerOptions.thirdMenuItems.map(item => {
                return (
                  <li key={shortid.generate()}>
                    <Link to={item.icon.uri} target="_blank">
                      <img
                        src={item.icon.mediaItemUrl}
                        alt={item.icon.altText}
                      />
                      {item.linkText}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <div className="footer__nav-block nav-about">
          <h3>{footerOptions.forthMenuHeading}</h3>
          <nav className="footer__nav">
            <ul className="footer-nav__nav-item">
              {footerOptions.forthMenuItems.map(item => {
                return (
                  <li key={shortid.generate()}>
                    <Link to={item.icon.uri} target="_blank">
                      <img
                        src={item.icon.mediaItemUrl}
                        alt={item.icon.altText}
                      />
                      {item.linkText}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    )
  }

  const BottomSectionFooter = () => {
    return (
      <div className="footer__bottom-section">
        <div className="form-container">
          <h3>{footerOptions.subscribeFormText}</h3>
          <div className="form"></div>
        </div>
        <div className="support-spons">
          <ul className="support-spons__item">
            {footerOptions.supportIcons.map(supportIcon => {
              return (
                <li key={shortid.generate()}>
                  <Link to={supportIcon.link} target="_blank">
                    <img
                      src={supportIcon.icon.mediaItemUrl}
                      alt={supportIcon.icon.altText}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="copywrite">
          <p>{footerOptions.copywriteText}</p>
        </div>
      </div>
    )
  }

  return (
    <footer className="footer" style={{ backgroundColor: "#3a3a3a" }}>
      <div className="container">
        <TopSectionFooter />
        <NavSectionFooter />
        <BottomSectionFooter />
      </div>
    </footer>
  )
}
