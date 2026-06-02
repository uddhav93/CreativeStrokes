import React from 'react'
import CatCard from './CatCard'
import img1 from './Images/pens.jpg'
import img2 from './Images/book.jpg'
import img3 from './Images/markers.jpg'
import img4 from './Images/art.jpg'
function Categories() {
    return (
        <>

            <section className="container-fluid px-3">
                <h2 className='text-center'>Our Category</h2>
                <div className="row mt-3">
                    <div className="col-sm-3">
                        <CatCard name="pens" image={img1} />
                    </div>
                    <div className="col-sm-3">
                        <CatCard name="books" image={img2} />
                    </div>
                    <div className="col-sm-3">
                        <CatCard name="highlighter" image={img3} />
                    </div>
                    <div className="col-sm-3">
                        <CatCard name="art" image={img4}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categories
