import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import style from './Ffxiv.module.css';

const Ffxiv = () => {
  const [items, setItems] = useState([]);
  /* eslint-disable */
  const [searchWord, setSearchWord] = useState('');
  const [searValue, setSearValue] = useState('');
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchItems = async (searchWord) => {
    const url = `https://xivapi.com/search?indexes=item&string=${searchWord}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      setItems(data.Results);
      console.log(data.Results[0]);
    } catch (error) {
      console.error('Error fetching items:', error);
      setItems([]);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchWordParam = searchParams.get('searchWord');
    if (searchWordParam) {
      setSearchWord(searchWordParam);
      setSearValue(searchWordParam);
      fetchItems(searchWordParam);
      setSearched(true);
    }
  }, [location.search]);

  const handleItemClick = (itemId) => {
    navigate(`/item/${itemId}?searchWord=${searValue}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`?searchWord=${searValue}`);
      setSearchWord(searValue);
      fetchItems(searValue);
      setSearched(true);
    }
  };

  const handleSearchChange = (event) => {
    setSearValue(event.target.value.toLowerCase());
  };

  return (
    <div className={style.searchContainer}>
      <input
        type="text"
        value={searValue}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for items..."
      />
      <button onClick={() => {
        navigate(`?searchWord=${searValue}`);
        setSearchWord(searValue);
        fetchItems(searValue);
        setSearched(true);
      }}>Search</button>
      <div className={style.items}>
        {searched && items.length === 0 && (
          <p>No items found</p>
        )}
        {items.map(item => (
          <div key={item.ID} className={style.item} onClick={() => handleItemClick(item.ID)}>
            <h3>{item.Name}</h3>
            {item.Icon && (
              <img className={style.img}
                src={`https://xivapi.com${item.Icon}`}
                alt={item.Name} />
            )}
            <Link to={`/item/${item.ID}?searchWord=${searValue}`} style={{ textDecoration: 'none', color: 'white' }}></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ffxiv;
