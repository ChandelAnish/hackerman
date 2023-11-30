let a=document.getElementById("input");
let b=document.getElementById("btn");
let c=document.getElementById("code");
let d=document.getElementById("percentage");
let e=document.getElementsByClassName("insta")[0];
let f=document.getElementById("sendmessage");
function fun1()
{
    c.innerHTML=c.innerHTML+a.value;
}
function enterkeypress(event)
{
    if(event.key==="Enter")
    {
        c.innerHTML="phone number : "+a.value+"<br>";
        displayMessage();
    }
}
async function delay(sec)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true);
        },sec*10);
    });
}
async function percentage(sec)
{
    for(let i=0;i<=100;i++)
    {
        d.innerHTML=i+"%";
        await delay(sec);
    }
}
let message=["fetching phone details...",
"linking to server...",
"fetching account details...",
"phone no. matched with instagram...",
"phone no. matched with facebook...",
"phone no. matched with whatsApp...",
"searching for instagram id...",
"match found",
"connecting to server 1011945.12.11",
"user id - aditripathi1357",
"secured account...",
"connecting to server 1019995.92.10",
"initiating password generation...",
"589M password tried...",
"missmatch",
"789M password tried...",
"missmatch",
"match found",
"accessing account...",
"friend list :"
]
let sendmessage=[
    "generating message...",
    'message : "FUCK YOU"',
    "selecting all friends...",
    "sending message to all friends...",
    "message sent successfull"
]
async function displayMessage()
{
    if(a.value=="9065015741")
    {
        for(let i=0;i<message.length;i++)
        {
            if(i==13||i==15||i==19)
                await percentage(6);
            else
                await percentage(2);
            c.innerHTML=c.innerHTML+message[i]+"<br>";
        }
        e.style.display="block";
        f.scrollIntoView();
        sendMessage();
    }
    else
    {
        await percentage(5)
        c.innerHTML=c.innerHTML+"unable to access"+"<br>";
    }
}
async function sendMessage()
{
    for(let i=0;i<sendmessage.length;i++)
    {
        await  percentage(2);
        f.innerHTML=f.innerHTML+sendmessage[i]+"<br>";
    }
}