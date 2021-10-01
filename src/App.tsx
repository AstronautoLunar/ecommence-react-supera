import { 
  useState
} from 'react';

import { 
  Header,
  FilterItem,
  GamesItem
} from './components';

import dataProducts from './data/products.json';

import styles from './style/home.module.scss';

interface styleModalData {
  display: string;
  opacity: number;
}

export default function App() {
  let [ radio, setRadio ] = useState("");
  let [ modal, setModal ] = useState({
    mount: false,
    animation: false
  });
  // let [ currentGame, setCurrentGame ] = useState({})

  function openModalGame() {
    setModal({ ...modal, animation: true, mount: true });
  }

  
  function closeModalGame() {
    setModal({ ...modal, animation: false});
    let timerModal;
    clearTimeout(timerModal);
    timerModal = setTimeout(() => {
      setModal({ ...modal, animation: false, mount: false})
    }, 250)
  }

  const itemsForFilter = [
    {
      id: 1,
      label: "Popularidade",
      value: "score",
      checked: radio === "score"
    },
    {
      id: 2,
      label: "Ordem alfabética",
      value: "letter",
      checked: radio === "letter"
    },
    {
      id: 3,
      label: "Preço",
      value: "price",
      checked: radio === "price"
    },

  ]

  function changeInput({ target }:any) {
    setRadio(target.value);
  }

  return (
    <div id={styles.App}>
      <Header/>
      <main id={styles.Main}>
        <div id={styles.topHeader}>
          <span id={styles.title}>Bem vindo</span>
          <img
              id={styles.imageCart}
              src={require('./assets/icon-cart.svg').default}
              alt="icon cart"
          />
        </div>
        <div id={styles.AreaGames}>
          <div id={styles.filterGames}>
            <span id={styles.text}>Por:</span>
            {
              itemsForFilter.map(item => (
                <FilterItem
                  key={ item.id }
                  label={ item.label }
                  value={ item.value }
                  checked={ item.checked }
                  onChange={ changeInput }
                />
              ))
            }
          </div>
          <div id={styles.games}>
            {
              dataProducts.map(item => (
                <GamesItem
                  key={item.id}
                  src={item.image}
                  alt={`image ${item.name}`}
                  click={openModalGame}
                />
              ))
            }
            {
                modal.mount && (
                    <div 
                      id={
                        modal.animation
                        ?
                        styles.modalOn
                        :
                        styles.modalOff
                      }
                    >
                      <div id={styles.modalArea}>
                        <img
                          id={styles.modalButtonLeave}
                          src={require('./assets/icon-leave.svg').default}
                          alt="icon leave"
                          onClick={closeModalGame}
                        />
                      </div>
                    </div>
                )
            }
          </div>
        </div>
      </main>
    </div>
  );
}
