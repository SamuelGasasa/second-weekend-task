let students=[
    {
    startedAt: new Date("2021-01-20:13:30"),
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

for(let student of students){
    let totalTime= student.finishedAt.getHours()-student.startedAt.getHours() ;
    let tasksFinishedPrecent=Math.floor(student.);
    student.totalTime=totalTime;
    // console.log(totalTime);
}