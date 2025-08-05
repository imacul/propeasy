import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title, Card, Paragraph } from 'react-native-paper';

const DashboardScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
            <Title style={styles.title}>Dashboard</Title>
                  
                        <Card style={styles.card}>
                                <Card.Content>
                                          <Title>Manage Properties</Title>
                                                    <Paragraph>View and manage all your properties.</Paragraph>
                                                            </Card.Content>
                                                                    <Card.Actions>
                                                                              <Button onPress={() => navigation.navigate('PropertyList')}>
                                                                                          View Properties
                                                                                                    </Button>
                                                                                                            </Card.Actions>
                                                                                                                  </Card>
                                                                                                                        
                                                                                                                              {/* You could add more cards here for other features */}
                                                                                                                                  </View>
                                                                                                                                    );
                                                                                                                                    };

                                                                                                                                    const styles = StyleSheet.create({
                                                                                                                                      container: {
                                                                                                                                          flex: 1,
                                                                                                                                              padding: 16,
                                                                                                                                                  backgroundColor: '#fff',
                                                                                                                                                    },
                                                                                                                                                      title: {
                                                                                                                                                          fontSize: 28,
                                                                                                                                                              marginBottom: 20,
                                                                                                                                                                  textAlign: 'center',
                                                                                                                                                                    },
                                                                                                                                                                      card: {
                                                                                                                                                                          marginBottom: 16,
                                                                                                                                                                            },
                                                                                                                                                                            });

                                                                                                                                                                            export default DashboardScreen;