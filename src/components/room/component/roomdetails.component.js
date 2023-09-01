import React from "react";
import Mapview from "./mapview.component";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { View } from "react-native";
import { FeatureContainer, FeatureText } from "./styles/styles";

import OtherFeatures from "./otherfeatures.component";

const RoomDetails = (props) => {
  const { checkintime, checkouttime, location, stayname } = props.stay;
  const { address, area, country } = location;
  return (
    <View style={{}}>
      <View
        style={{
          flex: 1,
          marginTop: 0,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            marginTop: 5,
            padding: 0,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
          >
            <Icon name="home" size={16} />
            <FeatureText style={{ fontSize: 16, marginLeft: 10 }}>
              Your room at numa {stayname}
            </FeatureText>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
          >
            <Icon name="location-pin" size={16} />
            <FeatureText style={{ fontSize: 16, marginLeft: 10 }}>
              {address}
            </FeatureText>
          </View>
        </View>
        <FeatureContainer style={{ paddingHorizontal: 5, marginTop: 5 }}>
          <FeatureText style={{ fontSize: 18, textAlign: "justify" }}>
            {props.description}
          </FeatureText>
        </FeatureContainer>
        <View style={{ marginBottom: 5 }}>
          <OtherFeatures stay={props} />
        </View>
        <FeatureText
          style={{ fontSize: 20, fontFamily: "FoundersGrotesk-Semibold" }}
        >
          Further Information
        </FeatureText>
        <FeatureContainer
          style={{
            marginTop: 5,
            justifyContent: "space-around",
            backgroundColor: "#e5e7eb",
            paddingVertical: 5,
            marginBottom: 0,
          }}
        >
          <FeatureText
            style={{
              fontSize: 18,
              textAlign: "justify",
            }}
          >
            Check-in Time: {checkintime}
          </FeatureText>
          <FeatureText
            style={{
              fontSize: 18,
              textAlign: "justify",
            }}
          >
            Check-out Time: {checkouttime}
          </FeatureText>
        </FeatureContainer>
        <FeatureText>
          *Note: Early Check-in and Late Check-out upon request via "My Trips"{" "}
        </FeatureText>
      </View>
      <Mapview />
      <FeatureText style={{ fontSize: 16, textAlign: "justify" }}>
        The charm and character of our European buildings make variations within
        each category inevitable. Although all apartments in this category are
        similar in size and amenities, they may differ slightly in layout.
        Therefore, the room or apartment you see in the pictures might be
        slightly different from the one you get allocated.
      </FeatureText>
    </View>
  );
};

export default RoomDetails;
