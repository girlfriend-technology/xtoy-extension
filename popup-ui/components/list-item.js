const cx = ''

const ListItem = ({ children, className = cx, ...props }) => (
  <li className={className} {...props}>
    {children}
  </li>
)

export default ListItem
