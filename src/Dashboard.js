import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard() {
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await auth().signOut();

            // Reset the navigation stack to 'Login' and remove the OTP-related screens
            navigation.reset({ 
                index: 0,
                routes: [{ name: "Login" }],
            });
        } catch (error) {
            console.log("Error during logout: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                Welcome to the Dashboard!
            </Text>

            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fcfcfc",
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 150,
    },
    logoutButton: {
        backgroundColor: "#841584",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: "center",
    },
    logoutButtonText: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
    },
});
