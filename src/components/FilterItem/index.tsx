import styles from './styles.module.scss';

import { FilterItemData } from '../../types/FilterItemData';

export default function FilterItem({ 
    label, 
    value, 
    onChange,
    checked
}:FilterItemData) {
    return (
        <div className={styles.FilterItem}>
            <input
                className={styles.radio}
                type="radio"
                value={ value }
                onChange={ onChange }
                checked={ checked }
            />
            <span className={styles.text}>
                { label }
            </span>
        </div>
    )
}