import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetail = () => {
  const { itemId } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchItemDetail = async (itemId) => {
    try {
      const itemResponse = await fetch(`https://xivapi.com/item/${itemId}`);
      if (!itemResponse.ok) {
        throw new Error('Item not found');
      }
      const itemData = await itemResponse.json();
      console.log(itemData)
      // Fetch recipe details if available
      if (itemData.Recipes && itemData.Recipes.length > 0) {
        const recipeId = itemData.Recipes[0].ID;
        const recipeResponse = await fetch(`https://xivapi.com/recipe/${recipeId}`);
        if (!recipeResponse.ok) {
          throw new Error('Recipe not found');
        }
        const recipeData = await recipeResponse.json();
        itemData.recipeDetail = recipeData;
      } else {
        itemData.recipeDetail = null;
      }

      setItemDetail(itemData);
    } catch (error) {
      console.error('Error fetching item details:', error);
      setItemDetail(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItemDetail(itemId);
  }, [itemId]);

  const renderIngredients = (recipeDetail) => {
    const ingredients = [];
    for (let i = 0; i <= 7; i++) {
      const ingredientName = recipeDetail?.[`ItemIngredient${i}`]?.Name;
      const ingredientAmount = recipeDetail?.[`AmountIngredient${i}`];
      if (ingredientName && ingredientAmount) {
        ingredients.push(
          <li key={i}>
            {ingredientAmount}x {ingredientName}
          </li>
        );
      }
    }
    return ingredients;
  };

  const handleBackClick = () => {
    navigate('/ffxiv');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!itemDetail) {
    return <p>Item not found</p>;
  }

  const { recipeDetail } = itemDetail;

  return (
    <div className="item-detail">
      <h2>{itemDetail.Name}</h2>
      {itemDetail.Icon && (
        <img
          src={`https://xivapi.com${itemDetail.Icon}`}
          alt={itemDetail.Name}
          style={{ width: '100px', height: '100px' }}
        />
      )}
      <p>Level: {itemDetail.LevelItem}</p>
      <p>Description: {itemDetail.Description}</p>

      {recipeDetail && (
        <div className="recipe-detail">
          <h3>Recipe Details</h3>
          <p>Recipe Name: {recipeDetail.Name}</p>
          <p>Crafted Item ID: {recipeDetail.ItemResult.ID}</p>
          <p>Crafted Item Name: {recipeDetail.ItemResult.Name}</p>
          <p>Required Level: {recipeDetail.RecipeLevelTable.ClassJobLevel}</p>
          <p>Crafting Class: {recipeDetail.ClassJob?.Name}</p>

          <p>Ingredients:</p>
          <ul>{renderIngredients(recipeDetail)}</ul>
        </div>
      )}

      <button onClick={handleBackClick} style={{ color: 'white' }}>
        Back
      </button>
    </div>
  );
};

export default ItemDetail;