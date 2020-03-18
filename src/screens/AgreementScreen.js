import React,{Component} from 'react'
import {View, Text, StyleSheet, CheckBox, BackHandler} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default class AgreementScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CheckBox: {'first': false, 'second': false},
        }
    }
    check = (id) => {
        const check = this.state.CheckBox;
        if(id == 'first')
            this.setState({CheckBox: {'first': !check['first'], 'second': check['second']}}, function() {
                this.props.navigation.state.params.goBackData({data: this.state.CheckBox})
            })

        if(id == 'second')
            this.setState({CheckBox: {'first': check['first'], 'second': !check['second']}}, function() {
                this.props.navigation.state.params.goBackData({data: this.state.CheckBox})
            })
    }
    
    
    render() {
        return(
            <View style={{backgroundColor:'#fff', height:'100%'}}>
                <ScrollView contentContainerStyle={{height: '100%'}}>
                <Text style={styles.text}>서울패스 이용약관 동의 (필수)</Text>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={{color: '#000'}}> 제1조 [목적]{"\n"}
                        이 약관은 언제어디서나(이하 “회사”라 한다)가 제공하는 서울하이패스(이하 “서비스”라 한다)의 이용조건 및 절차에 관한 사항 및 기타 필요한 사항을 규정함을 목적으로 한다.{"\n"}
                        {"\n"} 제2조 [약관의 효력과 변경]{"\n"}
                        약관은 이용자에 공시함으로 효력을 발생한다.{"\n"}
                        회사는 사정변경의 경우와 영업상 중요사유가 있을 때 약관을 변경할 수 있으며 변경된 약관은 공시함으로 효력을 발생한다.{"\n"}
                        {"\n"} 제3조 [약관의 공시 및 준용]{"\n"}
                        약관이 변경될 경우 회사는 이를 서비스 내에 공시합니다.{"\n"}
                        {"\n"} 제4조 [서비스 안내]{"\n"}
                        회사가 제공하는 서비스가 설치된 곳에서 자동으로 승하차를 파악하여 이용요금을 차감하는 서비스를 제공한다.{"\n"}
                        {"\n"} 제5조 [이용요금]{"\n"}
                        사용자는 카카오페이 등을 이용하여 해당앱의 충전된 금액에서 자동차감하는 방식의 결제가 이루어 지게 됨다.{"\n"}
                        {"\n"} 제6조 [개인정보의 활용]{"\n"}
                        수집된 개인정보는 개인정보 활용 동의에 따라 처리한다.</Text>
                    </ScrollView>
                </View>
             {/*   <View style={{flexDirection: 'row', height: 40, alignItems: 'center', justifyContent: 'flex-end', width: '90%'}}>
                    <CheckBox  value={this.state.CheckBox['first']} onValueChange={()=>this.check('first')} />
                    <Text>동의합니다.</Text>
                </View>  
        */}
                <Text style={styles.text}>개인정보 수집이용 동의 (필수)</Text>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={{color: '#000'}}> 『개인정보보호법』 등 관련 법규에 의거하여 언제어디서나는 고객님의 개인정보 수집 및 활용에 대해 개인정보 수집, 활용 동의서를 받고 있습니다.{"\n"}{"\n"}
                                개인정보 제공자가 동의한 내용 외의 다른 목적으로 활용되지 않으며, 제공된 개인정보의 이용을 거부하고자 할 때에는 개인정보 관리책임자를 통해 열람, 정정, 삭제를 요구할 수 있습니다.{"\n"}

                                {"\n"} 제공된 개인정보는 아래의 항목에 제한된 범위에서만 활용됩니다.{"\n"}

                                {"\n"} 수집되는 개인정보 항목 : 성명, 이메일, 전화번호, 결제정보{"\n"}
                                {"\n"} 개인정보 이용 목적{"\n"}
                                - 결제되는 내역의 본인 확인 절차에 이용{"\n"}
                                - 신규 서비스 개발을 위한 고객 분석자료{"\n"}
                                - 제3자의 결제대금 청구에 의한 제공{"\n"}

                                {"\n"}『개인정보보호법』 등 관련 법규에 의거하여 개인정보 수집, 활용에 동의합니다.{"\n"}</Text>
                    </ScrollView>
                </View>
                {/*<View style={{flexDirection: 'row', height: 40, alignItems: 'center', justifyContent: 'flex-end', width: '90%'}}>
                    <CheckBox  value={this.state.CheckBox['second']} onValueChange={()=>this.check('second')} />
                    <Text>동의합니다.</Text>
    </View> */}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: '42%',
        width: '90%',
        backgroundColor: '#f5f5f5',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    text: {
        width: '90%',
        color: '#000',
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold'
    }
})