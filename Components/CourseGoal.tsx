import { Button, Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { ReactNode, useState } from "react";
import CourseGoalList from "./CourseGoalList";


// interface CourseGoalProps {
//     title: string;
//     description: string;
// }

interface CourseGoalProps {
    title: string;
    children: ReactNode
}

export type GoalProps = {
    title: string;
    id: number;
}

const CourseGoal = ({ title, children }: CourseGoalProps) => {
    const [goals, setGoals] = useState<GoalProps[]>([]);
    const [counter, setCounter] = useState<number>(0);

    const addGoalHandler = () => {
        setCounter(counter + 1)
        const newGoal: GoalProps = {
            title: 'React Native Title ' + counter,
            id: Math.random()
        }
        setGoals((currentGoals) => [...currentGoals, newGoal]);
    }
    const deleteGoalHandler = (id: number) => {
        setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
    }
    return (

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View >
                <Text>{title}</Text>
                {children}

                <Pressable onPress={
                    addGoalHandler
                } style={styles.button}>
                    <Text style={styles.text}>Pressable</Text>
                </Pressable>

                <CourseGoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
            </View>
        </ScrollView>
    );
}
export default CourseGoal;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 100,
        marginBottom: 50,
    },
    button: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        color: 'black',
    },
});