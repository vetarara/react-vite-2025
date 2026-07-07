import './Button.css'

export default function Button({ children }) {
    // function handleClick() {
    //     console.log('bitton clicked')
    // }

    return <button className="button" 
        // onClick={handleClick}
        onClick={() => console.log('click')}
        onDoubleClick={() => console.log('dbl')}
        >
            {children}
        </button>
}