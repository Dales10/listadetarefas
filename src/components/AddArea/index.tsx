import { useState } from 'react';
import style from './index.module.css'

type Props = {
    onEnter: (taskName: string) => void;
}

const AddArea = ({onEnter}: Props) => {

    const [inputText, setInputText] = useState<string>('');

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputText !== '') {
            onEnter(inputText);
            Array.from(document.querySelectorAll("input")).forEach(input => input.value = '')
        };
    }

    return (
        <div className={style.addArea}>
            <div className={style.emoji}>&#x2795;</div>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                className={style.input}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={(e) => handleKeyUp(e)}
            />
        </div>
    );
}

export default AddArea;