import './Content.css'

function Content() {

    function btn_click() {
        console.log('btn click 8')
    }

    return (
        <div className='content-container'>
            <h1>Лазерная резка</h1>
            <h3>карт мира и регионов России</h3>
            <h3>а также карт из книг, фильмов и видеоигр.</h3>
            <div>
                <p>Производятся на высокоточном оборудовании. </p>
                <p>Авторские проекты и технологии производства.</p>
            </div>
            <button className='btn_our_products' onClick={btn_click}>Наши работы</button>
            
        </div>
    )
}

export default Content;