import React, { useState } from 'react';

function ItemCountStock ({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleAddItem = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
	const handleRemoveItem = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    console.log(count);

    return (
        <>
            <div className="flex flex-row bg-gray-200 justify-between px-6 py-2 mt-10">
                <button className="text-base text-gray-900" onClick={handleRemoveItem} disabled={count <= 0}>-</button>
                <span className="text-base text-gray-900"> {count} </span>
                <button className="text-base text-gray-900" onClick={handleAddItem} disabled={count >= stock}>+</button>
            </div>
            <button onClick={() => onAdd(count)} className="w-full bg-black border border-transparent py-3 px-8 flex items-center justify-center text-base font-medium text-white">
                Add to cart
            </button>
        </>
    )
}

export default ItemCountStock;