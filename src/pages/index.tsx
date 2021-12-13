import Link from 'next/link'
import React, { ReactElement } from 'react'

import Layout from 'components/layout'

const IndexPage = (): ReactElement => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>{'Hello Next.js 👋'}</h1>
    <p>
      <Link href="/about">{'About'}</Link>
    </p>
  </Layout>
)

export default IndexPage
