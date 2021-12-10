import { createContext, useState, useEffect } from 'react'
import { getStorage, setStorage } from './storage'
import example from '../constants/example'
import filter from 'lodash/filter'
import find from 'lodash/find'
import has from 'lodash/has'
import map from 'lodash/map'

const Context = createContext({})
const Provider = ({ children, data: initialData = [] }) => {
  const [data, setData] = useState(initialData)
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)

  useEffect(() => {
    getStorage().then(storage => {
      if (has(storage, 'data')) {
        setData(storage.data)
      }
    })
  }, [])

  useEffect(() => {
    setStorage(data)
  }, [data])

  const handleEdit = id => {
    setEditID(id)
    setIsEditing(true)
  }

  const handleSave = editedItem => {
    const isNew = !find(data, { id: editedItem.id })
    if (isNew) {
      setData([...data, editedItem])
    } else {
      setData(map(data, item => {
        if (editedItem.id === item.id) {
          return editedItem
        }
        return item
      }))
    }
    setEditID(null)
    setIsEditing(false)
  }

  const handleEnableToggle = id => {
    setData(
      map(data, item => {
        if (item.id === id) {
          item.enabled = !item.enabled
        }
        return item
      })
    )
  }

  const handleCancel = () => {
    setEditID(null)
    setIsEditing(false)
  }

  const handleDelete = id => {
    setData(filter(data, o => o.id !== id))
    handleCancel()
  }

  const handleAddExamples = () => setData(example)

  const context = {
    data,
    editID,
    handleAddExamples,
    handleCancel,
    handleDelete,
    handleEdit,
    handleEnableToggle,
    handleSave,
    isEditing
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}

const { Consumer } = Context

export {
  Context,
  Provider as ContextProvider,
  Consumer as ContextConsumer
}
