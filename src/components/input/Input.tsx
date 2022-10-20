import React from 'react';
import styles from "./Input.module.scss";

interface IProps {
    text?: string
}

const Input = (props: IProps) => {
    const {text = "text"} = props;
    return (
        <>
            <input type={text} className={styles.active}/>
        </>
    );
};

export default Input;