import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const JournalScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/journals');
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching entries', error);
    }
  };

  const addEntry = async () => {
    try {
      const newEntry = { title, content, category };
      await axios.post('http://localhost:3000/api/journals', newEntry);
      setTitle('');
      setContent('');
      setCategory('');
      fetchEntries();
    } catch (error) {
      console.error('Error adding entry', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Add Entry" onPress={addEntry} />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={styles.entryTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
            <Text>{item.category}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  entry: {
    marginBottom: 16,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default JournalScreen;
