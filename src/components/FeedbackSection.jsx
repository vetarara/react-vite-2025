import Button from './Button/Button'
import { useState } from 'react'

export default function FeedbackSection() {
    const [name, setName] = useState('');
    const [hasError, setHasError] = useState(false);
    const [reason, setReason] = useState('help');

    function handleNameChange(event) {
        const value = event.target.value;

        setName(value);
        setHasError(value.trim().length === 0);
    }

    return (
        <section>
            <h3>Обратная связь</h3>

            <form action="">
                <label htmlFor="name">Ваше имя</label>
                <input 
                    type="text" 
                    id="name" 
                    className="control" 
                    value={name}
                    style={{
                        border: hasError ? '1px solid red' : null,

                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Тема вопроса</label>
                <select id="reason" className="control" value={reason} onChange={event => setReason(event.target.value)}>
                    <option value="error">Сообщить об ошибке</option>
                    <option value="help">Нужна помощь</option>
                    <option value="idea">Есть идея</option>
                </select>

                <pre>
                    Name: {name}
                    <br />
                    Reason: {reason}
                </pre>

                <Button disabled={hasError} isActive={!hasError}>Отправить</Button>
            </form>
        </section>
    )
}