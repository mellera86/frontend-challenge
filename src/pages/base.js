const BasePage = ({ children }) => {
  return <main className="flex justify-center items-start pt-[10vh] h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300 to-cyan-200">
    {children}
  </main>
}

export { BasePage };