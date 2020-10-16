import React, { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { AccordionList, Header } from "../../components";
import { Actions, Overview } from "../../containers";
import { colors } from "../../theme";
import styles from "./homeStyle";

export const Home = () => {
    const dispatch = useDispatch();

    const [isNextOverviewSelected, setIsNextOverviewSelected] = useState(false)


    const renderActions = () => {
        return <Actions />
    }

    const selections = [
        {
            id: 1,
            title: 'Overview',
            content: <Overview onNext={() => { setActiveSelection([1]); setIsNextOverviewSelected(true); }} />,
            data: [],

        },
        {
            id: 2,
            title: 'Actions',
            content: renderActions(),
            data: [
                { id: 1, title: "20 situps", days: "Mo, Wed" },
                { id: 1, title: "10 situps", days: "Mo, Wed" },
            ]
        },
        {
            id: 3,
            title: 'Stakes',
            content: <Text>Lorem ipsum dolor sit amet</Text>,
            data: [],

        },
        {
            id: 4,
            title: 'Accountability Partner',
            content: <Text>Lorem ipsum dolor sit amet</Text>,
            data: [],

        },
        {
            id: 5,
            title: 'Social Sharing',
            content: <Text>Lorem ipsum dolor sit amet</Text>,
            data: [],

        },
    ];


    dispatch({ type: "DATA", data: selections })
    const [activeSelection, setActiveSelection] = useState([]);

    const updateSelection = (activeSections) => {
        if (activeSections.find((e) => e === 1)) {
            isNextOverviewSelected && setActiveSelection(activeSections);
        } else if (activeSections.find((e) => e === 0) === 0) {
            setActiveSelection(activeSections);
        }

    }

    const renderHeader = (content, index, isActive, sections) => {
        return (
            <View
                style={[styles.headerContainer, { marginBottom: isActive ? 0 : 30, borderBottomLeftRadius: isActive ? 0 : 15, borderBottomRightRadius: isActive ? 0 : 15, }]}
            >
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: colors.lightGrey, fontSize: 20, marginRight: 10 }} >{content.id}</Text>
                    <Text style={{ color: colors.lightGrey, fontSize: 20 }} >{content.title}</Text>
                </View>
                {isActive ? <Image style={{ height: 30, resizeMode: "contain" }} source={require("../../../assets/info.png")} /> : <Image style={{ height: 10, resizeMode: "contain" }} source={require("../../../assets/down3x.png")} />}
            </View>
        );
    };

    const renderContent = (content, index, isActive, sections) => {
        return (
            <View
                style={{
                    padding: 20,
                    width: "100%",
                    backgroundColor: "#f9f7fe",
                    marginBottom: isActive ? 30 : 0,
                    borderTopRightRadius: isActive ? 0 : 15,
                    borderTopLeftRadius: isActive ? 0 : 15,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                {content.content}
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={{ alignItems: "center", marginTop: 30 }}>
                <Text style={{ fontSize: 40 }}>New Contract</Text>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 20, flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <AccordionList
                        sections={selections}
                        activeSections={activeSelection}
                        renderHeader={renderHeader}
                        renderContent={renderContent}
                        onChange={updateSelection}
                    />
                </ScrollView>
            </View>
        </View>
    )
}