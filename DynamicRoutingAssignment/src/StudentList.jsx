import React from 'react'
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
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
  const Navigate = useNavigate()

  function nav(id)
  {
    Navigate(`/StudentDetails/${id}`)
  }

  return (
    <div>
      This is the List of Students:
      {
        StudentListArray.map((studentDetail)=>{
          return (
            <div key={studentDetail.id} onClick={()=> nav(studentDetail.id)}>{studentDetail.name}</div>
          )
        })
      }
    </div>
  )
}

export default StudentList
