import React from "react";
import { View } from "react-native";
import {
  AREA,
  BEDROOM,
  DBOUBLEBED,
  GUEST,
  LIVINGROOM,
} from "../../../../assets/features/svg";
import { FeatureText } from "./styles/styles";

const Features = ({ features }) => {
  const { roomarea, adults, bedroom, kingbed, livingroom, singlebed, sofa } =
    features;
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 12,
        }}
      >
        {adults && (
          <View
            style={{
              padding: 2,
              alignItems: "center",
            }}
          >
            <GUEST width={30} height={30} />
            <FeatureText>{adults} adults</FeatureText>
          </View>
        )}
        {roomarea && (
          <View
            style={{
              padding: 2,
              alignItems: "center",
            }}
          >
            <AREA width={30} height={30} />
            <FeatureText>{roomarea} </FeatureText>
          </View>
        )}
        {bedroom && (
          <View
            style={{
              padding: 2,
              alignItems: "center",
            }}
          >
            <BEDROOM width={30} height={30} />
            <FeatureText>{bedroom} Bedroom </FeatureText>
          </View>
        )}
        {
          <View
            style={{
              padding: 2,
              alignItems: "center",
            }}
          >
            <DBOUBLEBED width={30} height={30} />
            <FeatureText>{kingbed} Kingbed </FeatureText>
          </View>
        }
        {
          <View
            style={{
              padding: 2,
              alignItems: "center",
            }}
          >
            <LIVINGROOM width={30} height={30} />
            <FeatureText>{livingroom} Living Room </FeatureText>
          </View>
        }
      </View>
    </>
  );
};

export default Features;
