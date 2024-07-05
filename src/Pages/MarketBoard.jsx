

    import React, { useState, useEffect } from 'react';

    const MarketBoard = () => {
       
            const dataCenter = 'Light'; // Replace with your desired data center
            const itemId = '36060'; // Replace with the ID of the item you want to fetch data for
            const url = `https://universalis.app/api/${dataCenter}/${itemId}`;
            const [sellingItems, setSellingItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSellingItems = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch selling items');
        }
        const data = await response.json();
        setSellingItems(data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        console.error('Error fetching selling items:', error);
        setLoading(false);
      }
    };

    fetchSellingItems();
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Selling Items for Item ID {itemId}</h2>
      <ul>
        {sellingItems.listings.map((item, index) => (
          <li key={index}>
            <p>World: {item.worldName}</p>
            <p>Price: {item.pricePerUnit} gil</p>
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MarketBoard
