import Link from 'next/link'
import React, { ReactElement } from 'react'

import Layout from 'components/layout'

const About = (): ReactElement => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>{'About'}</h1>
    <p>{'This is the about page'}</p>
    <p>
      <Link href="/">{'Go home'}</Link>
    </p>
  </Layout>
)

export default About
