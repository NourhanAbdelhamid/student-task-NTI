const yargs = require('yargs');
const studentt=require('./student');

yargs.command({
    command:'add',
    describe:'to add new student with spicail ID',
    builder:{
        id:{
            describe:'student id',
            demandOption:true,
            type:'number',
        },
        Sname:{
            describe:'student name',
            demandOption:true,
            type:'string',
        },
        grades:{
            describe:'student grades',
            demandOption:true,
            type:'array',
        },
        comment:{
            describe:'comment ',
            type:'string',
        },
        total:{
            describe: 'total number of students grades',
            type: 'number'
        }
    },
    handler:(x)=>{
        console.log(x);
        studentt.addSutdent(x.id,x.Sname,x.grades,x.comment,x.total);

    }
});

yargs.command({
    command:'delete',
    describe:'delete student by ID',
    builder:{
        id:{
            describe:'student id to delete',
            demandOption:true,
            type:'number',
        }
    },
    handler:(x)=>{
        studentt.deleteStudent(x.id);
    }
});

yargs.command({
    command:'read',
    describe:'read student data',
    builder:{
        id:{
            describe:'student id which you want to read',
            demandOption:true,
            type:'number',
        }
    },
    handler:(x)=>{
        studentt.readStudent(x.id);
    }
});
yargs.command({
    command:'list',
    describe:'list all students in student.json file ',
    handler:()=>{
        studentt.listStudents();
    }
})
yargs.parse();