import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { RoomDetailsCard, FeatureText } from "./styles/styles";
import { date } from "../../../utils/dateformat";
import { calculateNights } from "../../../utils/calculateNights";
import GuestPopup from "./guestpopup.component";
import { calDiscountedPrice } from "../../../utils/discountcalculate";
import DatePickerPopup from "./datepopup.component";
import RoomDetails from "./roomdetails.component";
import moment from "moment";

const BookingDatesView = (props) => {
  const { checkin, checkout, guests, pricepernight } = props.bookingdetails;
  const checkinDate = moment(checkin, "YYYY/MM/DD").format("YYYY/MM/DD");
  const checkoutDate = moment(checkout, "YYYY/MM/DD").format("YYYY/MM/DD");
  const { onDetails } = props;
  const discount = "12";
  const [selectGuest, setSelectGuest] = useState({ totalguest: guests });
  const [selectDiscount, setSelectDiscount] = useState(discount && discount);
  const [selectCheckin, setSelectCheckin] = useState(
    moment(checkin, "YYYY/MM/DD").format("YYYY/MM/DD")
  );
  const [selectCheckout, setSelectCheckout] = useState();
  const [isDiscount, setIsDiscount] = useState(
    discount != null || undefined ? true : false
  );
  const [finalPrice, setFinalPrice] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [datePickerMode, setDatePickerMode] = useState("checkin");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleDatePicker = (mode) => {
    setDatePickerMode(mode);
    setDatePickerVisible(!isDatePickerVisible);
  };
  useEffect(() => {
    if (isModalVisible) {
      setDatePickerMode(false);
    }
    if (isDatePickerVisible) {
      setModalVisible(false);
    }
  }, [isDatePickerVisible || isModalVisible]);
  const handleDate = (date, mode) => {
    if (mode === "checkin") {
      setSelectCheckin(date);
      const newCheckOut = moment(date, "YYYY/MM/DD")
        .add(1, "days")
        .format("YYYY/MM/DD");
      setSelectCheckout(newCheckOut);
      calculateData();
    }
    if (mode === "checkout") {
      setSelectCheckout(date);
      calculateData();
    }
  };

  const calculateData = () => {
    const totalNights = calculateNights(
      selectCheckin !== undefined
        ? selectCheckin
        : moment(checkin, "YYYY/MM/DD").format("YYYY/MM/DD"),
      selectCheckout !== undefined
        ? selectCheckout
        : moment(checkout, "YYYY/MM/DD").format("YYYY/MM/DD")
    );
    if (selectGuest) {
      const totalguests = selectGuest.totalguest;
      const subtotal = isDiscount
        ? calDiscountedPrice(
            +totalguests * +pricepernight * totalNights,
            discount
          )
        : calDiscountedPrice(+totalguests * +pricepernight * totalNights, 0);

      setFinalPrice(subtotal);

      onDetails({
        totalguests,
        totalguests,
        finalPrice: subtotal || finalPrice,
      });
    }
  };
  useEffect(() => {
    calculateData();
  }, [selectGuest || guests]);
  useEffect(() => {
    calculateData();
  }, [selectCheckout]);

  const handleChildData = (data) => {
    // Handle the data received from the guestpopup component
    setSelectGuest(data);
  };

  return (
    <>
      <GuestPopup
        isVisible={isModalVisible}
        closeModal={toggleModal}
        onData={handleChildData}
        guests={guests}
      >
        <DatePickerPopup
          isVisible={isDatePickerVisible}
          closeDatePicker={toggleDatePicker}
          mode={datePickerMode}
          onData={handleDate}
          checkin={
            selectCheckin
              ? selectCheckin
              : moment(checkin, "YYYY/MM/DD").format("YYYY/MM/DD")
          }
          checkout={
            selectCheckout
              ? selectCheckout
              : moment(checkout, "YYYY/MM/DD").format("YYYY/MM/DD")
          }
        >
          <View>
            <RoomDetailsCard
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                <FeatureText
                  style={{
                    fontSize: 16,
                  }}
                >
                  Stay from{" "}
                </FeatureText>
                <Button
                  mode="text"
                  textColor="#212322"
                  compact="true"
                  contentStyle={{
                    direction: "rtl",
                    left: "auto",
                  }}
                  labelStyle={{
                    fontFamily: "FoundersGrotesk-Medium",
                    textDecorationLine: "underline",
                    fontSize: 16,
                  }}
                  onPress={() => toggleDatePicker("checkin")}
                >
                  {date(selectCheckin ? selectCheckin : checkin)}
                </Button>
                <FeatureText
                  style={{
                    fontSize: 16,
                  }}
                >
                  {" "}
                  to
                </FeatureText>
                <Button
                  accessibilityLabelledBy={"checout"}
                  icon="pencil"
                  mode="text"
                  textColor="#212322"
                  compact="true"
                  contentStyle={{
                    direction: "rtl",
                    left: "auto",
                    justifyContent: "center",
                    alignItems: "baseline",
                  }}
                  labelStyle={{
                    fontFamily: "FoundersGrotesk-Medium",
                    textDecorationLine: "underline",
                    fontSize: 16,
                  }}
                  onPress={() => toggleDatePicker("checkout")}
                >
                  {date(selectCheckout ? selectCheckout : checkout)}
                </Button>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  icon="pencil"
                  mode="text"
                  textColor="#212322"
                  compact="true"
                  contentStyle={{ direction: "rtl", left: "auto" }}
                  labelStyle={{
                    fontFamily: "FoundersGrotesk-Medium",
                    textDecorationLine: "underline",
                    fontSize: 16,
                  }}
                  onPress={toggleModal}
                >
                  {selectGuest ? selectGuest.totalguest : guests} Guest
                </Button>
              </View>
            </RoomDetailsCard>
          </View>
          <RoomDetails stay={props.stay} description={props.description} />
        </DatePickerPopup>
      </GuestPopup>
    </>
  );
};

export default BookingDatesView;
