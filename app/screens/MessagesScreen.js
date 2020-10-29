import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from  '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import axios from 'axios';

let initialMessages = [{
    id: 1,
    title: 'T1', 
    description: "M1",
    messageid: 0,
    image: require('../assets/somebody.jpg'),
  }
];

function MessagesScreen({returnCount}) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getChatsFunc();
  },  []);
  const getChatsFunc = () => {
    axios.get('http://192.168.1.235:9000/chats')
    .then((response) => {
      setMessages(response.data);
      let totalTexts = response.data.length;
      console.log(totalTexts)
      returnCount(totalTexts);
    })
    .catch((error) => {
      console.log('error:', error);
    })
  }

const handleDelete = (message) => {
    //delete message here, then call server to delete from database
    let filteredMessages = messages.filter((mess) => mess.messageid !== message.messageid);
    setMessages(filteredMessages);
    axios.delete(`http://192.168.1.235:9000/chats/${message.messageid}`)
    .then((res) => {
      console.log('deleted');
    })
    .catch((err) => {
      console.log(err);
    })
  };
  const determineImage = (id) => {
    if (id === '1') {
      return require('../assets/somebody.jpg');
    } else if (id === '2') {
      return require('../assets/somebodyTwo.jpg');
    } else {
      return require('../assets/somebodyThree.jpg');
    }
  };

  return (
    <Screen>
      <FlatList
      data={messages}
      keyExtractor={ (message) => message.messageid.toString()}
      renderItem={({item}) => 
      <ListItem title={item.title}
      subtitle={item.description}
      image={determineImage(item.id)}
      onPress={() => console.log('pressed')}
      renderRightActions={() => 
        <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
      /> }
      ItemSeparatorComponent={ListItemSeperator}
      refreshing={refreshing}
      onRefresh={() => {
        getChatsFunc()
      }}
      />

    </Screen>  
  );
}


export default MessagesScreen;