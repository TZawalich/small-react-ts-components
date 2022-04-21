import React, { ReactElement, useState } from "react"
import styles from "./InfoPanel.module.css"

interface infoPanelProps {
    title: string,
    titleBackgroundColor?: string,
    titleFontColor?: string,
    children: ReactElement,
    collapse?: boolean
}


const InfoPanel = (props: infoPanelProps) => {
    const [panelType, setPanelType] = useState<boolean>(props.collapse!)
    const [expand, setExpand] = useState<boolean>(false);

    const expandHandler = () => { setExpand(!expand) };


    return (
        <React.Fragment>
            {!panelType &&
                <div className={styles.infoPanel} style={{ border: `1px solid ${props.titleBackgroundColor}` }}>
                    <div
                        className={styles.infoTitle}
                        style={
                            {
                                backgroundColor: props.titleBackgroundColor,
                                color: props.titleFontColor
                            }
                        }>
                        <h2>{props.title}</h2>
                    </div>
                    <div className={styles.infoContent}>{props.children}</div>
                </div>
            }
            {panelType &&
                <div className={styles.infoPanelCollapse} style={{ border: `1px solid ${props.titleBackgroundColor}` }}>
                    <div
                        onClick={expandHandler}
                        className={styles.infoTitleCollapse}
                        style={
                            {
                                backgroundColor: props.titleBackgroundColor,
                                color: props.titleFontColor
                            }
                        }>
                        <h2>{props.title}</h2><button className={styles.expandButton} style={{color: props.titleFontColor}}>{expand ? `–` : `+`}</button>
                    </div>
                    {expand && <div className={styles.infoContentCollapse}>{props.children}</div>}
                </div>
            }
        </React.Fragment>
    )
}

InfoPanel.defaultProps = { titleBackgroundColor: "#ccc", collapse: false }

export default InfoPanel