import React from 'react'
import { Helmet } from 'react-helmet'

interface HelmetProps {
  title: string
  description: string
  ogImage: string
}

export const HeadHelmet: React.FC<HelmetProps> = ({ title, description, ogImage }) => (
  <Helmet
    title="Home"
    meta={[
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@andrewdayoooo' },
      { property: 'og:title', content: `${title}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${window.location.href}` },
      { property: 'og:image', content: `${ogImage}` },
      { property: 'og:description', content: `${description}` }
    ]}
  />
)
