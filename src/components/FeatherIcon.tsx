import React from "react"
import { MaterialCommunityIcons} from "@expo/vector-icons"

interface FeatherIconProps {
    name: string
    focused?: boolean
}

const FeatherIcon: React.SFC<FeatherIconProps> = ({ name, focused }) => {
    return (
        <MaterialCommunityIcons
            name={name}
            size={26}
            color={focused ? '#ffa600' : '#e0e0e0'}
        />
    )
}

export default FeatherIcon
