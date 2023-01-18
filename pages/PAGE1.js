import style from 'styles/menu1.module.css'
import Link from 'next/link'

export default function Page1() {
    return (
        <ul className={style.nav} >
            <li><Link href="/">TOP</Link></li>
            <li><Link href="/">ABOUT</Link></li>
            <li><Link href="/">NEWS</Link></li>
            <li><Link href="/">LINK</Link></li>
        </ul>
    )
}