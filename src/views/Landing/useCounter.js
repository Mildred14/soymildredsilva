import { useEffect, useState } from "react"

export const useCounter = (maxNumber, delay) => {
  const [counter, setCounter] = useState(1)
  let counting = 0

  useEffect(() => {
    setTimeout(function() {
      const interval = setInterval(() => {
        if (counting < maxNumber) {
          const isABigNumber = maxNumber > 100000
          const increment = isABigNumber ? 1000 : 1
          counting += increment
          isABigNumber ? setCounter(counting / 1000) : setCounter(counting)
        } else {
          clearInterval(interval)
        }
      }, delay)
    }, 50);
  }, [])

  return counter
}
