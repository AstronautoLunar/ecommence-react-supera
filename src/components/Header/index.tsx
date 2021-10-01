import { 
    useState,
    useEffect,
    useRef
} from 'react';

import styles from './styles.module.scss';

// import dataItensNavBar from '../../../public/data/nav.json';

const URL_DATA_ITENS = '../../../public/data/nav.json';
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
            setDate(timeRef.current = new Date().toLocaleTimeString())
        }, ONE_SECONDS_IN_MILISECONDS);

        // getItensData(URL_DATA_ITENS)
    }, [ 
        date, 
        setDate,
        timeRef,
        itens,
        setItens
    ])
    
    function getItensData(url:string) {
        fetch(url, {
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => console.log(response))
            // .then(data => console.log(data));
    }

    return (
        <div id={styles.Header}>
            <span id={styles.timetable}>{ date }</span>
            <nav 
                id={styles.navBar} 
                role="navigation"
            >
                <ul id={styles.list}>

                </ul>
            </nav>
        </div>
    );
}