import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
// import {CardSection} from "./Components_Aman";
import {Button, Card, CardSection, Input} from "./Components_Aman";

class LoginPage extends Component {

    state = { email: '', password: ''};

    render() {
        return (
            <View style={styles.containerStyle}>
                <Card>
                    <CardSection>
                        <Image
                            style={styles.logoStyle}
                            source={require('./img/logo.png')}
                            resizeMode='contain'
                        />
                    </CardSection>


                    <CardSection>
                        <Input
                            label="Email ID:"
                            value={this.state.email}
                            onChangeText={email => this.setState({email})}
                            placeholder="john@purdue.edu"
                        />
                    </CardSection>


                    <CardSection>
                        <Input
                            label="Password:"
                            value={this.state.password}
                            onChangeText={password => this.setState({password})}
                            placeholder="******"
                            secureTextEntry={true}
                        />
                    </CardSection>


                    <CardSection>
                        <Button>
                            Log in
                        </Button>
                    </CardSection>


                    <CardSection>
                        <Text style={styles.orStyle}>
                            or
                        </Text>
                    </CardSection>


                    <CardSection>
                        <Button>
                            Create an account
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    containerStyle:{
        paddingTop:20,
        flex:1,
        backgroundColor:'white'
    },
    logoStyle:{
        height:160,
        width: 150,
        alignItems:'center',
        flex:1
    },
    orStyle:{
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 10
    }
}

export default LoginPage;