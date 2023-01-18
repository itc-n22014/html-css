import style from 'styles/menu4.module.css'
export default function Page4 () {
    return (
        <div className={style.box}>
    <div className={style.nav}>
        <h1>Cafe Prep</h1>
    </div>
    <nav className={style.style}>
        <h2>Drink</h2>
        <ul>
            <li>Coffee</li>
            <li>Latte</li>
            <li>Espresso</li>
        </ul>
    </nav>
</div>
    )
}