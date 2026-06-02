import React from 'react'

function CatCard({name,image}) {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <img src={image} className='card-img-top img-fluid' alt="cat1" width={'100'} height={'100'} />
                </div>
                <div className="card-body">
                    {name}
                </div>
            </div>
        </>
    )
}

export default CatCard
