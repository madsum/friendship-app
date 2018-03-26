import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import rest from '../../utils/rest';
import { connect } from 'react-redux';
import { IconImage } from '../../components/Layout/Layout';
import EventsHeader from '../../components/Events/EventsHeader';
import EventsList from '../../components/Events/EventsList';

const mapStateToProps = state => ({
  events: state.events,
  auth: state.auth,
  changeOrder: state.changeOrder,
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: userId => dispatch(rest.actions.events.get({ userId })),
  openEventForm: () =>
    dispatch(
      NavigationActions.navigate({
        routeName: 'EventCreateView',
      }),
    ),
});

class EventsView extends Component {
  state = {
    initialOrder: true,
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

    if (!this.state.initialOrder) {
      events.data.reverse();
    }

    if (!events.loading) {
      return <EventsList events={events} />;
    }

    return <ActivityIndicator />;
  };
  // render

  changeSortOrder = () => {
    //if (this.state.initialOrder) {
    this.setState({ initialOrder: false });
    //} else if (!this.state.initialOrder) {
    //  this.setState({ initialOrder: true });
    //}
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
          <Text style={{ alignSelf: 'right' }}> Recommended </Text>
        </TouchableOpacity>
        {this.renderContent()}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.props.openEventForm()}
          style={styles.TouchableOpacityStyle}
        >
          <Text style={{ fontSize: 30 }}>{'+'}</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    right: 5,
    bottom: 15,
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: '#d8d8d8',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsView);
