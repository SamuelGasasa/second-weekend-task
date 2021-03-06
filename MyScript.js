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
document.write('<table>');
    document.write('<tr>');
    let propName=Object.getOwnPropertyNames(students[0]);
    for(let i=0;i<propName.length;i++){
        document.write('<th>' + propName[i] + '</th>' );
    }
    for(let student of students){
        document.write('<tr>');
        for(let i=0;i<propName.length;i++){
            if(propName[i]==='totalTime'){
                if(student[propName[i]]>7){
                    document.write('<td class=longTime> '+student[propName[i]] + '</td>');
                    continue;
                }
                else{
                    if(student[propName[i]]>4){
                        document.write('<td class=midTime> '+student[propName[i]] + '</td>');
                        continue;
                    }
                    else{
                        document.write('<td class=littleTime> '+student[propName[i]] + '</td>');
                        continue;
                    }
                }
            }
            if(propName[i] ==='tasksFinishedPercents'){
                if(student[propName[i]]>=80){
                    document.write('<td class=highPercent> '+student[propName[i]] + '% </td>');
                    continue;
                }
                else{
                    if(student[propName[i]]>55){
                        document.write('<td class=midPercent> '+student[propName[i]] + '% </td>');
                        continue;
                    }
                    else{
                        document.write('<td class=lowPercent> '+student[propName[i]] + '% </td>');
                        continue;
                    }
                }
            }
            document.write('<td> '+student[propName[i]] + '</td>');
        }
        document.write('</tr>');
    }

document.write('</table>');
