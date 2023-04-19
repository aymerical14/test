
import React, { useEffect } from "react";
import { Icon } from '@iconify/react';
import { useHistory } from "react-router-dom";

import './CardProduct.styles.scss';

export const CardProduct = ({title, textContent, icon, link }) => {
  const history = useHistory();
  

    return (
        <div class="card mb-3 card-product" onClick={() => history.push(link)}>
            <div class="card-header" style={{backgroundColor: 'black', color: '#f16e00'}}>
              <h4 style={{fontWeight: 'bold'}}><Icon icon={icon} /> {title}</h4>
            </div>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
    )
}