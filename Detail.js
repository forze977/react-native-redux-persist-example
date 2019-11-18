import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';

updateText = (text) => {
    return {
        type: 'UPDATE',
        payload: text
    }
}


class DataComponent extends React.PureComponent {
    onUpdateText = text => {
        this.props.dispatch(updateText(text))
    }
    render() {
        return (
            <View style={{ padding: 24 }}>
                <TextInput style={{ borderColor: 'black', borderWidth: 1 }} onChangeText={this.onUpdateText} />
                <Text>{JSON.stringify(this.props.data)}</Text>
                <Text>{JSON.stringify(this.props.persistData)}</Text>
            </View>
        )
    }
}

const mapStateTpProps = state => ({
    data: state.data,
    persistData: state.persistData
});

export default connect(mapStateTpProps)(DataComponent);