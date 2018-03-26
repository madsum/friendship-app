import React, { Component } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import rest from '../../utils/rest';
import { connect } from 'react-redux';
import { IconImage } from '../../components/Layout/Layout';
import EventsHeader from '../../components/Events/EventsHeader';
import EventsList from '../../components/Events/EventsList';

const mapStateToProps = state => ({
  events: state.events,
  auth: state.auth,
  //changeOrder: state.changeOrder,         -- You don't need a general state here
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: userId => {
    dispatch(rest.actions.events.get({ userId }));
  },
});

class EventsView extends Component {
  state = {
    initialOrder: true, //Called it initialOrder because it is true only for the initial Render.
  };

  static navigationOptions = {
    title: 'Events',
    header: {
      visible: false,
    },
    tabBarIcon: ({ tintColor }) => (
      <IconImage
        source={require('../../../assets/eventsPicture.png')}
        tintColor={tintColor}
      />
    ),
  };

  componentDidMount = () => {
    const userId = this.props.auth.data.decoded
      ? this.props.auth.data.decoded.id
      : null;

    this.props.fetchEvents(userId);
  };

  renderContent = () => {
    const { events } = this.props;

    // If the user wants to change the order, you reverse the events list here
    if (!this.state.initialOrder) {
      events.data.reverse();
    }

    if (!events.loading) {
      return <EventsList events={events} />;
    }

    return <ActivityIndicator />;
  };

  changeSortOrder = () => {
    //Here, we only have the choice between 'Recommended First' and 'Recommended Last' so a boolean is enough
    // I just change the state of initialOrder to false every time because after the initial render, the list has to be updated
    // every time.
    this.setState({ initialOrder: false });
  };

  render = () => {
    if (!this.props.auth.data.decoded) {
      return (
        <View style={{ marginTop: 30 }}>
          <Text style={{ alignSelf: 'center' }}>You need to sign in!</Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <EventsHeader headerText="Events" />
        <TouchableOpacity onPress={() => this.changeSortOrder()}>
          <Text> Recommended </Text>
        </TouchableOpacity>
        {this.renderContent()}
      </View>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsView);
