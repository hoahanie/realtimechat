import React from "react";
import { Row, Col ,Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';

const {Title} = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();
// const fbProvider =  firebase.auth.FacebookAuthProvider();

export default function Login() {
  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider).catch((err) => {
      console.log(err);
    })
  }

  auth.onAuthStateChanged((user) => {
    console.log({ user });
  })

  return (
    <div>
      <Row justify='center' style={{height:800}}>
        <Col span={8}>
          <Title style={{textAlign:'center'}} level={3}>Login</Title>
          <Button style={{width:'100%', marginBottom: 5}}>Dang nhap bang Google</Button>
          <Button style={{width:'100%'}} onClick={handleFbLogin}>Dang nhap bang Facebook</Button>

        </Col>
      </Row>
    </div>
  );
}
