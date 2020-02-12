import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Image from './Image'

interface ReviewItemProps {
    source: any,
    profile: any,
    review: string,
    name: string,
}

const ReviewItem: React.SFC<ReviewItemProps> = ({
    profile,
    review,
    source,
    name,
}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={profile}
                    width={50}
                    height={50}
                    borderRadius={100/2}
                    />
                <Text>{name}</Text>
            </View>    

            <View style={{width: '80%'}}>
                <View style={styles.review}>
                    <Text style={styles.text}>{review}</Text>
                </View>
                
                <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
                    <Image
                    source={source}
                    width={70}
                    height={50}
                    borderRadius={10}
                    />
                    <Image
                    source={source}
                    width={70}
                    height={50}
                    borderRadius={10}
                    />
                </View>
            </View>  
                
        </View>
    )
}
export default ReviewItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'center',
        width: '90%'
    },
    review: {
        width: '100%',
        height: 100,
        backgroundColor: '#d9d9d9',
        borderRadius: 30,
        padding: 20,
        marginLeft: 10
    },
    text: {
        
    }
})