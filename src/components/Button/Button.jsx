import './Button.css'

export default function Button({ children, isActive, ...props }) {
    let classes = 'button'
    if (isActive) classes += ' active'

    return (
        <button 
            {...props}
            className={classes}
        >
            {children}
        </button>
    )
}