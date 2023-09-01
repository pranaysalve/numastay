import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import Swiper from "react-native-swipe-image";

const ImageView = ({ images }) => {
  return (
    <>
      <Card style={{ borderRadius: 2 }}>
        <Card.Cover
          style={{ borderRadius: 2, height: 250 }}
          source={{ uri: `${images[0].url}` }}
        />
      </Card>
    </>
  );
};

export default ImageView;
