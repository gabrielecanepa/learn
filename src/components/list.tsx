import ListItem from 'components/list-item'
import React, { ReactElement } from 'react'
import { User } from 'interfaces'

type Props = {
  items: User[]
}

const List = ({ items }: Props): ReactElement => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
