import Link from 'next/link'
import React, { ReactElement } from 'react'

import { User } from 'interfaces'

type Props = {
  data: User
}

const ListItem = ({ data }: Props): ReactElement => (
  <Link as={`/users/${data.id}`} href="/users/[id]">
    {`${data.id}: ${data.name}`}
  </Link>
)

export default ListItem
