import React from 'react';
import { FlatList } from 'react-native';

import EventsDetail from './EventsDetail';

const EventsList = ({ events }) => {
  const renderItem = ({ item }) => {
    return (
      <EventsDetail
        title={item.title}
        city={item.city}
        address={item.address}
        date={item.eventDate}
        id={item.id}
      />
    );
  };

  const keyExtractor = event => event.id;

  return (
    <FlatList
      data={events.data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      refreshing={false} // Set to false to remove the loading icon
      onRefresh={renderItem} //Call renderItem again every time the events.data list changes
    />
  );
};

export default EventsList;
