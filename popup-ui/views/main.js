import { useContext } from "react";
import { Context } from "../utils/context";
import EditorView from "./editor-view";
import Header from "../components/header";
import Layout from "../components/layout";
import ListView from "./list-view";
import Text from "../components/text";
import BackupView from "./backup-view";

const Main = () => {
  const { isEditing, isBackingUp } = useContext(Context);

  return (
    <Layout>
      <Header />
      <Text>Replace words and links</Text>
      {isBackingUp && <BackupView />}
      {isEditing && <EditorView />}
      {!isEditing && !isBackingUp && <ListView />}
    </Layout>
  );
};

export default Main;
