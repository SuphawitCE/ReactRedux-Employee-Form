import React, { useState, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import Form from 'react-bootstrap/Form'
import {addInfo, editInfo, updateInfo, delInfo, getInfo} from '../redux/actions/registerAction';
import {connect} from 'react-redux';
import Table from 'react-bootstrap/Table'
import { userSelector } from '../selectors';
import { createStructuredSelector } from 'reselect';
import store from '../redux/reducers/counterReducer';
import pagination from './components/pagination';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import ModalEdit from './modalEdit';

let info = [];

// pagination + handle error + validate form

const MainForm = (props) => {

  const [show, setShow] = useState(false);
  const [userId, setUser] = useState({})
  const [editMode, setEditMode] = useState(false);

  const handleClose = () => setShow(false);
  const handleShowEditModal = (id) => {
    console.log('handleShowEditModal',id)
    console.log('userRender',userRender)
    setEditMode(true)
    setUser(id)
  }


    const { userRender } = props;
    //const { register, handleSubmit } = useForm();
    const { register, handleSubmit, errors, setValue, reset } = useForm();

    const [edit, setEdit] = useState(false);

    const [record, setRecord] = useState();
    const [page, setPage] = useState([]);
    //console.log('store: ',store)

    // =============================================

    // =============================================
    

    const onSubmit = handleSubmit( data => { // High order function (HOF) Chain function
      const { addInfo, editInfo } = props;
    
      info.push(data)
      //localStorage.setItem('info', JSON.stringify(info));
      //console.log('local', localStorage);
      

      alert("Submitted");
      //console.log('data: ', data);
      console.log('editMode', editMode);
      if(editMode) {
        console.log("editMode: ", data);
        console.log("id: ",userId );
        const editData = [{id:userId, ...data}]
        console.log('editData',editData)
        editInfo(editData);
        //updateInfo(data); // incorrect
      } else {
        addInfo(data);
      }
      reset();  // Reset Form after submit
      //addInfo(data); // ตัวนี้ส่ง State ไปเก็บใน store
    }  );
    //console.log('userRender: ', userRender);

    const handleDelete = (id) => {
        //console.log('id: ', id);
        const { delInfo } = props;

        //console.log('delete: ', delInfo);
        delInfo(id);
    } 

    //const { user } = props  // ไม่มีก็ไม่น่าจะเป็นไร
    //console.log('test.js-user: ', user)
    
    return (
     
      <div className="main-form">              

        <label ></label>
        <div className="user-form">
          <form id="info-form" >
            <label >Title: </label>
            <select id="title" name="title" ref={register}>
              <option id="title" name="title" >Mr.</option>
              <option id="title" name="title" >Mrs.</option>
              <option id="title" name="title" >Ms.</option>
            </select>
            {/* value={editMode ? user.firstName : ''}  */}
            { errors.firstName && (<label style={{color: 'red'}} > { errors.firstName.message } </label>) }
            <label style={{marginRight: "10px"}} >&nbsp; First Name:</label>
            <input type='text' name="firstName" 
            ref={register}
            /> 
            
            { errors.lastName && (<label style={{color: 'red'}} > { errors.lastName.message } </label>) }
            <label style={{marginRight: "10px"}} >&nbsp; Last Name:</label>
            <input type='text' name="lastName" 
            ref={register({
              required: { value : true, message : '*'},
              pattern : { value : /^[a-z]+[A-Z]+$/i, message : 'String only' }
            }) }  />
            <br />

            <label >Birthday:</label>
            <input type='date' id='birthday' name='birthday' ref={register} />

            {
              errors.nationality && (<label style={{color: 'red'}} > { errors.nationality.message } </label>) 
            }

            <label > Nationality: </label>
            <select style={{marginLeft: '5px', marginRight: '65px'}} name="nationality"
             ref={register({
              required : { value : true, message : '*'}
             }) } >
              

              <option ref={register} name="nationality" id="nationalityTH" >TH</option>
              <option ref={register} name="nationality" id="nationalityUS" >US</option> 
              <option ref={register} name="nationality" id="nationalityUK" >UK</option>
            </select>

            <br />

            <div id="gender" >

              <label style={{marginRight: '20px'}} >Gender Selection: </label>
              { /*
                errors.genderMale && (<label style={{color: 'red'}} > { errors.genderMale.message } </label>)
              */}
              <input type="radio" name="gender" value="Male" 
              ref={register} />

              <label style={{marginRight: "20px", marginLeft: '8px'}} >Male</label>
              <input type="radio" name="gender" value="Female" 
              ref={register} />

              <label style={{marginRight: "20px", marginLeft: '8px'}} >Female</label>

              <input ref={register} type="radio" name="gender" value="Unisex" />
              <label style={{marginRight: "20px", marginLeft: '8px'}}  >Unisex</label>
            
            </div>

            <label > Citizen ID: </label>
            <input style={{width: '15%', marginRight: '5px'}} id="citizenid" name="citizenId" ref={register({
              required : { value : true, message : '*'},
              pattern : { value : /^[0-9._%+-]+[0-9.-]+$/i , message : '13 digit Number only'},
            }) } 
            />

            {/* 
            <label > - </label>
            <input style={{width: '9%', marginRight: '5px'}} id="citizenid" name="citizenId" ref={register} />
            <label > - </label>
            <input style={{width: '6%', marginRight: '5px'}} id="citizenid" name="citizenId" ref={register} />
            <label > - </label>
            <input style={{width: '3%', marginRight: '5px'}} id="citizenid" name="citizenId" ref={register} /> */}
        
            <br />
            <label style={{marginRight: "10px"}} >Mobile Code: </label>
            <select name="mobileCode" ref={register}>
              <option >+66</option>  
              <option >+11</option>
              <option >+99</option>
            </select> 
            <label style={{marginLeft: '10px'}} > - </label>

            {
              errors.mobile && (<label style={{color: 'red', marginLeft: '15px'}} > { errors.mobile.message } </label>)
            }

            <label style={{marginRight: "10px", marginLeft: '10px'}} >Phone </label>
            <input name="mobile" 
            ref={register({
              required : { value : true, message : '*'},
              pattern : { value : /^[0-9._%+-]+[0-9.-]+$/i , message : 'Number only'},
            }) } />

            <label style={{marginLeft: '10px'}} > Passport No.</label>
            <input style={{marginLeft: '5px'}} name="passportNo" 
            ref={register({
              required : { value : true, message : '*'},
              pattern : { value : /^[0-9._%+-]+[0-9.-]+$/i , message : 'Number only'},
            }) } />

            {/* 
            <label > Nationality </label>
            <select name="nationality" ref={register} >
              <option ref={register}>TH</option>
              <option ref={register}>US</option> 
              <option ref={register}>UK</option>
            </select>
            */ }

            <br />
            {
              errors.expectedSalary && (<label style={{color: 'red'}} > { errors.expectedSalary.message } </label>)
            }
            <label >Expected Salary: </label>
            <input style={{marginTop: '20px', marginLeft: '5px'}} name="expectedSalary"
            ref={register({
              required : { value : true, message : '*'},
              pattern : { value : /^[0-9._%+-]+[0-9.-]+$/i , message : 'Number only'},
            }) } />
            <label style={{marginLeft: '10px'}} >THB</label>
            <br/>
            {/*
            <button style={{marginLeft: "60%"}} 
            value={register} 
            onSubmit={handleSubmit} >
  
            Submit</button> */ }
            <Button style={{marginLeft: "60%"}} 
            variant="success"
            value={register} 
            
            
            onClick={onSubmit} >Submit</Button> 

          </form>
        </div>
        {/*
            <button style={{marginLeft: "60%"}} 
            value={register} 
            onSubmit={handleSubmit}
            onChange={ e => setInfo(e.target.value) }
            onClick={onSubmit} >Submit</button> 
            */
        }

        <div className="record-form">
          <input style={{marginRight: '5px'}} type='checkbox' name='selectAll' value='' />
          <label style={{marginRight: '15px', marginBottom: '30px'}} >Select All</label>
          <Button variant="danger" >DELETE</Button>
          
          {/* <label style={{marginLeft: '55%'}} > PREV </label> */}

          <Pagination size='sm' style={{marginLeft: '72%'}}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active >{1}</Pagination.Item>
            <Pagination.Item >{2}</Pagination.Item>
            <Pagination.Item >{3}</Pagination.Item>
            <Pagination.Item >{4}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>

          {/* <lable style={{marginLeft: '9%'}} > NEXT </lable> */ }
         
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
                {/* เอาค่าใน user มา render */}

              { !!userRender.length && userRender.map((user, index) => {
                  return(
                    <tr key={index}>
                      <td  > { index + 1 }</td>
                      <td > { user.firstName } &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { user.lastName } </td>
                      <td > { user.gender } </td>
                      <td > { user.mobile } </td>
                      <td > { user.nationality } </td>
                      {/* <td>xxx</td> */}
                      <td > 
                        <div style={{marginRight: ''}}>
                        <Button 
                          variant="info" 
                          style={{marginRight: '10px', width: '74px'}} 
                          onClick={() => {
                            handleShowEditModal(index)
                            setValue("firstName", user.firstName)
                            setValue("lastName", user.lastName)
                            setValue("birthday", user.birthday)
                            setValue("expectedSalary", user.expectedSalary)
                            setValue("gender" , user.gender)
                            setValue("mobile" , user.mobile)
                            setValue("mobileCode", user.mobileCode)
                            setValue("nationality", user.nationality)
                            setValue("passportNo", user.passportNo)
                            setValue("title", user.title)
                            setValue("citizenId", user.citizenId)
                          } }>
                          Edit
                        </Button>
                          <Button key={index} variant="danger" style={{marginRight: '0'}} onClick={() => handleDelete(index)} > DELETE</Button>
                        </div>
                      </td>
                    </tr>
                )
                }) 
              }

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
  //getInfo : getInfo,
  addInfo : addInfo, // เพิ่ม 
  delInfo : delInfo,
  editInfo : editInfo,  
  updateInfo : updateInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);