import { useContext } from 'react'
import { Context } from '../utils/context'
import Button from '../components/button'
import List from '../components/list'
import Text from '../components/text'
import XToYItem from '../components/x-to-y-item'
import isEmpty from 'lodash/isEmpty'

const cx = {
  em: 'border-b-2 border-purple-500',
  text: 'py-2 inline-block',
  empty: 'my-4 italic'
}

const XToYList = () => {
  const { data, handleAddExamples } = useContext(Context)

  if (isEmpty(data)) {
    return (
      <div>
        <Text className={cx.empty}>
          You have not created an X to Y replacement yet.
        </Text>
        <Button onClick={handleAddExamples}>
          📜 Load examples
        </Button>
      </div>
    )
  }

  return (
    <List>
      {data.map(item => (
        <XToYItem item={item} key={item.id} />
      ))}
    </List>
  )
}

export default XToYList
