import { useEffect, useState } from 'react'

export const useHasLoaderFinished = (delay = 2800) => {
    const [done, setDone] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setDone(true), delay)
        return () => clearTimeout(timer)
    }, [delay])

    return done
}
