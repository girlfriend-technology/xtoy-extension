import { useContext } from "react";
import { Context } from "../utils/context";
import Button from "../components/button";
import XToYList from "../components/x-to-y-list";

const ListView = () => {
  const { handleEdit, handleBackup } = useContext(Context);
  return (
    <div>
      <Button onClick={() => handleEdit()}>🌱 Create</Button>
      <div className="float-right">
        <Button theme="secondary" onClick={() => handleBackup()}>
          🛟 Backup
        </Button>
      </div>
      <XToYList />
    </div>
  );
};

export default ListView;
