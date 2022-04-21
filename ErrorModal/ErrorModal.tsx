import styles from "./ErrorModal.module.css"
import warningImage from "./images/ATTENT03.png"

interface ErrorMsg{
    errorMessage: string,
    errorTitle: string,
    showHide: Function
}

const ErrorModal = (props:ErrorMsg) =>{
    return(

        <div className={styles.errorOverlay}>
            <div className={styles.errorModal}>
                <img className={styles.errorImg} src={warningImage} alt="warning alert" height="75" width="75"/>
                <h1 className={styles.errorTitle}>{props.errorTitle}</h1>
                <p className={styles.errorMessage}>{props.errorMessage}</p>
                <button onClick={() => props.showHide(false)} className={styles.errorButton}>Ok</button>
            </div>
        </div>
    );
}

export default ErrorModal