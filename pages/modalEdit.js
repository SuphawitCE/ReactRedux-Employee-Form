import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { useForm, Controller } from "react-hook-form";
import {connect} from 'react-redux';
//import { handleEdit, editInfo , addInfo, delInfo, getInfo, updateInfo} from './mainForm';
import { Fragment } from 'react';

const ModalEdit = (props) => {
    const { show, handleClose, user } = props
    const { register, handleSubmit, errors } = useForm();
    console.log("FROM modalEdit.js", props);
    const [editMode, setEditMode] = useState(false);
    const toggleEditMode = () => {
        setEditMode(mode => !mode);
    }
    const onSubmit = handleSubmit( data => { // High order function (HOF) Chain function
        const { editInfo } = props;
        alert("Submitted");
        
      }  );
    return (
        <div>
            {/*<Modal show={show} onHide={handleClose} > */}
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title>Edit Information</Modal.Title>
                </Modal.Header>
                <Modal.Body id="example-modal-sizes-title-lg" >
                    <div className="user-form-modal">
                    <form id="info-form" >
                        <label > Title: &nbsp;</label>
                        <select id="title" name="title" ref={register} >
                        <option selected={user.title === "Mr." ? true : false} id="title" name="title" >Mr.</option>
                        <option selected={user.title === "Mrs." ? true : false} id="title" name="title" >Mrs.</option>
                        <option selected={user.title === "Ms." ? true : false} id="title" name="title" >Ms.</option>
                        </select>
                        { errors.firstName && (<label style={{color: 'red'}} > { errors.firstName.message } </label>) }
                        <label style={{marginRight: "10px"}} >&nbsp; First Name:</label>
                        <input  type='text' id="firstname" name="firstName" 
                        ref={register({
                        required: { value : true, message : '*'},
                        pattern : { value : /^[a-z]+[A-Z]+$/i, message : 'String only' }
                        }) } 
                        /> 
                        { errors.lastName && (<label style={{color: 'red'}} > { errors.lastName.message } </label>) }
                        <label style={{marginRight: "10px"}} >&nbsp; Last Name:</label>
                        <input value={user.lastName} type='text' name="lastName" 
                        ref={register({
                        required: { value : true, message : '*'},
                        pattern : { value : /^[a-z]+[A-Z]+$/i, message : 'String only' }
                        }) }  />
                        <br />
                        <label >Birthday: &nbsp;</label>
                        <input value={user.birthday} type='date' id='birthday' name='birthday' ref={register} />
                        {
                        errors.nationality && (<label style={{color: 'red'}} > { errors.nationality.message } </label>) 
                        }
                        <label > &nbsp; Nationality: &nbsp;</label>
                        <select style={{marginLeft: '5px', marginRight: '65px'}} name="nationality"
                        ref={register({
                        required : { value : true, message : '*'}
                        }) } >
                        <option selected={user.nationality === "TH" ? true : false} name="nationalityTH" id="nationalityTH" >TH</option>
                        <option selected={user.nationality === "US" ? true : false} name="nationalityUS" id="nationalityUS" >US</option> 
                        <option selected={user.nationality === "UK" ? true : false} name="nationalityUK" id="nationalityUK" >UK</option>
                        </select>
                        <br />
                        <div id="gender" >
                        <label style={{marginRight: '20px'}} >Gender Selection: </label>
                        { /*
                            errors.genderMale && (<label style={{color: 'red'}} > { errors.genderMale.message } </label>)
                        */}
                        <input checked={user.gender === 'Male' ? true : false } type="radio" name="gender" value="Male"
                        ref={register} />
                        <label  style={{marginRight: "20px", marginLeft: '8px'}} >Male</label>
                        <input checked={user.gender === 'Female' ? true : false } type="radio" name="gender" value="Female" 
                        ref={register} />
                        <label style={{marginRight: "20px", marginLeft: '8px'}} >Female</label>
                        <input  checked={user.gender === 'Unisex' ? true : false } ref={register} type="radio" name="gender" value="Unisex" />
                        <label style={{marginRight: "20px", marginLeft: '8px'}}  >Unisex</label>
                        </div>
                        <label > Citizen ID: &nbsp;</label>
                        <input style={{width: '3%', marginRight: '5px'}} id="citizenid" name="citizenId" ref={register} />
                        <label >-&nbsp;</label>
                        <input style={{width: '9%', marginRight: '5px'}} id="citizenid" name="citizenId" ref={register} />
                        <label >-&nbsp;</label>
                        <input style={{width: '6%', marginRight: '5px'}} id="citizenid" name="citizenId" ref={register} />
                        <label >-&nbsp;</label>
                        <input style={{width: '3%', marginRight: '5px'}} id="citizenid" name="citizenId" ref={register} />
                        <br />
                        <label style={{marginRight: "10px"}} >Mobile Code: </label>
                        <select name="mobilecode" ref={register}>
                        <option >+66</option>  
                        <option >+11</option>
                        <option >+99</option>
                        </select> 
                        <label style={{marginLeft: '10px'}} > - </label>
                        {
                        errors.mobile && (<label style={{color: 'red', marginLeft: '15px'}} > { errors.mobile.message } </label>)
                        }
                        <label style={{marginRight: "10px", marginLeft: '10px'}} >Phone </label>
                        <input value={user.mobile} name="mobile" 
                        ref={register({
                        required : { value : true, message : '*'},
                        pattern : { value : /^[0-9._%+-]+[0-9.-]+$/i , message : 'Number only'},
                        }) } />
                        <label style={{marginLeft: '10px'}} > Passport No.</label>
                        <input value={user.passportNo} style={{marginLeft: '5px'}} name="passportNo" 
                        ref={register({
                        required : { value : true, message : '*'},
                        pattern : { value : /^[0-9._%+-]+[0-9.-]+$/i , message : 'Number only'},
                        }) } />
                        <br />
                        {
                        errors.expectedSalary && (<label style={{color: 'red'}} > { errors.expectedSalary.message } </label>)
                        }
                        <label >Expected Salary: </label>
                        <input value={user.expectedSalary} style={{marginTop: '20px', marginLeft: '5px'}} name="expectedSalary"
                        ref={register({
                        required : { value : true, message : '*'},
                        pattern : { value : /^[0-9._%+-]+[0-9.-]+$/i , message : 'Number only'},
                        }) } />
                        <label style={{marginLeft: '10px'}} >THB</label>
                        <br/>
                    </form>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button style={{marginLeft: '40%'}} variant="primary" onClick={onSubmit}>
                    Save Changes (Update)
                </Button>
                </Modal.Footer>
            </Modal>
            {
                editMode && <>
                </>
            }
        </div>
    )
}
export default connect()(ModalEdit);