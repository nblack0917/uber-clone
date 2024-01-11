import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import { selectOrigin, setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    icon: "home",
    title: "Home",
    location: { lat: 30.4221444, lng: -97.69650949999999 },
    description: "12800 Copper Cliff Ave, Austin, Texas",
    destination: "Copper Cliff Ave, Austin, Texas",
  },
  {
    id: "456",
    icon: "briefcase",
    title: "Work",
    location: { lat: 30.398889, lng: -97.725622 },
    description: "11228 Domain Dr, Austin, Texas",
    destination: "Domain Drive, Austin, Texas",
  },
  {
    id: "789",
    icon: "briefcase",
    title: "Jen's Work",
    location: { lat: 30.326311, lng: -97.714876 },
    description: "6107 1/2 Airport Blvd, Austin, Texas",
    destination: "1/2 Airport Blvd, Austin, Texas",
  },
];

const NavFavorites = ({ originList }) => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();

  const handlePress = (location, description) => {
    if (originList === true) {
      dispatch(
        setOrigin({
          location: location,
          description: description,
        })
      );
      dispatch(setDestination(null));
    } else {
      dispatch(
        setDestination({
          location: location,
          description: description,
        })
      );
      navigation.navigate("RideOptionsCard");
    }
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View className="bg-gray-200 w-10/12" style={{ height: 0.75 }} />
      )}
      renderItem={({
        item: { title, location, description, destination, icon },
      }) => (
        <TouchableOpacity
          className="flex-row items-center p-5"
          onPress={() => handlePress(location, description)}
          disabled={!originList && description === origin.description}
          style={
            (!originList &&
              description === origin?.description && { opacity: 0.25 }) ||
            (originList &&
              description === origin?.description &&
              styles.boxBorder)
          }
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{title}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({
  boxBorder: {
    borderWidth: 1,
    borderColor: "#CCCCCD",
    borderRadius: 25,
  },
});
