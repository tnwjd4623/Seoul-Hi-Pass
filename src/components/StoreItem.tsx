import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Image from './Image'

interface ServiceItemProps {
    title: string,
    source: any,
    address: string,
}

const ServiceItem: React.SFC<ServiceItemProps> = ({
    source,
    title,
    address
}) => {
    return (
        <View style={styles.container}>
            <Image
                source={source}
                width={120}
                height={80}
                borderRadius={5}
                />
                <View style={{height: 80, marginLeft: 10}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.address}>{address}</Text>
                </View>
        </View>
    )
}
export default ServiceItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        width: '80%',
        alignSelf: 'center'
    },
    title: {
        fontWeight: 'bold',
        color: '#8a8a8a'
    },
    address: {
        color: '#8a8a8a'
    }
})
