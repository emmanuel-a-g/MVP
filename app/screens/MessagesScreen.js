import React from 'react';
import { FlatList } from 'react-native';

const messages = [
  {id: 1,
  title: 'T1', 
  description: "M1",
  image: require('../assets/somebody.jpg')
  },
  {id: 2,
    title: 'T2', 
    description: "M2",
    image: require('../assets/somebody.jpg')
    },
];

function MessagesScreen(props) {
  return (
    <FlatList
    data={messages}
    keyExtractor={ (message) => message.id.toString()}
    // renderItem={({item} => )}
    />
      
  );
}

export default MessagesScreen;