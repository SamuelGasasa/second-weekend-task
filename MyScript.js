let students=[
    {
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 18,
    tasksFinished: 7,
    topic: 'JavaScript'
},
{
    startedAt: new Date("2021-01-20:12:00"),
    finishedAt: new Date("2021-01-20:18:00"),
    tasksGiven: 21,
    tasksFinished: 17,
    topic: 'HTML'
},
{
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:22:00"),
    tasksGiven: 15,
    tasksFinished: 6,
    topic: 'Arrays'
},
{
    startedAt: new Date("2021-01-20:08:00"),
    finishedAt: new Date("2021-01-20:21:00"),
    tasksGiven: 12,
    tasksFinished: 7,
    topic: 'Loops'
},
{
    startedAt: new Date("2021-01-20:14:00"),
    finishedAt: new Date("2021-01-20:21:00"),
    tasksGiven: 13,
    tasksFinished: 2,
    topic: 'Github'
},
{
    startedAt: new Date("2021-01-20:10:00"),
    finishedAt: new Date("2021-01-20:15:00"),
    tasksGiven: 19,
    tasksFinished: 15,
    topic: 'Conditions'
},
{
    startedAt: new Date("2021-01-20:11:00"),
    finishedAt: new Date("2021-01-20:20:00"),
    tasksGiven: 15,
    tasksFinished: 14,
    topic: 'Objects'
},
{
    startedAt: new Date("2021-01-20:15:00"),
    finishedAt: new Date("2021-01-20:23:00"),
    tasksGiven: 12,
    tasksFinished: 10,
    topic: 'CSS'
},
{    startedAt: new Date("2021-01-20:16:00"),
finishedAt: new Date("2021-01-20:20:00"),
tasksGiven: 14,
tasksFinished: 7,
topic: 'MoreHTML'
},
{
    startedAt: new Date("2021-01-20:09:00"),
    finishedAt: new Date("2021-01-20:14:00"),
    tasksGiven: 25,
    tasksFinished: 5,
    topic: 'Functions'
}]
// set new properties and put values
for(let student of students){
    let totalTime= student.finishedAt.getHours()-student.startedAt.getHours() ;
    let tasksFinishedPercents=Math.floor((student.tasksFinished/student.tasksGiven)*100);
    student.totalTime=totalTime;
    student.tasksFinishedPercents=tasksFinishedPercents;
}
const body=document.body;
const table=document.createElement('table');
body.append(table);
const tr=document.createElement('tr');
table.append(tr);
// create the head of the table
let propName=Object.getOwnPropertyNames(students[0]);
for(let i=0;i<propName.length;i++){
    const th=document.createElement('th');
    th.innerText=propName[i];
    tr.append(th);
}
for(let student of students){
    const tr2=document.createElement('tr');
    // check if the property of the object and add the class according to the value 
    for(let i=0;i<propName.length;i++){
        const td=document.createElement('td');
        if(propName[i]==='totalTime'){
            if(student[propName[i]]>7){
                td.innerText=student[propName[i]];
                td.classList.add('longTime');
            }
            else{
                if(student[propName[i]]>4){
                    td.innerText=student[propName[i]];
                    td.classList.add('midTime');
                }
                else{
                    td.innerText=student[propName[i]];
                    td.classList.add('littleTime');
                }
            }
        }
        if(propName[i] ==='tasksFinishedPercents'){
            if(student[propName[i]]>=80){
                td.innerText=student[propName[i]];
                td.classList.add('highPercent');
            }
            else{
                if(student[propName[i]]>55){
                    td.innerText=student[propName[i]];
                    td.classList.add('midPercent');
                }
                else{
                    td.innerText=student[propName[i]];
                    td.classList.add('lowPercent');
                }
            }
        }
        
        td.innerText=student[propName[i]];
        tr2.append(td);
        table.append(tr2);
    }
}

