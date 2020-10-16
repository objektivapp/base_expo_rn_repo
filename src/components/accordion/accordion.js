import React from "react";
import Accordion from 'react-native-collapsible/Accordion';

export const AccordionList = ({ sections, activeSections, renderHeader, renderContent, onChange }) => {
    return (
        <Accordion
            sections={sections}
            activeSections={activeSections}
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={onChange}
        />
    )
}