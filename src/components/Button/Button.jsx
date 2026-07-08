import './Button.css'

// объект попадает в компонент Button
// onClick - свойство объекта props, переменная, содержащая функцию
export default function Button({ children, onClick, isActive }) {
    let classes = 'button'
    if (isActive) classes += ' active'

    // И затем эта функция передается уже настоящей HTML-кнопке:
    // onClick - атрибут JSX, добавляющая обработчик события click.
    //  <button onClick={onClick}> = button.addEventListener("click", onClick)
    return <button className={ classes } onClick={onClick}>
        {children}
    </button>
}