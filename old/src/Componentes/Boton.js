import React from 'react';
import styles from '../css/Boton.css'

const Boton = props => (
    <div className={props.boton}>
        <div className="label">
            <label>{props.label}</label>
        </div>
    </div>
)
export default Boton
