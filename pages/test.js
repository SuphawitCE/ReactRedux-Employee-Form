import React, { useState, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import Form from 'react-bootstrap/Form'
import {addInfo} from '../redux/actions/registerAction';
import {connect} from 'react-redux';
import Table from 'react-bootstrap/Table'
import { userSelector } from '../selectors';
import { createStructuredSelector } from 'reselect';
import store from '../redux/reducers/counterReducer';

let info = [];
let id = 1;


const Test = (props) => {
    const { userRender } = props;
    const { register /*, setValue */, getValues, watch, handleSubmit } = useForm();

    // const xxxx = localStorage.getItem('infoKey');
    let temp = [];
    useEffect( () => {
      const xxxx = localStorage.getItem('infoKey');
      temp = xxxx;
      console.log('xxxx',xxxx)
    },[] )

    //console.log('store: ',store)

    
    const onSubmit = handleSubmit( data => { // High order function (HOF) Chain function
      const { addInfo } = props;

      //addState(data);
      info.push(data)
      
      localStorage.setItem('infoKey', JSON.stringify(info));
      //console.log('getValue: ', v);

      //setValue(info);

      console.log('local', localStorage);

      //console.log('x: ', info);
      addInfo(data);
    }  );

    const { user } = props

    //console.log('test.js-user: ', user)
    // เพิ่ม input form ซ้ำ ไม่ต้องแก้อะไรที่เกี่ยวกับ redux 

    const test = !!userRender.length  ? userRender : temp;
    console.log('temp: ', temp);
    console.log('test',test)
    console.log('userRender', userRender, !!userRender.length)
    return (
      <div className="main-form">
        <label ></label>
        <div className="user-form">
          <form id="info-form" >
            <label >Title: </label>
            <select id="title" name="title">
              <option id="title" name="title" ref={register}>Mr.</option>
              <option id="title" name="title" ref={register}>Mrs.</option>
              <option id="title" name="title" ref={register}>Ms.</option>
            </select>
            <label style={{marginRight: "10px"}} >First Name:</label>
            <input id="firstname" name="firstName" ref={register} />
            <label style={{marginRight: "10px"}} > Last Name:</label>

            <input name="lastName" ref={register} />
            <br />

            <label >Birthday:</label>
            <input type='date' id='birthday' name='birthday' ref={register} />

            <label > Nationality: </label>
            <select style={{marginLeft: '5px', marginRight: '65px'}} name="nationality" ref={register} >
              <option ref={register} value="TH" >TH</option>
              <option ref={register} value="US" >US</option> 
              <option ref={register} value="UK" >UK</option>
            </select>

            <br />
            <div id="gender" >
              <label style={{marginRight: '20px'}} >Gender Selection: </label>
              <input ref={register} type="radio" name="gender" value="Male" />
              <label style={{marginRight: "20px", marginLeft: '8px'}} >Male</label>
              <input ref={register} type="radio" name="gender" value="Female" />
              <label style={{marginRight: "20px", marginLeft: '8px'}} >Female</label>
              <input ref={register} type="radio" name="gender" value="Unisex" />
              <label style={{marginRight: "20px", marginLeft: '8px'}}  >Unisex</label>
            
            </div>


            <label > Citizen ID: </label>
            <input style={{width: '3%', marginRight: '5px'}} id="citizenid" name="citizenId" ref={register} />
            <label > - </label>
            <input style={{width: '9%', marginRight: '5px'}} id="citizenid" name="citizenId" ref={register} />
            <label > - </label>
            <input style={{width: '6%', marginRight: '5px'}} id="citizenid" name="citizenId" ref={register} />
            <label > - </label>
            <input style={{width: '3%', marginRight: '5px'}} id="citizenid" name="citizenId" ref={register} />
        
            <br />
            <label style={{marginRight: "10px"}} >Mobile Code: </label>
            <select name="mobilecode" ref={register}>
              <option >+66</option>  
              <option >+11</option>
              <option >+99</option>
            </select> 
            <label style={{marginLeft: '10px'}} > - </label>
            <label style={{marginRight: "10px", marginLeft: '10px'}} >Phone </label>
            <input name="mobile" ref={register} />
            <label style={{marginLeft: '10px'}} > Passport No.</label>
            <input style={{marginLeft: '5px'}} name="passportNo" ref={register} />

            {/* 
            <label > Nationality </label>
            <select name="nationality" ref={register} >
              <option ref={register}>TH</option>
              <option ref={register}>US</option> 
              <option ref={register}>UK</option>
            </select>
            */ }

            <br />
            <label >Expected Salary: </label>
            <input style={{marginTop: '20px', marginLeft: '5px'}} name="expectedSalary" ref={register} />
            <label style={{marginLeft: '10px'}} >THB</label>
            <br/>
            {/*
            <button style={{marginLeft: "60%"}} 
            value={register} 
            onSubmit={handleSubmit} >
  
            Submit</button> */ }
            <button style={{marginLeft: "60%"}} 
            type="submit"
            value={register} 
            onSubmit={handleSubmit}
             /* onChange={onChange} */
            onClick={onSubmit}
            >Submit</button> 

          </form>
        </div>
        {/*
            <button style={{marginLeft: "60%"}} 
            value={register} 
            onSubmit={handleSubmit}
            onChange={ e => setInfo(e.target.value) }
            onClick={onSubmit} >Submit</button> 
            */}


        <div className="record-form">
          <input style={{marginRight: '5px'}} type='checkbox' name='selectAll' value='' />
          <label style={{marginRight: '15px', marginBottom: '30px'}} >Select All</label>
          <button >DELETE</button>
          
          <label style={{marginLeft: '55%'}} > PREV </label>
          <lable style={{marginLeft: '9%'}} > NEXT </lable>
         
            <Table bordered responsive size='md' >
              <thead  >
                <tr style={{padding: '95px'}} >
                  <th className="recSelect" > # </th> 
                  <th className="recName" >Firstname &nbsp; Lastname</th>
                  <th className="recGender" >Gender</th>
                  <th className="recMobile">Mobile Phone</th>
                  <th className="recNationality">Nationality</th>
                  <th className="recOperator">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
              { !!test.length && test.map((user, index) => {
                return(
                  <tr key={index}>

                    <td>{ index + 1 }</td>
                    <td> { user.firstName } &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { user.lastName } </td>
                    <td> { user.gender } </td>
                    <td> { user.mobile } </td>
                    <td> { user.nationality } </td>
                    <td>xxx</td>
                  </tr>
              )
              }) }
              </tbody>
              </Table>
    
         
        </div>
      </div>
    );
}

// useSelector for hook
const mapStateToProps = (state, props) => createStructuredSelector({
  // ใช้ตอนที่จะ render ผลการบันทึก ทำให้ state เป็น props 
  userRender : userSelector.infoFirstname
})(state, props);

// useDispatch for hook
const mapDispatchToProps = {
  // ใช้ตอนทำให้ dispatch เป็น props เพื่อใช้ประมวลผลต่อ ทำให้ dispatch เป็น props
  addInfo: addInfo, // เพิ่ม 
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);