import { useState, useEffect } from 'react';
type ThemeColors = 'blue' | 'pink' |  'lightBlue'

const useTheme = (): [ThemeColors, (color: ThemeColors) => void] => {
  const isClient = typeof window !== 'undefined';
  const initialTheme = isClient ? localStorage.getItem('theme') as ThemeColors || 'blue' : 'blue';
  const [theme, setTheme] = useState<ThemeColors>(initialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  const setThemeColor = (color:ThemeColors) => {
    setTheme(color)
  }

  return [theme, setThemeColor]
}

export default useTheme