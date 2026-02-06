import React from 'react'
const checkout ={
    _id: 1,
    createdAt: new Date(),
    checkoutItems:[{
        productId: 1, 
        name: "Airmax 90",
        size: 9,
        color: "Black",
        price: 100,
        quantity: 1,
        images: "https://picsum.photos/500/500?random=1",
    },
    {
        productId: 2, 
        name: "Jordan 1",
        size: 9,
        color: "Red",
        price: 100,
        quantity: 1,
        images: "https://picsum.photos/500/500?random=2",
    },

],
shippingAddress:{
    address:"123 Main St",
    city:"New York",
    state:"NY",
    postalCode:"10001",
    country:"USA",
    phone:"123-456-7890"
}

}
const OrderConfirmatioPage = () => {

    const calculateEstimateDelivery = (createdAt) => {
        const orderDate = new Date(createdAt);
        orderDate.setDate(orderDate.getDate() + 7);
        return orderDate.toLocaleDateString();
    }
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
            Thank you for your order!
        </h1>

        {checkout && (<div className='p-6 rounded-lg border'>
            <div className="flex justify-between mb-20">
                {/* Order id and Date */}
                <div className="">
                    <h2 className="text-xl font-semibold">
                        Order ID: {checkout._id}
                    </h2>
                    <p className="text-gray-500">
                        Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
                    </p>
                </div>
                {/* Estimated Delivery */}
                <div className="">
                    <p className="text-emerald-700 text-sm">Estimated Delivery:{""} {calculateEstimateDelivery(checkout.createdAt)}</p>
                </div>
            </div>

            {/* Ordered Items */}
            <div className="mb-20">
                {checkout.checkoutItems.map((item) => (
                    <div key={item.productId} className="flex items-center mb-4">
                        <img src={item.images} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4"/>
                        <div>
                            <h4 className="text-lg font-semibold">{item.name}</h4>
                            <p className='text-sm text-gray-500'>Color: {item.color}</p>
                            <p className='text-sm text-gray-500'>Size: {item.size}</p>
                            
                        </div>
                        <div className="ml-auto text-right">
                            <p className='text-base'>Price: ${item.price}</p>
                            <p className='text-sm text-gray-500'>Quantity: {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Payment and Delivery info */}
            <div className="grid grid-cols-2 gap-8">
                {/* payment info */}
                <div className="">
                    <h4 className="text-lg font-semibold mb-2">Payment</h4>
                    <p className="text-gray-600">PayPal</p>
                </div>

                {/* Delivery info */}
                <div className="">
                    <h4 className="text-lg font-semibold mb-2">Delivery</h4>
                    <p className="text-gray-600">{checkout.shippingAddress.address}</p>
                    <p className="text-gray-600">{checkout.shippingAddress.city}, {checkout.shippingAddress.state} {checkout.shippingAddress.postalCode}</p>
                </div>
            </div>
        </div>
        )}     
    </div>
  )
}

export default OrderConfirmatioPage
