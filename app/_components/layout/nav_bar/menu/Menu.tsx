import { Dispatch, SetStateAction } from 'react'
import Link from "next/link"
import useClick from '@/app/hooks/useClick'

const Menu = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {

    useClick(() => { setOpen(false) })

    return (
        <div className="absolute p-6 right-0 top-8 rounded-md bg-custom-alt-black grid gap-4">
            <Link className="uppercase font-bold" href="/consultoria">consultoria</Link>
            <Link className="uppercase font-bold" href="/coaching">coaching</Link>
        </div>
    )
}

export default Menu