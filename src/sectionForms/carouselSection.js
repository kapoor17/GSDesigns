import React, { useState } from 'react';

function CarouselSection()
{
    const [heading,setHeading]=useState("");

    return(
        <>
            <h4 className="mb-0">Carousel Section</h4>
            <hr />
            <form action="">
                <fieldset className="bg-light p-2">
                        <div className="form-group">
                            <label htmlFor="">Heading</label>
                            <input type="text" className="form-control" value={heading.content} onChange={e=>{setHeading({...heading,content:e.target.value})}} required/>
                        </div>
                        <div className="col-md-12 my-3">
                            <button className="btn btn-primary" type="submit">Save Section</button>
                        </div>
                </fieldset>
            </form>
        </>
    );
}

export default CarouselSection;