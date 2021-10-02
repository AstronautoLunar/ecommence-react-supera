import {
  useState
} from 'react';

import { 
  Header,
  FilterItem,
  GamesItem,
  Modal,
  ModalCart
} from './components';
import calcPrice from './utils/calcPrice';
import { useProducts } from './contexts/ProductsContext';
import styles from './style/home.module.scss';
import { itemFilterDataType } from './types/app.tsx';

export default function App() {
  let [ radio, setRadio ] = useState("alphabetical-a");
  let [ modal, setModal ] = useState({
    mount: false,
    animation: false
  });
  let [ modalCartVisible, setModalCartVisible ] = useState({
    mount: false,
    animation: false
  });

  let { 
    chooseItem,
    currentItem,
    dataProducts,
    addGameCard
  } = useProducts();

  function openModalGame({ target }:any) {
    setModal({ 
      ...modal, 
      animation: true, 
      mount: true 
    });

    chooseItem(Number(target.id));
  }
  
  function closeModalGame() {
    setModal({ 
      ...modal, 
      animation: false
    });

    let timerModal;

    clearTimeout(timerModal);

    timerModal = setTimeout(() => {
      setModal({ 
        ...modal, 
        animation: false, 
        mount: false
      })
    }, 250)
  }

  function toggleModalCartVisible() {
    
    setModalCartVisible({ 
      ...modalCartVisible, 
      animation: !modalCartVisible.animation, 
      mount: true
    });
    
    if(modalCartVisible.mount) {
      setTimeout(() => {
        setModalCartVisible({ 
          ...modalCartVisible, 
          animation: false, 
          mount: false
        });
      }, 250)
    }
  }
  
  function closeModalCartVisible() {
    setModalCartVisible({ 
      ...modalCartVisible, 
      animation: false
    });

    let timerModal;

    clearTimeout(timerModal);
    
    timerModal = setTimeout(() => {
      setModalCartVisible({ 
        ...modalCartVisible, 
        animation: 
        false, 
        mount: false
      })
    }, 250)
  }

  const itemsForFilter = [
    {
      id: 1,
      label: "Ordem alfabética (A até Z)",
      value: "alphabetical-a",
      checked: radio === "alphabetical-a"
    },
    {
      id: 2,
      label: "Ordem alfabética (Z até A)",
      value: "alphabetical-z",
      checked: radio === "alphabetical-z"
    },
    {
      id: 3,
      label: "Popularidade (Maior)",
      value: "score-high",
      checked: radio === "score-high"
    },
    {
      id: 4,
      label: "Popularidade (Menor)",
      value: "score-low",
      checked: radio === "score-low"
    },
    {
      id: 5,
      label: "Preço (Mais caro)",
      value: "price-high",
      checked: radio === "price-high"
    },
    {
      id: 6,
      label: "Preço (Mais barato)",
      value: "price-low",
      checked: radio === "price-low"
    },

  ]

  function changeInput({ target }:any) {
    setRadio(target.value);
  }

  
  function itemFilterData({ 
    data, 
    type 
  }:itemFilterDataType) {
    function orderAlphabeticalA(oneItem:any, twoItem:any) {
      let oneItemString = oneItem.name.toUpperCase();
      let twoItemString = twoItem.name.toUpperCase();
      
      if(oneItemString === twoItemString) {
        return 0;
      } else {
        if(oneItemString > twoItemString) {
          return 1;
        } else {
          return -1;
        }
      }
    }

    function orderAlphabeticalZ(oneItem:any, twoItem:any) {
      let oneItemString = oneItem.name.toUpperCase();
      let twoItemString = twoItem.name.toUpperCase();
      
      if(oneItemString === twoItemString) {
        return 0;
      } else {
        if(twoItemString > oneItemString) {
          return 1;
        } else {
          return -1;
        }
      }
    }

    function orderLowPrice(oneItem:any, twoItem:any) {
      return (oneItem.price - twoItem.price);
    }
    
    function orderHighPrice(oneItem:any, twoItem:any) {
      return (twoItem.price - oneItem.price);
    }

    function orderLowScore(oneItem:any, twoItem:any) {
      return (oneItem.score - twoItem.score);
    }

    function orderHighScore(oneItem:any, twoItem:any) {
      return (twoItem.score - oneItem.score);
    }

    switch(type) {
      case "alphabetical-a":
        return data.sort(orderAlphabeticalA);
      case "alphabetical-z":
        return data.sort(orderAlphabeticalZ);
      case "price-low":
        return data.sort(orderLowPrice);
      case "price-high":
        return data.sort(orderHighPrice);
      case "score-low":
        return data.sort(orderLowScore);
      case "score-high":
        return data.sort(orderHighScore);
    }
  }

  // function addGameCardModal({ target }:any) {
  //   console.log(target.getAttribute('data-id'));
  // }

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
              onClick={toggleModalCartVisible}
          />
          {
            modalCartVisible.mount
            &&
            <ModalCart visible={modalCartVisible.animation}>

            </ModalCart>
          }
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
              itemFilterData({
                data: dataProducts,
                type: radio
              }).map((item:any) => (
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
                clickAddCart={ addGameCard }
                identifierItem={ currentItem.id }
              />
            }
          </div>
        </div>
      </main>
    </div>
  );
}
