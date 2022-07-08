const cx =
  "font-mono mt-1 p-2 text-black block h-48 w-full rounded-md border-purple-500 border-2";

const Textarea = ({ className = cx, ...props }) => (
  <textarea className={className} {...props} />
);

export default Textarea;
