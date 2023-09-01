import React from "react";
import { View, Image, Text } from "react-native";
import {
  FeatureText,
  Price,
  RoomDetailsCard,
  RoomName,
  SubText,
} from "./styles/styles";
import { currencyformat } from "../../../utils/currencyformat";
import {
  AREA,
  BEDROOM,
  DBOUBLEBED,
  GUEST,
  LIVINGROOM,
} from "../../../../assets/features/svg";
import Features from "./features.component";
const DetailsView = ({ value }, props) => {

  const { description, features, pricepernight, roomid, roomname } = value;
  const { roomarea, adults, bedroom, kingbed, livingroom, singlebed, sofa } =
    features;
  return (
    <RoomDetailsCard>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <RoomName>{roomname}</RoomName>
        <Price>
          {currencyformat(pricepernight)} /<SubText>per night</SubText>
        </Price>
      </View>
      <Features features={features} />
    </RoomDetailsCard>
  );
};

export default DetailsView;
