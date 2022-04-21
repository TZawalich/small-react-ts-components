# Info Panel

The info panel allows for a simple panel/section of a page to display highlighted content.

The panel takes in a number of props and children properties (interface example at end of section). The title fills in the top title section, and the titleBackgroundColor/titleFontColor both change the background and font color of the title as their names suggest. The panel borders will automatically change their color to match the title background color.

The children props become the content inside the info panel.

The collapse prop determines whether or not the panel is collapsible or not.

interface infoPanelProps {
    title: string,
    titleBackgroundColor?: string,
    titleFontColor?: string,
    children: ReactElement,
    collapse?: boolean
}

## Collapse / Not Collapse

The info panel comes in two flavours, normal and collapsible. The normal panel just sits there, in all its glory, showing off content. The collapse props panels, however, can be toggled open and close by clicking the title bar (+/- signs are also added to indicate open and closed status/ability.)