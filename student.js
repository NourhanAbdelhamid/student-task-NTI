//add student data in student.json

const fs= require('fs');

const addSutdent=(id,Sname,grades,comment,total)=>{
    const allStudents=loadStudents();
    total=0;
    const dublicatedId=allStudents.filter((s)=>{
        return s.id===id
    });
    grades.forEach(element => {
        return total+=element;
    });
    if(dublicatedId.length===0){
        allStudents.push({
            id,
            Sname,
            grades,
            comment,
            total,
        });
        saveStudent(allStudents);
        console.log('success');
    }
    else{
        console.log('Error');
    }
}



//load all students data from student.json

const loadStudents=()=>{
    try{
        const studentsBuuffer= fs.readFileSync('student.json').toString();
        return JSON.parse(studentsBuuffer);
    }
    catch(e){
        return [];
    }
}

//save student data to student.json file

const saveStudent=(studentData)=>{
    const saveData=JSON.stringify(studentData);
    fs.writeFileSync('student.json',saveData);
}

//delete student by id
const deleteStudent=(id)=>{
    const allStudents=loadStudents();
    const keepStudent=  allStudents.filter((ele)=>{
        return ele.id !==id;
    });
    saveStudent(keepStudent);
    console.log('deleted');
}

//read student data 
const readStudent=(id)=>{
    const allStudents=loadStudents();
    const studentData=allStudents.find(ele=>ele.id===id);
    if(studentData){
    console.log(studentData);
    }
    else{
        console.log('not found')
    }
}

//list all students

const listStudents=()=>{
    const allStudents=loadStudents();
    const list=allStudents.forEach(element => {
        console.log(element)
        return element;
        
    });
}





module.exports={
    addSutdent,
    deleteStudent,
    readStudent,
    listStudents,
}