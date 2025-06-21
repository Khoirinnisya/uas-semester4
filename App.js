import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const menuItems = [
  { id: '1', name: 'Nasi Goreng', price: 15000 },
  { id: '2', name: 'Mie Ayam', price: 12000 },
  { id: '3', name: 'Es Teh', price: 5000 },
  { id: '4', name: 'Jus Alpukat', price: 8000 },
];

export default function App() {
  const [order, setOrder] = useState([]);

  const addItem = (item) => {
    setOrder([...order, item]);
  };

  const resetOrder = () => {
    setOrder([]);
  };

  const getTotal = () => {
    return order.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Kasir</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.menuItem} onPress={() => addItem(item)}>
            <Text>{item.name} - Rp{item.price}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.subtitle}>Pesanan:</Text>
      <FlatList
        data={order}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.orderItem}>- {item.name} (Rp{item.price})</Text>
        )}
      />

      <Text style={styles.total}>Total: Rp{getTotal()}</Text>

      <TouchableOpacity style={styles.resetButton} onPress={resetOrder}>
        <Text style={styles.resetText}>Reset Pesanan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5,
    color: '#333',
  },
  menuItem: {
    padding: 15,
    backgroundColor: '#4caf50',
    marginVertical: 5,
    borderRadius: 8,
  },
  orderItem: {
    fontSize: 16,
    marginTop: 3,
    color: '#555',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#222',
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: '#f44336',
    padding: 12,
    borderRadius: 8,
  },
  resetText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});