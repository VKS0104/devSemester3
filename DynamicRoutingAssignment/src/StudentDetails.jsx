import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const StudentDetails = () => {

  let {id} = useParams();
  let navigate = useNavigate();
  
  const StudentListArray = [
    {
      id:1,
      name:"Ved",
      marks:"98"
    },
    {
      id:2,
      name:"John",
      marks:"97"
    },
    {
      id:3,
      name:"Michale",
      marks:"90"
    },
    {
      id:4,
      name:"Sam",
      marks:"83"
    }
  ];
  const filteredStudent = StudentListArray.find((StudentList)=>{
    return StudentList.id==id;
  })

  
  function nav()
  {
    navigate('/StudentList')
  }
  
  if(!filteredStudent)
  {
    return (
      <>
      <div>Page Not found</div>
      <div onClick={nav}>Back to List</div>
      </>
    )
  }
  else
  {
    return(
      <div>
          <div>Student Name: {filteredStudent.name}</div>
          <div>Student Marks: {filteredStudent.marks}</div>
          <div onClick={nav}>Back to List</div>
      </div>
    )
  }
}

export default StudentDetails
