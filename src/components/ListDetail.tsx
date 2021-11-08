import React, { ReactElement } from 'react'
import { User } from 'interfaces'

type ListDetailProps = {
  item: User
}

const ListDetail = ({ item }: ListDetailProps): ReactElement => (
  <div>
    <h1>{`Name: ${item.name}`}</h1>
    <p>{`ID: ${item.id}`}</p>
  </div>
)

export default ListDetail
