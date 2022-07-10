import { useContext, useEffect, useState } from "react";
import { Context } from "../utils/context";
import Button from "../components/button";
import Label from "../components/label";
import FileInput from "../components/file-input";
import Text from "../components/text";
import Textarea from "../components/textarea";

const Backup = () => {
  const {
    data,
    handleCancel,
    handleExport,
    handleImport,
    handleUpdateConfig,
    isValidConfigImport,
  } = useContext(Context);

  const isBrowser = typeof window !== "undefined";
  const isSafari =
    isBrowser && navigator.userAgent.split(" ").at(-1).includes("Safari");
  const isFirefox =
    isBrowser && navigator.userAgent.split(" ").at(-1).includes("Firefox");

  return (
    <div>
      {isValidConfigImport === false && (
        <Text className="mb-4 font-semibold text-red-700">
          Invalid config file
        </Text>
      )}
      {isFirefox ? (
        <Text>
          ⚠️ Firefox will not let us import a file, so you will need to paste
          the contents of your JSON file in the text box below.
        </Text>
      ) : (
        <Label>
          📥 Import file
          <FileInput onChange={handleImport} className="hidden" />
        </Label>
      )}
      {isSafari ? (
        <Text>
          ⚠️ Safari will not let us export a file, so you will need to copy the
          contents of the text box below and save it to a JSON file by hand.
        </Text>
      ) : (
        <Label>
          📤 Export file
          <Button onClick={handleExport} className="hidden" />
        </Label>
      )}
      <Label>
        Manually edit config
        <Textarea
          onChange={handleUpdateConfig}
          defaultValue={JSON.stringify(data, null, 2)}
        />
      </Label>
      <Button onClick={handleCancel}>🏁 Done</Button>
    </div>
  );
};

export default Backup;
