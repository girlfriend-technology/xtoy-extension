import { useContext } from "react";
import { Context } from "../utils/context";
import Button from "../components/button";
import Label from "../components/label";
import FileInput from "../components/file-input";
import Text from "../components/text";

const Backup = () => {
  const { handleCancel, handleExport, handleImport, isValidConfigImport } =
    useContext(Context);

  return (
    <div>
      {isValidConfigImport === false ? (
        <Text className="mb-4 font-semibold text-red-700">
          Invalid config file
        </Text>
      ) : (
        <>
          <Text>Importing will replace all of your settings.</Text>
          <Text>Exporting is a good way to prevent losing your settings.</Text>
        </>
      )}
      <Label>
        📥 Import file
        <FileInput onChange={handleImport} className="hidden" />
      </Label>
      <Label>
        📤 Export file
        <Button onClick={handleExport} className="hidden" />
      </Label>
      <Button onClick={handleCancel}>🏁 Done</Button>
    </div>
  );
};

export default Backup;
