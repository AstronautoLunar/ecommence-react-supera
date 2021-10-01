import { 
    useState,
    useEffect,
    useRef
} from 'react';

import styles from './styles.module.scss';

import dataNavBar from '../../data/navBar.json'

const ONE_SECONDS_IN_MILISECONDS = 1000;

interface itensData {
    id: number;
    src: string;
    alt: string;
}

export default function Header() {
    let [ date, setDate ] = useState("0");
    let [ itens, setItens ] = useState({} as itensData)
    let timeRef = useRef("00:00");

    useEffect(() => {
        setInterval(() => {
            setDate(timeRef.current = new Date().toLocaleTimeString());

            // console.log(require(.))
        }, ONE_SECONDS_IN_MILISECONDS);
    }, [ 
        date, 
        setDate,
        timeRef,
        itens,
        setItens
    ])

    return (
        <div id={styles.Header}>
            <span id={styles.timetable}>{ date }</span>
            <nav 
                id={styles.navBar} 
                role="navigation"
            >
                <ul id={styles.list}>
                    {
                        dataNavBar.map(item => (
                            <li 
                                className={styles.item}
                                key={item.id}
                            >
                                <div className={styles.circle}>
                                    <img
                                        src={require(`../../assets/${item.src}`).default}
                                        alt={item.alt}
                                    />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
}