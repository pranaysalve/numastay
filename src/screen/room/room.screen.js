import React from "react";
import RoomCard from "../../components/room/room.component";
import { stay } from "../../../data/stay";
const RoomScreen = ({}) => {
  const { rooms } = stay[0];

  return (
    <>
      <RoomCard room={rooms[0]} stay={stay[0]} />
    </>
  );
};

export default RoomScreen;
