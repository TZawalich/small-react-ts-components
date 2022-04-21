import { url } from "inspector";
import { ReactElement } from "react";
import styles from "./Card.module.css"


const Card = (props:{image?:string, title: string, children: ReactElement}) => {
    return (
    <div className={styles.card}>
        <div className={styles.cardImage} style={{backgroundImage: `url(${props.image})`}}></div>
        <div className={styles.cardTitle}>
            <h2>{props.title}</h2>
        </div>
        <div className={styles.cardContent}>
            {props.children}
        </div>

    </div>
    )
}

export default Card