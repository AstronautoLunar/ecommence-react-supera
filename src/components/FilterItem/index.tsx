import styles from './styles.module.scss';

interface FilterItemData {
    label: string;
    value: string;
    onChange: any;
    checked: boolean;
}

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