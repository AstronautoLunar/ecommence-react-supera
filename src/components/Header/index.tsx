import { 
    useState,
    useEffect,
    useRef
} from 'react';

import { itensData } from '../../types/HeaderData';

import dataNavBar from '../../data/navBar.json'

import styles from './styles.module.scss';

const ONE_SECONDS_IN_MILISECONDS = 1000;

export default function Header() {
    let [ date, setDate ] = useState("0");
    let [ itens, setItens ] = useState({} as itensData);
    let [ hiddenClock, setHiddenClock ] = useState(false);
    let timeRef = useRef("00:00");

    const MEDIA_QUERIE_LIST = matchMedia("(max-width: 742px)");

    useEffect(() => {
        setInterval(() => {
            setDate(timeRef.current = new Date().toLocaleTimeString());
        }, ONE_SECONDS_IN_MILISECONDS);

        hiddenElementClock(MEDIA_QUERIE_LIST);
        MEDIA_QUERIE_LIST.addEventListener('change', hiddenElementClock)
    }, [ 
        date, 
        setDate,
        timeRef,
        itens,
        setItens,
        setHiddenClock,
        hiddenClock,
        MEDIA_QUERIE_LIST
    ]);

    function hiddenElementClock(mediaQuerieList:any) {
        if(mediaQuerieList.matches) {
            setHiddenClock(true);
        } else {
            setHiddenClock(false);
        }
    } 

    return (
        <div id={styles.Header}>
            {
                hiddenClock
                ||
                <span id={styles.timetable}>
                    { date }
                </span>
            }
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