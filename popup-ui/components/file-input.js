const cx = "mt-1 p-2 block w-full";

const FileInput = ({
  className = cx,
  type = "file",
  accept = ".json",
  ...props
}) => <input type={type} accept={accept} className={className} {...props} />;

export default FileInput;
