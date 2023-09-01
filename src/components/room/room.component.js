import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import ImageView from "./component/ImageView.component";
import DetailsView from "./component/DetailsView.component";
import BookingDatesView from "./component/bookingdate.component";
import BookingButton from "./component/bookingbutton.component";
import RoomDetails from "./component/roomdetails.component";
import moment from "moment";
import Mapview from "./component/mapview.component";
const RoomCard = (props) => {
  const { description, features, photos, pricepernight, roomid, roomname } =
    props.room;
  const [finalPrice, setFinalPrice] = useState();
  const bookingdetails = {
    checkin: moment(new Date(), "YYYY/MM/DD"),
    checkout: moment(new Date(), "YYYY/MM/DD").add(1, "days"),
    guests: 1,
  };

  const handleChildData = (data) => {
    // Handle the data received from the guestpopup component
    // console.log({ data });
    setFinalPrice(data.finalPrice);
  };
  // console.log({ finalPrice });

  return (
    <View
      style={{
        margin: 5,
        height: "100%",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <ScrollView
        style={{ flexGrow: 1, marginVertical: 0 }}
        aria-expanded={false}
      >
        <View style={{ flexGrow: 1 }}>
          <ImageView images={photos} />
          <DetailsView
            value={{ description, features, pricepernight, roomid, roomname }}
          />
          <BookingDatesView
            bookingdetails={{ ...bookingdetails, pricepernight }}
            onDetails={handleChildData}
            stay={props.stay}
            description={description}
          />
          {/* <RoomDetails /> */}
        </View>
      </ScrollView>
      <BookingButton value={{ finalPrice }} />
    </View>
  );
};

export default RoomCard;
