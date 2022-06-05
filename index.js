const express =require('express'); // starting serv
// install ejs
const path =require('path');
const bodyParser = require('body-parser');
const port =8000; // our express app is fired using this  command


const app =express();

  app.set('view engine','ejs');  
  // after installing ejs we told express what view  engine we have to use 
  app.set('views',path.join(__dirname,'views'));
  // Then we set path for accessing the view 
  app.use(bodyParser.urlencoded({extended: false}));
  // Here we have set the middle ware 
  app.use(express.static('assests'));
  //this tell express go back assess folder if you find 
  // any relative link e.g js, img, css  search and get the file 
//   // midelware1
//   app.use((req,res,next)=>{
//     //  console.log('Middleware 1 called');
    
//      next();
//   })
//   // midelware2
//   app.use((req,res,next)=>{
//     console.log('Middleware 2 called');
//     next();
//  })
  var contactList = [
      {
           name : "Jaykishn",
           phone: "8384087XXXX"
      },
      {
          name :"CodingNinjas",
          phone :"44444444444"
      }, {
        name :"Anil Verma",
        phone :"477744444444"
    }
   
     
  ]
  app.get('/',function(req,res){
    // home ejs file controller 
     return res.render('home',{
         title:"Contacts List",
         contacts_list :contactList
        
    });
 });

  app.get('/practice',(req,res)=>{
     return res.render('practice',{
         title: "Let us play with ejs"
     })
 })
 app.post('/create-contact',(req,res)=>{
    contactList.push(req.body);

    //  home.ejs<> ==> Route the data here
    // Now Data is in req
    // But we cannot see the data directley for 
  // that we have used middleware   
    // ({
    //     // name:req.body.name,
    //     // phone:req.body.phone
    // });
    return res.redirect('back');

 })
 

app.get('/delete-contact/:phone',function(req,res){
  console.log(req.params);
  let phone = req.params.phone;

})

app.listen(port,(err)=>{
    if(err){console.log('Error in running the server',err);}
    console.log("Working fine ",port);
})

