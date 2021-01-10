import React,{useEffect} from 'react';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import {auth} from '../_actions/user_action';

// null - 아무나 출입가능
// true -- > 로그인한 유저출입가능
//false = > 로그인한사람은 출입불가
export default function (SpecificComponent, option , adminRoute = null) {
    function AuthenticationCheck(props) {
            const dispatch = useDispatch();
            useEffect(()=> {
                dispatch(auth()).then(response => {
                  console.log(response)

                  //로그인하지않은상태 
                  if(!response.payload.isAuth) {
                    if(option){
                      props.history.push('/login')
                    }
                  }else {
                    //로그인한상태
                    //어드민만갈수잇는페이지에가는데 어드민이아닐경우
                    if(adminRoute && !response.payload.isAdmin) {
                      props.history.push('/')
                    }else {
                      //로그인한유저가 출입불가능한 페이지를 갈떄 ex)resgiser,login page
                      if(option == false)
                      props.history.push('/')
                    }
                  }
                })
               
        },[])
return(
    <SpecificComponent/>
)
}
return AuthenticationCheck
}