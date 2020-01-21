import React from 'react';
import '../../../App.css';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';
import "./Auth.css"


export default class Auth extends React.Component {
   constructor(props){
        super(props);

        //TODO зачем это нужно
        this.OnLoginClick= this.OnLoginClick.bind(this);




   }


    OnLoginClick(event){
        this.props.tryToLogin(document.getElementById("AuthLoginText").value,document.getElementById("AuthPassword").value);



    }




    render() {

       const {fail,success}=this.props;




        return (

            <div className="Auth">



                <h2>Войти</h2>
                <div className="form" id="form">

                <label htmlFor="AuthLoginText">Логин</label>
                <InputText  className="AuthInput" id="AuthLoginText"/>
                    <br/>

                <label htmlFor="AuthPassword">Пароль</label>
                <Password feedback={false}  className="AuthInput" promptLabel="Введите пароль" weakLabel="Слабый" strongLabel="Сильный" mediumLabel="Средний" id="AuthPassword"/>


                    <br/>
                <Button className="AuthInput" label="login"  onClick={this.OnLoginClick}/>
                </div>
                <p hidden={!fail} >Неверные данные</p>


            </div>
        );
    }
}

