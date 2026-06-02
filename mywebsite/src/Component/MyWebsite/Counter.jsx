import React,{useState} from 'react'

function Counter({id}) {
        let [qty, setQty] = useState(0);

    const inc = (id) => {
        setQty(qty+1);
    };

    const dec = (id) => {
        setQty(prev => prev>0?prev-1:0);
    };
    return (
        <>
            <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-success" onClick={() => inc(id)}>+</button>
                <p>{qty}</p>
                <button className="btn btn-danger" onClick={() => dec(id)}>-</button>
            </div>
        </>
    )
}

export default Counter
