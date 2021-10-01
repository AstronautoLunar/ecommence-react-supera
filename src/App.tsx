import { useState } from 'react';

import { 
  Header,
  FilterItem
} from './components';

import styles from './style/home.module.scss';

export default function App() {
  let [ radio, setRadio ] = useState("")

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
        </div>
      </main>
    </div>
  );
}
