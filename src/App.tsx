import {
  useState
} from 'react';

import { 
  Header,
  FilterItem,
  GamesItem,
  Modal
} from './components';

import calcPrice from './utils/calcPrice';

import { useProducts } from './contexts/ProductsContext';

import styles from './style/home.module.scss';

export default function App() {
  let [ radio, setRadio ] = useState("");
  let [ modal, setModal ] = useState({
    mount: false,
    animation: false
  });
  // let [ currentGame, setCurrentGame ] = useState({})
  let { 
    chooseItem,
    currentItem,
    dataProducts
  } = useProducts();

  function openModalGame({ target }:any) {
    setModal({ ...modal, animation: true, mount: true });

    chooseItem(Number(target.id));
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
          <h1 id={styles.title}>Bem vindo</h1>
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
              dataProducts.map((item:any) => (
                <GamesItem
                  key={item.id}
                  identifier={String(item.id)}
                  src={item.image}
                  alt={`image ${item.name}`}
                  click={openModalGame}
                />
              ))
            }
            {
              modal.mount
              &&
              <Modal
                animationDirection={modal.animation}
                clickCloseModal={closeModalGame}
                title={currentItem.name}
                src={currentItem.image}
                alt={`image game ${currentItem.name}`}
                price={
                  calcPrice(currentItem.price).totalPrice
                }
                subPrice={calcPrice(currentItem.price).subPrice}
                frete={calcPrice(currentItem.price).frete}
              />
            }
          </div>
        </div>
      </main>
    </div>
  );
}
