import styled from "styled-components/native";
import { View } from "react-native";
import { Text, Card, Button } from "react-native-paper";

export const RoomName = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
  padding-top: 10px;
  padding-left: 10px;
`;
export const SubText = styled.Text`
  font-family: ${(props) => props.theme.fonts.sub_heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
  padding-top: 10px;
  padding-left: 10px;
`;
export const Price = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
  padding-top: 10px;
  padding-left: 10px;
`;

export const RoomDetailsCard = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 0;
  margin-top: 5px;
  padding: 5px;
`;
export const FeatureText = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => props.theme.colors.text.primary};
  padding-top: 10px;
`;

export const NumberBox = styled(Button).attrs({
  fontFamily: `${(props) => props.theme.fonts.body}`,
})``;

export const FeatureContainer = styled.View`
  flex-direction: row;
  justify-content: "center";
  align-items: "center";
  margin-top: 12px;
  margin-bottom: 5px;
`;

export const FeatureIconContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 5px;
`;
