import React from 'react';
import styles from './Button.module.scss';

interface IProps {
    text?: string
}

console.log(styles)

const Button = (props: IProps) => {
    const {text = ''} = props;
    return (
        <button className={styles.active}>
            {text}
        </button>
    );
};

export default Button;