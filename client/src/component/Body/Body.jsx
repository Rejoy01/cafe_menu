import React, { useState } from "react";
import MenuCategory from "../MenuCategory/MenuCategory";
import { Container, Select, Title } from "@mantine/core";
import menuItems, { cafeColors } from "../../Data/MenuItems";
import MenuItem from "../MenuItem/MenuItem";


const Body = () => {
    // const [selectedCategory, setSelectedCategory] = useState('Breakfast');
    const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...Object.keys(menuItems)];
  
  const getFilteredItems = () => {
    if (selectedCategory === 'All') {
      return Object.entries(menuItems).flatMap(([category, items]) => (
        [{ category, items }]
      ));
    }
    return [{ category: selectedCategory, items: menuItems[selectedCategory] }];
  };
  return (
    <Container style={{ background: cafeColors.background, padding: '20px', borderRadius: '8px', minHeight: '100vh' }}>
    <Select
      data={categories}
      value={selectedCategory}
      onChange={setSelectedCategory}
      label="Select Category"
      placeholder="Choose category"
      style={{ marginBottom: 20 , background: cafeColors.selectBackground, color: cafeColors.text, borderRadius: '5px' }}
    />
    {getFilteredItems().map(({ category, items }) => (
      <div key={category}>
        <Title order={2} style={{ marginBottom: 10 , color: cafeColors.text}}>{category}</Title>
        {items.map((item, index) => (
          <MenuItem key={index} name={item.name} price={item.price} />
        ))}
      </div>
    ))}
  </Container>
  );
};

export default Body;
