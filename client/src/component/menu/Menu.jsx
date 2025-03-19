import { Container, Title, Text, Card, Grid } from '@mantine/core';

const menuItems = {
  Breakfast: [
    { name: 'Pancakes', price: 100 },
    { name: 'Omelette', price: 80 },
  ],
  TeaAndSnacks: [
    { name: 'Masala Tea', price: 50 },
    { name: 'Samosa', price: 40 },
  ],
  Lunch: [
    { name: 'Fish Meals', price: 150 },
    { name: 'Biriyani', price: 200 },
  ],
  Dinner: [
    { name: 'Chapati & Curry', price: 120 },
    { name: 'Veg Pulao', price: 140 },
  ],
};

const Header = () => (
  <header style={{ textAlign: 'center', padding: '20px 0', background: '#f8f9fa' }}>
    <Title order={1}>Cafe Menu</Title>
  </header>
);

const MenuItem = ({ name, price }) => (
  <Card shadow="sm" padding="lg" radius="md" withBorder style={{ marginBottom: 10 }}>
    <Text size="md" weight={500} style={{ display: 'flex', justifyContent: 'space-between' }}>
      {name} <span>${price}</span>
    </Text>
  </Card>
);

const MenuCategory = ({ category, items }) => (
  <div>
    <Title order={2} style={{ margin: '20px 0' }}>{category}</Title>
    {items.map((item, index) => (
      <MenuItem key={index} name={item.name} price={item.price} />
    ))}
  </div>
);

const Body = () => (
  <Container>
    {Object.entries(menuItems).map(([category, items]) => (
      <MenuCategory key={category} category={category} items={items} />
    ))}
  </Container>
);

const Footer = () => (
  <footer style={{ textAlign: 'center', padding: '20px 0', background: '#f8f9fa', marginTop: 20 }}>
    <Text size="sm">&copy; 2025 Cafe. All rights reserved.</Text>
  </footer>
);

export default function CafeMenu() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
