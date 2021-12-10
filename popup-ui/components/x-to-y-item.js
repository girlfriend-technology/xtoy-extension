import { useContext } from 'react'
import { Context } from '../utils/context'
import ListItem from './list-item'
import Text from './text'
import Checkbox from './checkbox'

const cx = {
  item: 'flex flex-row content-start items-start',
  em: 'border-b-2 border-purple-500 break-all',
  text: 'pb-4 flex-1 align-top cursor-pointer'
}

const XToYItem = ({ item }) => {
  const { handleEdit, handleEnableToggle } = useContext(Context)
  return (
    <ListItem className={cx.item}>
      <Checkbox defaultChecked={item.enabled} onClick={() => handleEnableToggle(item.id)} />
      <Text className={cx.text} onClick={() => handleEdit(item.id)}>
        {item.links ? '🔗' : '🔍'} <em className={cx.em}>{item.x}</em> to ✏️ <em className={cx.em}>{item.y}</em>
      </Text>
    </ListItem>
  )
}

export default XToYItem
