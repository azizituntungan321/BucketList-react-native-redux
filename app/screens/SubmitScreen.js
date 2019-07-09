import React, { Component } from 'react';
import { Container, Header, Title, Content, Item, Button, Left, Right, Body, Textarea, Text } from 'native-base';
import { connect } from 'react-redux'

export class SubmitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false
    }
  }
  
  componentWillMount() {
    const { navigation } = this.props
    const index = navigation.getParam('index')
    if (index >= 0) {
      this.setState({
        Index: index,
        Text: this.props.list[index],
        isUpdate: true
      })
    }
  }

  handleSubmit() {
    if (this.state.isUpdate === true) {
      let { Text, Index } = this.state;
      this.props.dispatch({ type: 'edit', payload: { Text, Index } })
      this.props.navigation.navigate('Home')
      alert('Data updated!')
    } else {
      let { Text } = this.state;
      this.props.dispatch({ type: 'submit', payload: Text })
      this.props.navigation.navigate('Home')
      alert('Data submitted!')
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Submit</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item regular>
            <Textarea rowSpan={5}
              placeholder='Input something'
              value={this.state.Text}
              onChangeText={(Text) => this.setState({ Text })} />
          </Item>
          <Button block
            style={{ marginTop: 20 }}
            onPress={() => this.handleSubmit()} >
            <Text>
              Submit
            </Text>
          </Button>
          <Button block info
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Home')} >
            <Text>
              Back to home
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

mapStateToProps = (state) => (
  { list: state.list }
)
export default connect(mapStateToProps)(SubmitScreen)