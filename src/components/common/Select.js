const Select = ({ children, ...rest }) => {
  return <select className="select select-info w-full mb-2" {...rest}>
    {children}
  </select>
}

const Option = ({ label, ...rest }) => {
  return <option {...rest}>{label}</option>
}

export { Select, Option }