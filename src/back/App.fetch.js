import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, ActivityIndicator, Image, Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item2: {
    paddingBottom: 10,
    fontSize: 18,
    height: 44,
    color: 'white'
  }
})

export default class SectionListBasics extends Component {
  constructor(props){
    super(props)
    this.state = {
      userList: [],
      movieListObj: {
        title: '',
        description: '',
        movies: [],
      },
      isLoading: false
    }
  }

  componentDidMount() {
    this.$getMovieList()
    // this.$getUserList()
  }

  $decorateData(data) {
    data.movies.map(item => {
      item.key = item.id
    })
    return data
  }

  $getMovieList() {
    this.setState({
      isLoading: true
    })
    // Alert.alert('get movie list')
    fetch("https://facebook.github.io/react-native/movies.json").then(response => {
      return response.json()
    }).then(data => {
      // Alert.alert(JSON.stringify(data))
      let decorateData = this.$decorateData(data)
      this.setState({
        movieListObj: decorateData,
        isLoading: false
      })
    }).catch(err => {
      this.setState({
        isLoading: false
      })
      Alert.alert(err)
    })
  }

  $getUserList() {
    Alert.alert('get user list')
    fetch("http://127.0.0.1:8019/api/rf_studio/admin/user/list", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstParam: "yourValue",
        secondParam: "yourOtherValue"
      })
    });
  }

  $isDoding() {
    let { title, description, movies } = this.state.movieListObj
    let { isLoading } = this.state
    
    if (isLoading === true) {
      return (
        <View style={{backgroundColor: '#ccc', padding: 20}}><ActivityIndicator /></View>
      )
    } else {
      return (<View style={styles.container}>
        <Text>{Platform.OS + ' ' + Platform.Version}</Text>
        <Text style={{fontSize: 20, backgroundColor: '#EB8B00', color: '#fff', height: 40}}>{title}</Text>
        <Text>{description}</Text>
        <View style={{backgroundColor: '#ccc', height: 200}}>
          <FlatList 
            style={{marginTop: 20, backgroundColor: 'gray', color: 'white'}}
            data={movies}
            renderItem={({item}) => <Text style={styles.item2}>{item.title} ({item.releaseYear})</Text>}
          />
          {/* <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
          <Image
            style={{width: 66, height: 58}}
            source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
          /> */}
        </View>
        <Image source={require('./src/assets/imgs/1.jpg')}></Image>
      </View>)
    }
  }

  render() {
    return  this.$isDoding()
  }
}