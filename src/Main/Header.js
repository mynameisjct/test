import React from 'react';
import { Text } from 'react-native';

const Header = (props) => {
    const { headerStyles } = styles;

    return (
        <Text style={headerStyles}>
            {props.headerText}
        </Text>
    )
}

const styles = {
    headerStyles : {
        fontSize: 40
    }
}

export default Header;