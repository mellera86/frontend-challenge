const Checkbox = ({ label, error, touched, ...rest }) => {
  return <div className="mb-4">
    <label className="label cursor-pointer flex justify-start gap-2">
      <input type="checkbox" className="checkbox" {...rest} />
      <span className="text-lg">{label}</span>
    </label>
    {!!error && !!touched && <div className="text-red-500">{error}</div>}
  </div>
}

export { Checkbox }