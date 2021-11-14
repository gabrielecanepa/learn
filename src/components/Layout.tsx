import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement, ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
}

const Layout = ({ children, title }: Props): ReactElement => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
    </Head>
    <header>
      <nav>
        <Link href="/">{'Home'}</Link>
        {' | '}
        <Link href="/about">{'About'}</Link>
        {' | '}
        <Link href="/users">{'Users List'}</Link>
        {' | '}
        <Link href="/example">{'Just an example'}</Link>
        {' | '}
        <Link href="/api/users">{'Users API'}</Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>{"I'm here to stay (Footer)"}</span>
    </footer>
  </>
)

export default Layout
