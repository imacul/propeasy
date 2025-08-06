import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Subheading, Card, Paragraph, Divider } from 'react-native-paper';

const PropertyDetailScreen = ({ route }) => {
  const { property } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: property.imageUrl }} />
        <Card.Content>
          <Title style={styles.address}>{property.address}</Title>
          <Subheading>Rent: ${property.rent}/month</Subheading>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Tenant Information</Title>
          <Paragraph>Name: {property.tenant.name}</Paragraph>
          <Paragraph>Phone: {property.tenant.phone}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Maintenance Requests</Title>
          {property.maintenanceRequests.map(req => (
            <View key={req.id}>
              <Paragraph>{req.issue} - Status: {req.status}</Paragraph>
              <Divider style={styles.divider} />
            </View>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  address: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    margin: 10,
  },
  divider: {
    marginVertical: 8,
  },
});

export default PropertyDetailScreen;
