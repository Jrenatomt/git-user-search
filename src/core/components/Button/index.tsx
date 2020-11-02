import React from 'react';
import './styles.scss'

type Props = {
    text: string
}

const Button = ( { text }: Props ) => (
    <div>
    <button className="button-menu">
        <h2 className="button-text">
            {text}
        </h2>
    </button>
</div>

);

export default Button;