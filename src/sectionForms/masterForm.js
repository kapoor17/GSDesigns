import React from 'react';
import CarouselSection from './carouselSection';
import HeadingParagraph from './headingTextSection';
function MasterForm({sectionType})
{
    const formsArr=[
        {
            formType:"headingParagraph",
            form:<HeadingParagraph />
        },
        {
            formType:"carousel",
            form:<CarouselSection />
        }
    ]

    const returnForm=formsArr.find(item=>item.formType==sectionType);

    return(
        <>
            <div className="my-3 px-3">
                {returnForm && returnForm.form}
            </div>
        </>
    );
    
}

export default MasterForm;