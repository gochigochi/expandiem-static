import { useEffect } from 'react'

const useClick = (handleClick: (event: React.MouseEvent<HTMLDivElement> & { target: HTMLElement }) => void) => {

    useEffect(() => {

        document.addEventListener("click", handleClick)

        return () => document.removeEventListener("click", handleClick)
    }, [])
}

export default useClick