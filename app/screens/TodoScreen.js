import React, { Component } from 'react';
import { FlatList } from 'react-native'
import { Container, Header, Title, Content, Button, Body, Text, View } from 'native-base';
import { connect } from 'react-redux'

export class TodoScreen extends Component {
  handleEdit(index) {
    this.props.navigation.navigate('Submit', { index })
  }

  handleDelete(index) {
    this.props.dispatch({ type: 'delete', payload: index })
    alert('Data deleted!')
  }

  render() {
    return (
      <Container>
        <Header>
          <Body style={{ marginLeft: 15 }}>
            <Title>Todo list</Title>
          </Body>
        </Header>
        <Content padder>
          <FlatList
            ref={(ref) => { this.myFlatListRef = ref }}
            data={this.props.list}
            renderItem={({ item, index }) => {
              return (
                <View style={{ flexDirection: 'row', margin: 15 }}>
                  <Text style={{ flex: 1, fontSize: 20 }}>
                    {item}
                  </Text>
                  <Button warning
                    onPress={() => { this.handleEdit(index) }}
                    style={{ width: null }}>
                    <Text>
                      Edit
                    </Text>
                  </Button>
                  <Button danger
                    onPress={() => { this.handleDelete(index) }}
                    style={{ marginLeft: 5, width: null }}>
                    <Text>
                      Delete
                    </Text>
                  </Button>
                </View>
              )
            }}
            keyExtractor={item => item}
          />
          <Button block onPress={() => { this.props.navigation.navigate('Submit') }} >
            <Text>
              Create list
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => (
  { list: state.list }
)
export default connect(mapStateToProps)(TodoScreen)