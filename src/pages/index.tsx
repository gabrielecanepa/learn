import Button from 'components/button'
import Layout from 'components/layout'
import React, { ReactElement } from 'react'

const IndexPage = (): ReactElement => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>{'Hello Next.js 👋'}</h1>
    <Button color="red" to="/about">
      {'About'}
    </Button>
    <Button color="yellow" to="https://github.com">
      {'GitHub'}
    </Button>
  </Layout>
)

export default IndexPage
