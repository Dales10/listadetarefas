import style from './index.module.css';
import { Item } from '../../types/item';
import { useState } from 'react';

type Props = {
    list: Item[];
    item: Item;
    index: number;
}

const ListItem = ({  list, index, item }: Props) => {

    const [isChecked, setIsChecked] = useState<boolean>(item.done);
    list[index].done = isChecked;

    return (
        <div className={style.container}>
            <input
                id={`${item.id}`}
                type="checkbox"
                defaultChecked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label htmlFor={`${item.id}`}>{item.name}</label>
        </div>
    );
}

export default ListItem;