const cx = 'mt-4'

const List = ({ children, className = cx, ...props }) => (
  <ul className={className} {...props}>
    {children}
  </ul>
)

export default List
