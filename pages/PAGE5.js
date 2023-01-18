import style from 'styles/menu5.module.css'

export default function Page5 () {
  return (
    <div className={style.contents}>
      <h1>Layout</h1>
         <div className={style.grid_column}>
             <div className={style.box}>
                 <h2>Box 1</h2>
                 <p>hello world hello world hello world hello world</p>
                 <p>hello world hello world hello world hello world</p>
        </div>
        <div className={style.box}>
            <h2>Box 2</h2>
            <p>
                hello world hello world hello world hello world hello world hello world hello world hello world
            </p>
        </div>
    </div>
    
    <div className={style.grid_column}>
        <div className={style.box}>
            <h2>Box 3</h2>
            <p>
                hello world hello world hello world hello world hello world hello world hello world hello world
            </p>
        </div>
        <div className={style.box}>
            <h2>Box 4</h2>
            <p>
                hello world hello world hello world hello world hello world hello world hello world hello world
            </p>
        </div>
    </div>
    </div>
  )
}
