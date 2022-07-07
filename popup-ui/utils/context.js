import { createContext, useState, useEffect } from "react";
import { getStorage, setStorage } from "./storage";
import checkConfig from "./check-config";
import example from "../constants/example";
import filter from "lodash/filter";
import find from "lodash/find";
import has from "lodash/has";
import map from "lodash/map";

const Context = createContext({});
const Provider = ({ children, data: initialData = [] }) => {
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [isValidConfigImport, setIsValidConfigImport] = useState(null);

  useEffect(() => {
    getStorage().then((storage) => {
      if (has(storage, "data")) {
        setData(storage.data);
      }
    });
  }, []);

  useEffect(() => {
    setStorage(data);
  }, [data]);

  const handleEdit = (id) => {
    setEditID(id);
    setIsEditing(true);
    setIsBackingUp(false);
  };

  const handleSave = (editedItem) => {
    const isNew = !find(data, { id: editedItem.id });
    if (isNew) {
      setData([...data, editedItem]);
    } else {
      setData(
        map(data, (item) => {
          if (editedItem.id === item.id) {
            return editedItem;
          }
          return item;
        })
      );
    }
    setEditID(null);
    setIsEditing(false);
  };

  const handleEnableToggle = (id) => {
    setData(
      map(data, (item) => {
        if (item.id === id) {
          item.enabled = !item.enabled;
        }
        return item;
      })
    );
  };

  const handleCancel = () => {
    setEditID(null);
    setIsEditing(false);
    setIsBackingUp(false);
  };

  const handleDelete = (id) => {
    setData(filter(data, (o) => o.id !== id));
    handleCancel();
  };

  const handleBackup = () => {
    setIsBackingUp(true);
    setIsEditing(false);
  };

  const handleImport = (e) => {
    setIsValidConfigImport(null);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      let json;
      try {
        json = JSON.parse(reader.result);
      } catch (e) {
        setIsValidConfigImport(false);
        return;
      }
      checkConfig(json).then((isValid) => {
        setIsValidConfigImport(isValid);
        if (isValid) {
          setData(json);
          setIsBackingUp(false);
        }
      });
    };
    reader.readAsText(file);
  };

  const handleExport = () => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "xtoy-config.json";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const handleAddExamples = () => setData(example);

  const context = {
    data,
    editID,
    handleAddExamples,
    handleBackup,
    handleCancel,
    handleDelete,
    handleEdit,
    handleEnableToggle,
    handleExport,
    handleImport,
    handleSave,
    isBackingUp,
    isEditing,
    isValidConfigImport,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

const { Consumer } = Context;

export { Context, Provider as ContextProvider, Consumer as ContextConsumer };
