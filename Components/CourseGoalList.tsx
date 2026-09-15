import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GoalProps } from './CourseGoal';
type CourseGoalListProps = {
    goals: GoalProps[];
    onDeleteGoal?: (id: number) => void;
};
const CourseGoalList = (props: CourseGoalListProps) => {
    return (
        <View style={styles.container}>
            {props.goals.map((goal) => (
                <View key={goal.id} style={styles.innerContainer}>
                    <Text style={styles.text}>
                        {goal.title}
                    </Text>
                    <Button title="Delete" onPress={() => props.onDeleteGoal?.(goal.id)} />
                </View>

            ))}
        </View>
    );
}

export default CourseGoalList;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        margin: 10,
        fontSize: 16,

    }
});