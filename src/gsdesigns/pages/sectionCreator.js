import React, { useState } from 'react';
import Heading from '../sections/heading';
import HeadingParagraph from '../sections/headingParagraph';
import Paragraph from '../sections/paragraph';

function SectionCreator({sectionType,sectionContent})
{
    const sectionsArr=[
        {
            sectionName:"headingParagraph",
            section:<HeadingParagraph sectionContent={sectionContent}/>
        },
        {
            sectionName:"heading",
            section:<Heading sectionContent={sectionContent}/>
        },
        {
            sectionName:"paragraph",
            section:<Paragraph sectionContent={sectionContent}/>
        }
    ]
    const SectionComponent=sectionsArr.find(item=>item.sectionName==sectionType);
    return (
        <>
            {SectionComponent && SectionComponent.section}
        </>
    );

}

export default SectionCreator;