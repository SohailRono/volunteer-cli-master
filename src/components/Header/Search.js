import React from 'react';
import './header.css';

const Search = () => {
    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <h2 className='font-weight-bolder text-uppercase'>I grow by helping people in need</h2>

            <div className="input-group w-25 mx-auto mt-3">
                <input type="text" className="form-control py-3" placeholder="Search...." />
                <div className="input-group-append">
                    <button className=' btn btn-info'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Search;