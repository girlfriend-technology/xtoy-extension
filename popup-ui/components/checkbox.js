const cx = 'mt-1 mr-2 align-top'

const Checkbox = ({ className = cx, type = 'checkbox', ...props }) => (
  <input type={type} className={className} {...props} />
)

export default Checkbox
