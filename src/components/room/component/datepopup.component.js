import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Modal,
  Portal,
  Text,
  PaperProvider,
  Button,
  IconButton,
} from "react-native-paper";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import moment from "moment";

const DatePickerPopup = ({
  isVisible,
  children,
  closeDatePicker,
  onData,
  mode,
  checkin,
  checkout,
}) => {
  // const handleModalClick = (event) => {
  //   event.stopPropagation();
  // };

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);

  const today = new Date();
  const startDate = moment(today, "YYYY/MM/DD").format("YYYY/MM/DD");

  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState(startDate);

  function handleChangeStartDate(propDate) {
    onData(propDate, mode);
    setStartedDate(propDate);
    closeDatePicker();
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  // useEffect(() => {
  //   const dataToSend = {
  //     totalguest: totalguest,
  //     adults: setAdult,
  //     children: setChildren,
  //     infants: setInfant,
  //   };
  //   onData(dataToSend);
  // }, [totalguest]);

  // const handleSendData = () => {
  //   const dataToSend = {
  //     totalguest: totalguest,
  //     adults: setAdult,
  //     children: setChildren,
  //     infants: setInfant,
  //   };
  //   onData(dataToSend);
  //   closeModal();
  // };

  return (
    <View>
      {children}
      <PaperProvider>
        <Portal>
          <Modal visible={isVisible} animationType="slide" transparent>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  options={{
                    backgroundColor: "#ffffff",
                    textHeaderColor: "#00635b",
                    textDefaultColor: "#00635b",
                    selectedTextColor: "#fff",
                    mainColor: "#00635b",
                    textSecondaryColor: "#00635b",
                    borderColor: "rgba(122, 146, 165,0.3)",
                  }}
                  minimumDate={startDate}
                  current={checkin}
                  selected={startedDate}
                  mode="calendar"
                  // minuteInterval={30}
                  style={{ borderRadius: 10 }}
                  onDateChange={handleChangeStartDate}
                  onSelectedChange={(date) => setSelectedStartDate(date)}
                />
              </View>
            </View>
          </Modal>
        </Portal>
      </PaperProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
  centeredView: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    bottom: 400,
    width: "90%",
    elevation: 5,
  },
});
export default DatePickerPopup;
