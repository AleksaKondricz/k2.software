import React from "react"
import { Helmet } from "react-helmet"

{/*const PREVIEW_PIC =
"https://storage.googleapis.com/online-accessible-data/preview-image.png"*/}
const TITLE = "K2 Awesome Software"
const LONG_DESCRIPTION =
  "K2 Software is a digital component working with clients from all over the world. We deliver top-notch products for your businesses."
const SHORT_DESCRIPTION =
  "Turning visions into reality."

const HeadContainer = () => (
  <Helmet>
    <meta httpEquiv="content-language" content="en" />
    <meta charset="utf-8" />
    <title>{TITLE}</title>
    <meta name="title" content={SHORT_DESCRIPTION} />
    <meta image="./favicon-32x32.png" />
    <meta name="description" content={LONG_DESCRIPTION} />

    <meta name="robots" content="index, follow" />
    <meta property="author" content="K2 Software" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://k2-software.web.app" />
    <meta property="og:site_name" content={TITLE} />
    <meta property="og:title" content={SHORT_DESCRIPTION} />
    <meta property="og:description" content={LONG_DESCRIPTION} />
    {/*<meta property="og:image" content={PREVIEW_PIC} />*/}
    <meta property="og:image:secure_url" content="https://k2-software.web.app" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta itemProp="name" content={SHORT_DESCRIPTION} />
    <meta itemProp="description" content={LONG_DESCRIPTION} />
    {/*<meta itemProp="image" content={PREVIEW_PIC} />*/}

    <meta name="twitter:creator" content="@konkop" />
    <meta name="twitter:site" content="@konkop" />
    <meta name="twitter:title" content={SHORT_DESCRIPTION} />
    <meta name="twitter:description" content={LONG_DESCRIPTION} />
    <meta name="twitter:card" content="summary_large_image" />
   {/* <meta name="twitter:image" content={PREVIEW_PIC} />*/}
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
      rel="icon"
      type="image/png"
      href="./favicon-32x32.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="./favicon-16x16.png"
      sizes="16x16"
    />
  </Helmet>
)

export default HeadContainer