const ThemeButton = ({ setTheme, theme }) => {
  return (
    <>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="absolute top-10 right-10 px-4 py-2 cursor-pointer hover:opacity-80 font-bold
        bg-gray-900 dark:bg-white text-white dark:text-indigo-500 text-xl border-2 rounded-lg"
      >
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </>
  )
}

export default ThemeButton
