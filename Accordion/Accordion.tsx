
import { title } from "process";
import React, { ReactElement, useState } from "react"
import styles from "./Accordion.module.css"

interface accordionData {
    title: string,
    titleBackgroundColor?: string,
    titleFontColor?: string,
    content: string,
}
interface accordionSection {
    title: string,
    titleBackgroundColor?: string,
    titleFontColor?: string,
    children: string,
}

const AccordionSection = (props: accordionSection) => {
    const [expand, setExpand] = useState<boolean>(false);

    const expandHandler = () => {
        setExpand(!expand)
    }

    return (
        <div className={styles.accordionPanel} style={{ border: `1px solid ${props.titleBackgroundColor}` }}>
            <div
                onClick={expandHandler}
                className={styles.accordionTitle}
                style={
                    {
                        backgroundColor: props.titleBackgroundColor,
                        color: props.titleFontColor
                    }
                }>
                <h2>{props.title}</h2><button className={styles.expandButton} style={{ color: props.titleFontColor }}>{expand ? `–` : `+`}</button>
            </div>
            {expand && <div className={styles.accordionContent} dangerouslySetInnerHTML={{__html:props.children}}></div>}
        </div>
    )
}

AccordionSection.defaultProps = { titleBackgroundColor: "#ddd", collapse: false }



const Accordion = (props: { accordionData: accordionData[] }) => {

    return (
        <div className={styles.accordionContainer}>
            {props.accordionData.map((data, index) => {
                return (
                    <AccordionSection
                        key={index}
                        title={data.title}
                        titleBackgroundColor={data.titleBackgroundColor}
                        titleFontColor={data.titleFontColor} >
                        {data.content}
                    </AccordionSection>
                )
            })
            }

        </div>
    )

}

export default Accordion