import { Text, SafeAreaView } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

const CostumerScreen = () => {
    const tw = useTailwind();

    return (
        <SafeAreaView>
            <Text style={tw("text-red-500")}>CostumerScreen</Text>
        </SafeAreaView>
    );
};

export default CostumerScreen;
