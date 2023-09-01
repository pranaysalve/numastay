import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { List } from "react-native-paper";
import {
  AIRCONDITION,
  BREAKFAST,
  CONTACKLESSCHECKIN,
  DESK,
  DRYINGRACK,
  FAMILY,
  IRON,
  KITCHEN,
  LAUNDRY,
  LIFT,
  MAPGUIDE,
  SUPPORT,
  TEA,
  TOILATORIES,
  TOWELS,
  WIFI,
} from "../../../../assets/features/svg";
import {
  FeatureContainer,
  FeatureText,
  FeatureIconContainer,
} from "./styles/styles";

const OtherFeatures = (props) => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <>
      <List.Accordion
        title="Room Amenities"
        id="1"
        style={{ backgroundColor: "#00635b" }}
        titleStyle={{
          fontFamily: "FoundersGrotesk-Semibold",
          fontSize: 18,
          color: "#fff",
        }}
        right={(props) => <Icon name="chevron-down" size={20} color={"#fff"} />}
        expanded={expanded}
        onPress={handlePress}
      >
        <FeatureContainer>
          {props.stay.stay.amenities.aircondition && (
            <FeatureIconContainer>
              <AIRCONDITION width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Air Conditioning
              </FeatureText>
            </FeatureIconContainer>
          )}
          {props.stay.stay.amenities.breakfastbox && (
            <FeatureIconContainer>
              <BREAKFAST width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Breakfast Box
              </FeatureText>
            </FeatureIconContainer>
          )}
          {props.stay.stay.amenities.cityguide && (
            <FeatureIconContainer>
              <MAPGUIDE width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Curated City Guides
              </FeatureText>
            </FeatureIconContainer>
          )}
          {props.stay.stay.amenities.commonlaundry && (
            <FeatureIconContainer>
              <LAUNDRY width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Common Laundry
              </FeatureText>
            </FeatureIconContainer>
          )}
          {props.stay.stay.amenities.contactlesscheckin && (
            <FeatureIconContainer>
              <CONTACKLESSCHECKIN width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Contectless Checkin
              </FeatureText>
            </FeatureIconContainer>
          )}
        </FeatureContainer>
        <FeatureContainer>
          {props.stay.stay.amenities.dryingraok && (
            <FeatureIconContainer>
              <DRYINGRACK width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Drying Rack
              </FeatureText>
            </FeatureIconContainer>
          )}
          {props.stay.stay.amenities.familyfreindly && (
            <FeatureIconContainer>
              <FAMILY width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Family & Friendly
              </FeatureText>
            </FeatureIconContainer>
          )}
          {props.stay.stay.amenities.freshtowel && (
            <FeatureIconContainer>
              <TOWELS width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Fresh Towel
              </FeatureText>
            </FeatureIconContainer>
          )}
          {props.stay.stay.amenities.iron && (
            <FeatureIconContainer>
              <IRON width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Iron & Iron Table
              </FeatureText>
            </FeatureIconContainer>
          )}
          {props.stay.stay.amenities.kitchen && (
            <FeatureIconContainer>
              <KITCHEN width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Built-in Kitchen
              </FeatureText>
            </FeatureIconContainer>
          )}
        </FeatureContainer>
        <FeatureContainer>
          {props.stay.stay.amenities.laptopdesk && (
            <FeatureIconContainer>
              <DESK width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Laptop Friendly
              </FeatureText>
            </FeatureIconContainer>
          )}
          {props.stay.stay.amenities.luggagestorage && (
            <FeatureIconContainer>
              <LIFT width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Luggage Storage
              </FeatureText>
            </FeatureIconContainer>
          )}
          {props.stay.stay.amenities.shampooandconditioner && (
            <FeatureIconContainer>
              <TOILATORIES width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Shampoo & Conditioner
              </FeatureText>
            </FeatureIconContainer>
          )}
          {props.stay.stay.amenities.support && (
            <FeatureIconContainer>
              <SUPPORT width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                24/7 Support
              </FeatureText>
            </FeatureIconContainer>
          )}
          {props.stay.stay.amenities.teaandcoffee && (
            <FeatureIconContainer>
              <TEA width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Tea & Coffee
              </FeatureText>
            </FeatureIconContainer>
          )}
        </FeatureContainer>
        <FeatureContainer>
          {props.stay.stay.amenities.wifi && (
            <FeatureIconContainer>
              <WIFI width={30} height={30} />
              <FeatureText style={{ textAlign: "center" }}>
                Highspeed Wifi
              </FeatureText>
            </FeatureIconContainer>
          )}
        </FeatureContainer>
      </List.Accordion>
    </>
  );
};

export default OtherFeatures;
