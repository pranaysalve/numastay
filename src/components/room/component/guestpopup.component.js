import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import {
  Modal,
  Portal,
  Text,
  PaperProvider,
  Button,
  IconButton,
} from "react-native-paper";

const GuestPopup = ({
  isVisible,
  closeModal,
  children,
  buttonRef,
  onData,
  guests,
}) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [setAdult, setSelectAdult] = useState(0);
  const [setChildren, setSelectChildren] = useState(0);
  const [setInfant, setSelectInfant] = useState(0);

  const modalRef = useRef(null);

  //   useEffect(() => {
  //     if (buttonRef.current && modalRef.current) {
  //       buttonRef.current.measureInWindow((x, y, width, height) => {
  //         setModalPosition({ top: y + height, left: x });
  //       });
  //     }
  //   }, [isVisible]);
  const totalguest = setAdult + setChildren + setInfant;
  useEffect(() => {
    const dataToSend = {
      totalguest: totalguest,
      adults: setAdult,
      children: setChildren,
      infants: setInfant,
    };
    onData(dataToSend);
  }, [totalguest]);

  const handleSendData = () => {
    const dataToSend = {
      totalguest: totalguest,
      adults: setAdult,
      children: setChildren,
      infants: setInfant,
    };
    onData(dataToSend);
    closeModal();
  };

  const addGuest = (e) => {
    if (setAdult < 5 && totalguest < 4) setSelectAdult(setAdult + 1);
    // add warning if adults are more than 5 or the room capacity
  };
  const removeGuest = (e) => {
    setSelectAdult(-1 + setAdult);
  };
  const addChildren = (e) => {
    if (setChildren < 3 && totalguest < 4) setSelectChildren(setChildren + 1);
    // add warning if childrens are more than 3
  };
  const removeChildren = (e) => {
    if (setChildren > 0) setSelectChildren(setChildren - 1);
    // disable remove button if setChildren is 0
  };

  const addInfants = (e) => {
    if (setInfant < 2 && totalguest < 4) setSelectInfant(setInfant + 1);
  };
  const removeInfants = (e) => {
    if (setInfant > 0) setSelectInfant(setInfant - 1);
  };

  return (
    <View>
      {children}
      <PaperProvider>
        <Portal>
          <Modal visible={isVisible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <IconButton
                  icon="minus"
                  mode="outlined"
                  onPress={removeGuest}
                  iconColor="#000"
                  style={{ borderColor: "#000", borderRadius: 0, gap: 0 }}
                />
                <Button
                  mode="outlined"
                  style={{ borderColor: "#000", borderRadius: 0 }}
                  textColor="#000"
                  labelStyle={{
                    fontSize: 16,
                    fontFamily: "FoundersGrotesk-Regular",
                  }}
                >
                  Adults: {!setAdult ? setSelectAdult(1) : setAdult}
                </Button>
                <IconButton
                  icon="plus"
                  mode="outlined"
                  onPress={addGuest}
                  iconColor="#000"
                  style={{ borderColor: "#000", borderRadius: 0 }}
                />
              </View>

              <View style={styles.modalContent}>
                <IconButton
                  icon="minus"
                  mode="outlined"
                  onPress={removeChildren}
                  iconColor="#000"
                  style={{ borderColor: "#000", borderRadius: 0, gap: 0 }}
                />
                <Button
                  mode="outlined"
                  style={{ borderColor: "#000", borderRadius: 0 }}
                  textColor="#000"
                  labelStyle={{
                    fontSize: 18,
                    fontFamily: "FoundersGrotesk-Regular",
                  }}
                >
                  Childrens: {setChildren}
                </Button>
                <IconButton
                  icon="plus"
                  mode="outlined"
                  onPress={addChildren}
                  iconColor="#000"
                  style={{ borderColor: "#000", borderRadius: 0 }}
                />
              </View>
              <View style={styles.modalContent}>
                <IconButton
                  icon="minus"
                  mode="outlined"
                  onPress={removeInfants}
                  iconColor="#000"
                  style={{ borderColor: "#000", borderRadius: 0, gap: 0 }}
                />
                <Button
                  mode="outlined"
                  style={{ borderColor: "#000", borderRadius: 0 }}
                  textColor="#000"
                  labelStyle={{
                    fontSize: 18,
                    fontFamily: "FoundersGrotesk-Regular",
                  }}
                >
                  Infants: {setInfant}
                </Button>
                <IconButton
                  icon="plus"
                  mode="outlined"
                  onPress={addInfants}
                  iconColor="#000"
                  style={{ borderColor: "#000", borderRadius: 0 }}
                />
              </View>
              <Button
                mode="contained"
                onPress={handleSendData}
                style={{
                  marginTop: 10,
                  borderRadius: 0,
                  backgroundColor: "#000",
                }}
                labelStyle={{ fontFamily: "Greed-Medium", fontSize: 18 }}
                uppercase
              >
                Select Guests
              </Button>
            </View>
          </Modal>
        </Portal>
      </PaperProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    padding: 20,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
    elevation: 5,
    bottom: 400,
    left: 80,
  },
  modalContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default GuestPopup;
