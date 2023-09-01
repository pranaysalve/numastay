import React from "react";
import { Pressable, Text, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { RoomDetailsCard, FeatureText } from "./styles/styles";
import { date } from "../../../utils/dateformat";
import { calculateNights } from "../../../utils/calculateNights";
import { currencyformat } from "../../../utils/currencyformat";

const BookingButton = (props) => {
  const { finalPrice } = props.value;
  const onClick = () => {
    console.log("on book click");
  };
  return (
    <>
      <RoomDetailsCard
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FeatureText style={{ fontSize: 18 }}>
          {currencyformat(finalPrice)} .including Tax
        </FeatureText>
        <Button
          onPress={onClick}
          mode="contained"
          style={{
            borderRadius: 0,
            backgroundColor: "#212322",
          }}
          textColor=""
        >
          Book Now
        </Button>
      </RoomDetailsCard>
    </>
  );
};

export default BookingButton;
