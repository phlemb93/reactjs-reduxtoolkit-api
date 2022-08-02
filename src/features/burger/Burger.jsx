import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './burgerSlice'
import { useState } from 'react'

export const Burger = () => {

    const numOfBurgers = useSelector((state) => state.burger.numOfBurgers)
    const dispatch = useDispatch()

    const [orderValue, setOrderValue] = useState(null)
    const [restockValue, setRestockValue] = useState(null)

    return (
        <>
            <h3>Total Number of Burgers: {numOfBurgers}</h3>

            <div className="order">
                <input onChange={ (e) => setOrderValue(e.target.value)} type="number" value={orderValue} />

                <button className="order" onClick={ () => dispatch(ordered(orderValue)) }>Order Cake
                </button>
             </div>
            

             <div className="restock">
                <input onChange={ (e) => setRestockValue(parseInt(e.target.value))} type="number" value={restockValue} />

                <button className="restock" onClick={ () => dispatch(restocked(restockValue)) }>Restock Cake
                </button>
             </div>
        </>
    )
}

