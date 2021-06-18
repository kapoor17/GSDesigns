import React from 'react';

function TextField({name,value="",label="textarea"})
{
    return(
        <>
            <div className="form-group my-2">
                <label htmlFor="">{label}</label>
                <textarea name={name} value={value} className="form-control"></textarea>
            </div>
        </>
    );
}

export default TextField;