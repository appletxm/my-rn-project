import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, ActivityIndicator } from 'react-native';

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
        <Text style={{fontSize: 20, backgroundColor: '#EB8B00', color: '#fff', height: 40}}>{title}</Text>
        <Text>{description}</Text>
        <View style={{backgroundColor: '#ccc', height: 200}}>
          <FlatList 
            style={{marginTop: 20, backgroundColor: 'gray', color: 'white'}}
            data={movies}
            renderItem={({item}) => <Text style={styles.item2}>{item.title} ({item.releaseYear})</Text>}
          />
        </View>
      </View>)
    }
  }

  render() {
    return  this.$isDoding()
  }
}