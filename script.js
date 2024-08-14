
document.querySelectorAll('.buy-now-btn').forEach(button => {
    button.addEventListener('click', event => {
        const product = event.target.closest('.product');
        const price = product.dataset.price;
        document.getElementById('totalAmount').value = `₹${price}`;
        document.getElementById('buyNowModal').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('buyNowModal').style.display = 'none';
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('buyNowModal').style.display = 'none';
    const orderConfirmation = document.getElementById('orderConfirmation');
    orderConfirmation.style.display = 'block';

const orderDetails = {
    name: document.getElementById('name').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    zip: document.getElementById('zip').value,
    totalAmount: document.getElementById('totalAmount').value,
    datetime: new Date().toLocaleString()
};

const orderItem = document.createElement('div');
orderItem.classList.add('order-item');
orderItem.innerHTML = `
    <h3>Order Details</h3>
    <p><strong>Name:</strong> ${orderDetails.name}</p>
    <p><strong>Address:</strong> ${orderDetails.address}, ${orderDetails.city}, ${orderDetails.zip}</p>
    <p><strong>Total Amount:</strong> ${orderDetails.totalAmount}</p>
    <p><strong>Date/Time:</strong> ${orderDetails.datetime}</p>
    <button class="view-details">View Details</button>
`;

orderItem.querySelector('.view-details').addEventListener('click', () => {
    alert(`Viewing details for order placed on ${orderDetails.datetime}`);
    
});

document.getElementById('orderDetails').appendChild(orderItem);

setTimeout(() => {
    orderConfirmation.style.display = 'none';
}, 3000);
});

document.getElementById('ordersLink').addEventListener('click', () => {
document.querySelector('.shop-container').style.display = 'none';
document.getElementById('ordersPage').style.display = 'block';
});


