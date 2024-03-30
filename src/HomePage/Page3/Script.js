Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.shipping === 'Declined' ? 'blood' : order.shipping === 'Pending' ? 'warning' : order.shipping === 'Delivered' ? 'success' : 'primary'}">${order.shipping}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

const Scores = [
    {
        "rank": 1,
        "teamName": "CodeCrafters",
        "time": "36:15:22",
        "score": 100,
    },
    {
        "rank": 2,
        "teamName": "ByteBlasters",
        "time": "37:45:10",
        "score": 100,
    },
    {
        "rank": 3,
        "teamName": "HackHeroes",
        "time": "39:02:50",
        "score": 50,
    },
    {
        "rank": 4,
        "teamName": "PixelPioneers",
        "time": "40:30:18",
        "score": 400,
    },
    {
        "rank": 5,
        "teamName": "BitBusters",
        "time": "41:55:30",
        "score": 300,
    }
];