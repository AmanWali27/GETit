import React, {Component} from 'react';
import {Image, View, ScrollView} from 'react-native';
import {Button, Card, CardSection, Input} from "./common";

class LoginPage extends Component {
    static navigationOptions = {
        title: 'GETit',
        headerBackTitle: 'Login'
    };


    state = {email: '', password: ''};


    render() {

        return (
            <ScrollView>
                <View style={styles.containerStyle}>
                    {/*<Header headerText={"GETit"} />*/}
                    <Card>
                        <CardSection>
                            <Image
                                style={styles.logoStyle}
                                source={require('../img/logo.png')}
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
                            <Button propPress={() => {
                                this.props.navigation.navigate('tabscreen')
                            }}>
                                Log in
                            </Button>
                        </CardSection>


                        <CardSection>
                            <Button propPress={() => {
                                this.props.navigation.navigate('signup')
                            }}>
                                Create an account
                            </Button>
                        </CardSection>

                        <CardSection>
                            <Button>
                                Forgot your password
                            </Button>
                        </CardSection>
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    containerStyle: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: 'white'
    },
    logoStyle: {
        height: 160,
        width: 150,
        alignItems: 'center',
        flex: 1
    },
    orStyle: {
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 10
    }
}

export default LoginPage;