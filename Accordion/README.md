# Accordion Component
A basic accordion component that allows for openable/collapsible sections to display content. 

Panel information and some color options are passed to the component via an array of objects within the accordianData prop. The pattern is as folows and is wrapped in an array []:

interface accordionData {
    title: string,
    titleBackgroundColor?: string,
    titleFontColor?: string,
    content: string,
}


## Accordion Containter
The accordionContainer Div wraps the AccordionSection Components, pinning them together and maintaining their shape/layout.

### AccordionSection
Each AccordionSection component can be fed a 'title', 'titleBackgroundColor', and 'titleFontColor' with only the title being required. Default values are available for the background color and font color. The content of the accordionData object is set as the Section's child elements, where it will them be parsed and returend as HTML. This is accomplished using the dangeouslySetInnerHTML method, so make sure you know where the data is coming from. The child elements can also just be a raw string, it will display it just fine.

The border colors will automatically adujust to match the title background color.

