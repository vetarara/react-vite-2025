import Button from './Button/Button'
import { useState } from 'react'

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help'
    })
    // const [name, setName] = useState('');
    // const [hasError, setHasError] = useState(false);
    // const [reason, setReason] = useState('help');

    // делаем изменение формы
    function handleNameChange(event) {
        // const value = event.target.value;

        // setName(value);
        // setHasError(value.trim().length === 0);
        setForm(prev => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }

    // вот как правильно работать с предыдущим состоянием
    // function toggleError() {
    //     // setHasError((prev) => !prev);
    // }

    return (
        <section>
            <h3>Обратная связь</h3>

            {/* <Button onClick={toggleError}>Toggle Error</Button> */}

            <form action="">
                <label htmlFor="name">Ваше имя</label>
                <input 
                    type="text" 
                    id="name" 
                    className="control" 
                    value={form.name}
                    style={{
                        border: form.hasError ? '1px solid red' : null,

                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Тема вопроса</label>
                <select 
                    id="reason" 
                    className="control" 
                    value={form.reason} 
                    onChange={event => setForm(prev => ({...prev, reason: event.target.value}))}
                >
                    <option value="error">Сообщить об ошибке</option>
                    <option value="help">Нужна помощь</option>
                    <option value="idea">Есть идея</option>
                </select>

                {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>
        </section>
    )
}