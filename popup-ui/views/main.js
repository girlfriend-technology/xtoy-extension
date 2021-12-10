import { useContext } from 'react'
import { Context } from '../utils/context'
import EditorView from './editor-view'
import Header from '../components/header'
import Layout from '../components/layout'
import ListView from './list-view'
import Text from '../components/text'

const Main = () => {
  const { isEditing } = useContext(Context)

  return (
    <Layout>
      <Header />
      <Text>
        Replace words and links
      </Text>
      {isEditing
        ? <EditorView />
        : <ListView />}
    </Layout>
  )
}

export default Main
