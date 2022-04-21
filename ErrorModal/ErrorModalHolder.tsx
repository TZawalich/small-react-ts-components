import { useState } from "react";
import ErrorModal from "./ErrorModal";
import styles from "./ErrorModalHolder.module.css";


const ErrorModalHolder = () => {

    const [showModal, setShowModal] = useState<boolean>(false);

    return(
        <div className={styles.errorModalHolder}>
            <button className={styles.showModal} onClick={() => {setShowModal(true)}}>Click to Show the Error Modal</button>
            { showModal && <ErrorModal showHide={setShowModal} errorTitle="I'm an Error Title" errorMessage="I'm an error message!"/>}
        </div>
    )
}

export default ErrorModalHolder