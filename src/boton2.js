import React from 'react';

const ButtonProps = props => (
    <div class={props.classBoton}>
        <a href={props.url} class={props.classText}>
            {props.content}
        </a>
    </div>

)
export default ButtonProps