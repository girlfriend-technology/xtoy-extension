const cx = 'text-xl font-semibold border-b-2 border-purple-500 mb-3'

const Header = ({ children, className = cx, ...props }) => (
  <h1 className={className} {...props}>
    X to Y
  </h1>
)

export default Header
