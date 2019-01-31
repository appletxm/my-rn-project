import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, FlatList } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <SectionList
            sections={[
              {title: 'D', data: ['Devin']},
              {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie', 'Julie', 'Julie', 'Julie', 'Julie', 'jjjjj']},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>

        <View style={styles.container}>
          <FlatList style={{marginTop: 20, backgroundColor: 'gray', color: 'white'}}
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item2}>{item.key}</Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#bbb'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,255,0.5)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  item2: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'white'
  }
})