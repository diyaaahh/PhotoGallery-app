import React from "react";
import axios from "axios";
const Grid=({photos }) =>{
    return (
        <>
        <div className="gridd">
            {photos.map(({photo , _id}) => (
                <div key={_id} className='grid_item'>
                    <img
                    src ={`http://localhost:5000/uploads/${photo}`}
                    alt= "grid_image"
                    />
                </div>
            ))}
        </div>
        </>
    );
};
export default Grid;