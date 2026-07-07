import logo from '/favicon.svg'

export default function Header() {
    const now = new Date()
    const name = 'Лого Вит'
    return (

        <header>
            <img src={logo} alt={name}></img>
            {/* <h3>Тест</h3> */}
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>

    )
}