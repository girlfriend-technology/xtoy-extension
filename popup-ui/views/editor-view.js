import { useContext, useState } from 'react'
import { Context } from '../utils/context'
import Button from '../components/button'
import Checkbox from '../components/checkbox'
import Label from '../components/label'
import TextInput from '../components/text-input'
import find from 'lodash/find'
import get from 'lodash/get'
import has from 'lodash/has'
import isEmpty from 'lodash/isEmpty'

const Editor = () => {
  const {
    handleCancel,
    handleDelete,
    handleSave,
    data,
    editID
  } = useContext(Context)
  const item = find(data, ['id', editID])
  const [isNew] = useState(!has(item, 'id'))
  const [x, setX] = useState(get(item, 'x', ''))
  const [y, setY] = useState(get(item, 'y', ''))
  const [links, setLinks] = useState(get(item, 'links', false))
  const [enabled] = useState(get(item, 'enabled', true))
  const [id] = useState(get(item, 'id', Date.now()))

  const newItem = {
    enabled,
    id,
    links,
    x,
    y
  }

  const handleSubmit = () => {
    if (!isEmpty(x)) {
      handleSave(newItem)
    }
  }

  return (
    <div>
      <Label>
        🔍 Find X
        <TextInput
          placeholder='text or /regex/i'
          defaultValue={x}
          onChange={e => setX(get(e, 'target.value', ''))}
          required
        />
      </Label>
      <Label>
        ✏️ Replace with Y
        <TextInput
          placeholder='text'
          defaultValue={y}
          onChange={e => setY(get(e, 'target.value', ''))}
        />
      </Label>
      <Label>
        <Checkbox
          defaultChecked={links}
          onChange={e => setLinks(get(e, 'target.checked', false))}
        />
        🔗 Link mode
      </Label>
      <div className='text-right'>
        {isNew
          ? (
            <Button
              theme='secondary'
              onClick={handleCancel}
            >
              Cancel
            </Button>
            )
          : (
            <Button
              theme='secondary'
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
            )}
        <Button type='submit' onClick={handleSubmit}>💾 Save</Button>
      </div>
    </div>
  )
}

export default Editor
