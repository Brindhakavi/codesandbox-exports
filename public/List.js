import React,{useEffect, useState} from "react";
import axios from "axios"
 const List = () =>{
  const[List, setList] = useState([]);
  useEffect = (() =>{
    axios
    .get("")
    .then((res)=>{
setList(res.data)
    })
    .catch((err)=>{
    console.log(err)
    })
 } ,[]);
const PutApi = () =>{
  const data = [{
    employeeName: "John Doe",
    empId: 1,
    empRole: "Software Developer",
    doj: "Jan 1,2023"
},{
    employeeName: "Tom Cruise",
    empId: 2,
    empRole: "Junior Software Developer",
    doj: "Jan 3,2023"
},{
    employeeName: "Fayaz Mohamad",
    empId: 3,
    empRole: "Senior Software Developer",
    doj: "Jan 5,2023"
},{
    employeeName: "Julie",
    empId: 4,
    empRole: "Devops Engineer",
    doj: "Jan 10,2023"
},{
    employeeName: "Jan Doe",
    empId: 5,
empRole: "Software Developer",
    doj: "Jan 15,2023"
},{
    employeeName: "T Watson",
    empId: 6,
    empRole: "Software Developer",
    doj: "Jan 18,2023"
},{
    employeeName: "John",
    empId: 7,
    empRole: "Software Developer",
    doj: "Jan 23,2023"
},{
    employeeName: "Jackhy",
    empId: 8,
    empRole: "IT Engineer",
    doj: "Feb 1,2023"
},{
    employeeName: "Lokesh",
    empId: 9,
    empRole: "Project Manager",
    doj: "Feb 4,2023"
},{
    employeeName: "Gowda",
    empId:10,
    empRole: "Lead Manager",
    doj: "Feb 10,2023"
}]
const [empId, setempId] = useState(data);
{
const editApi = (empId)=>{
  const editeData = empId.map((item,index) =>{
    if(item.empId === empId){
      item.empRole ="Tester"
     }
     return item;
})
setempId(editApi);
};
const delApi = (empId) => {
  const remainData = empId.filter((item)=>item.empId !== empId);
  setempId(remainData);
};
console.log(empId, "empId");
const CreateApi = () =>{
  let newArray = empId;
  newArray.push({
    empId: empId.length+1,
    empRole:"HR",
    employeeName: "Reshma",
    doj: "Jan 29, 2022"
  })
  setempId(newArray)
}
return(
  <>
  <button onClick ={()=>CreateApi()}>CREATE</button>
  <table>
  <thead>
  <tr>
  <th>empId</th>
  <th>employeeName</th>
  <th>empRole</th>
  <th>doj</th>
  </tr>
  </thead>
  <tbody>
    {empId.map((item,key)=>{
      return(
        <tr>
          <td>{item.empId}</td>
          <td>{item.employeeName}</td>
          <td>{item.doj}</td>
          <td>{item.empRole? "Software Developer": "Devops Engineer"}</td>
    <td>     
     <button onClick ={()=>editApi(item.empId)}>EDIT</button>
  <button onClick = {()=>delApi(item.empId)}>DELETE</button>
</td>
</tr>
      )
    })}
</tbody>
</table>
</>
  )
}
export default data;