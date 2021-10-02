// import { useState } from 'react';

import styles from './styles.module.scss';

interface ModalData {
    animationDirection: boolean;
    clickCloseModal: () => void;
    title: string;
    src: string;
    alt: string;
    price: number;
    subPrice: number;
    frete: number;
    clickAddCart?: ({ target }:any) => void;
    identifierItem: number;
}

export default function Modal({ 
    animationDirection, 
    clickCloseModal,
    title,
    src,
    alt,
    price,
    subPrice,
    frete,
    clickAddCart,
    identifierItem
}: ModalData) {
    return (
        <div 
            id={
            animationDirection
            ?
            styles.modalOn
            :
            styles.modalOff
            }
        >
            <div id={styles.modalArea}>
                <img
                    id={styles.modalButtonLeave}
                    src={require('../../assets/icon-leave.svg').default}
                    alt="icon leave"
                    onClick={clickCloseModal}
                />
                <div id={styles.areaPresentGame}>
                    <h1 id={styles.titleGame}>{ title }</h1>
                    <img
                        id={styles.imageGame}
                        src={require(`../../assets/${src}`).default}
                        alt={alt}
                    />
                </div>
                <div id={styles.areaPriceBoard}>
                    <div id={styles.priceBoard}>
                        <span 
                            id={styles.price}
                            className={styles.green}
                        >R${ price.toFixed(2) }</span>
                        <span id={styles.subPrice}>
                            Subtotal: <span className={styles.green}>
                                R${ subPrice.toFixed(2) }
                            </span>
                        </span>
                        <span id={styles.frete}>
                            Frete: <span className={styles.green}>
                                R${ frete.toFixed(2) }
                            </span>
                        </span>
                    </div>
                    <button 
                        id={styles.buttonAddCart}
                        onClick={clickAddCart}
                        data-id={identifierItem}
                    >
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    )
}