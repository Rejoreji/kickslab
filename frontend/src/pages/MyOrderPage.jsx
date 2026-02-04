import React, { useEffect, useState } from 'react'

const MyOrderPage = () => {
    const[orders, setorders] = useState([])

    useEffect(() => {
       setTimeout(() => {
        const mockOrders = ([
            {
                id: 1,
                createdAt: new Date(),
                shippingAddress:{city: "New York", country: "USA" },
                items: [
                    { productId: 101, name: "Sneaker A", quantity: 1, price: 50.00,image:"https://picsum.photos/500/500?random=5" },
                    { productId: 102, name: "Sneaker B", quantity: 2, price: 25.00, image:"https://picsum.photos/500/500?random=6"}
                ],
                totalAmount: 100.00,
                isPaid:true,
                status: "Delivered"
            },
            {
                id: 2,
                createdAt: new Date(),
                shippingAddress:{city: "New York", country: "USA" },
                items: [
                    { productId: 101, name: "Sneaker A", quantity: 1, price: 50.00,image:"https://picsum.photos/500/500?random=5" },
                    { productId: 102, name: "Sneaker B", quantity: 2, price: 25.00, image:"https://picsum.photos/500/500?random=6"}
                ],
                totalAmount: 101.00,
                isPaid:false,
                status: "Processing"
            },
        ])

        setorders(mockOrders)

       }, 1000)         
    }, [])

    return (
        <div className='max-w-7xl mx-auto p-4 sm:p-6'>
            <h2 className='text-xl sm:text-2xl font-bold mb-6'>My Orders</h2>
            <div className="relative shadow-md sm:rounded-lg overflow-hidden">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-black text-xs uppercase text-white text-center">
                        <tr>
                            <th className="py-2 px4 sm:py-3">Image</th>
                            <th className="py-2 px4 sm:py-3">Order ID</th>
                            <th className="py-2 px4 sm:py-3">Created</th>
                            <th className="py-2 px4 sm:py-3">Shipping Address</th>
                            <th className="py-2 px4 sm:py-3">Items</th>
                            <th className="py-2 px4 sm:py-3">Price</th>
                            <th className="py-2 px4 sm:py-3">Paid</th>
                            <th className="py-2 px4 sm:py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ?
                        orders.map((order) => (
                            <tr key={order.id} className="border-b hover:bg-gray-50 cursor-pointer text-center" >
                                <td className='py-2 px-2 sm:py-4'>
                                    <img src={order.items[0].image} alt="Product" className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md" />
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>
                                    #{order.id}
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    {order.createdAt.toLocaleDateString()}
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    {order.shippingAddress ? `${order.shippingAddress.city}, ${order.shippingAddress.country}` : "N/A"}
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    {order.items.length} items
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    ${order.totalAmount.toFixed(2)}
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.isPaid ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                        {order.isPaid ? "Paid" : "Unpaid"}
                                    </span>
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium  ${order.status === "Delivered" ? "text-green-600" : order.status === "Processing" ? "text-yellow-600" : "text-red-600"}`}>
                                        {order.status}
                                    </span>
                                </td> 
                              
                            </tr>
                        )

                        ):(
                            <tr>
                                <td colSpan="7" className="text-center py-4 text-gray-500">
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyOrderPage
