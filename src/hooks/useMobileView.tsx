import { useState, useEffect } from 'react'

import { MOBILE_TRESHOLD } from '../constants'

export const useMobileView = (): boolean => {
  const [widthSize, setWidthSize] = useState({ width: 0 })
  const { width } = widthSize

  useEffect(() => {
    const reportWindowSize = function getWidth(): void {
      setWidthSize({ width: window.innerWidth })
    }

    window.addEventListener('resize', reportWindowSize)

    return () => window.removeEventListener('resize', reportWindowSize)
  })

  console.log({ width })

  return width < MOBILE_TRESHOLD
}
