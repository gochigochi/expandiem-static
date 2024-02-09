import { useEffect } from 'react'

const useClick = (handleClick) => {

    useEffect(() => {

        document.addEventListener("click", handleClick)

        return () => document.removeEventListener("click", handleClick)
    }, [])
}

export default useClick