import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface'

interface Props {
    actor: Cast
}

const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
    return (
        <View style={styles.viewContainer}>
            {actor.profile_path?
            <Image source={{ uri }} style={styles.Image} />:
            <Icon size={40} name="person" color="grey"/>
            
        }
            <View style={styles.viewTextActors}>
                <Text style={styles.textActors}>
                    {actor.name}
                </Text>
                <Text style={{}}>
                     {actor.character}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewContainer: {
        marginHorizontal:10,
        flexDirection:'row',
     backgroundColor:'white',
        width:250,
        padding:4,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.91,
        shadowRadius: 3.11,
        borderRadius:3,
        elevation: 4,

    },
    Image: {
        height: 40,
        width:40,
        borderRadius:10,
       marginHorizontal:4,
    },
    viewTextActors: {
       paddingHorizontal:3,
       alignSelf:'center'
    },
    textActors: {
        fontWeight: '700',
        paddingHorizontal: 1
    }
})
export default CastItem
