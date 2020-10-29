import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from  '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import getChats from '../api/chats';

let initialMessages = [{
    id: 1,
    title: 'T1', 
    description: "M1",
    image: require('../assets/somebody.jpg'),
  }
];


function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {

  },  []);
  const getChatsFunc = async () => {
    const response = await getChats();
    setMessages(response.data);
  }

  const handleDelete = (message) => {
    //delete message and call server to delete from database
    let filteredMessages = messages.filter((mess) => mess.id !== message.id);
    setMessages(filteredMessages);
  };

  return (
    <Screen>
      <FlatList
      data={messages}
      keyExtractor={ (message) => message.id.toString()}
      renderItem={({item}) => 
      <ListItem title={item.title}
      subtitle={item.description}
      image={item.id === 1 ? 
      require('../assets/somebody.jpg') : require('../assets/somebodyTwo.jpg')}
      onPress={() => console.log('pressed', item)}
      renderRightActions={() => 
        <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
      /> }
      ItemSeparatorComponent={ListItemSeperator}
      refreshing={refreshing}
      onRefresh={() => {
        setMessages([{
          id: 2,
          title: "T2",
          description: "D2",
          image: require('../assets/somebody.jpg'),
        }])
      }}
      />

    </Screen>  
  );
}


export default MessagesScreen;