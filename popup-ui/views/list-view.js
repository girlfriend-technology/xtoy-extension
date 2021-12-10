import { useContext } from 'react'
import { Context } from '../utils/context'
import Button from '../components/button'
import XToYList from '../components/x-to-y-list'

const ListView = () => {
  const { handleEdit } = useContext(Context)
  return (
    <div>
      <Button onClick={() => handleEdit()}>🌱 Create</Button>
      <XToYList />
    </div>
  )
}

export default ListView
