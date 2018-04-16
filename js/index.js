var index = angular.module("index", ['ui.router']);

index.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './content-partial.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: './about-partial.html'
        })
        .state('register',{
            url: '/register',
            templateUrl: './registration-partial.html'
        })
        .state('clientLogin',{
            url: '/clientLogin',
            templateUrl: './client-login-partial.html'
        })
        .state('adminLogin',{
            url: '/adminLogin',
            templateUrl: './admin-login-partial.html'
        })
        .state('specific-element', {
            url: '/specific-element',
            templateUrl: './specific-element-partial.html'
        })
        .state('admin-panel', {
            url: '/admin-panel',
            templateUrl: './admin-panel.html'
        })
        .state('admin-panel.addUser', {
            url: '/addUser',
            templateUrl: './add-user-partial.html'
        })
        .state('admin-panel.addProduct', {
            url: '/addProduct',
            templateUrl: './add-product-partial.html'
        });
});

index.controller('indexController', function($state, $timeout){
   app = this;
   
   app.userStatus = false;
   app.specificItem = {};
   
   app.products = [];
   app.users = [];
   
   app.admins = [
       {
           "name":"Mateja Matejic",
           "email":"mateja@webshop.en",
           "username":"matejam",
           "password":"11111",
           "role":"admin"
       },
       {
           "name":"Darko Petrovic",
           "email":"darko@webshop.en",
           "username":"darkop",
           "password":"22222",
           "role":"admin"
       }
   ];
   
   app.users = [
       {
           "name":"Pera Peric",
           "email":"pera@gmail.com",
           "username":"perap",
           "password":"1234",
           "role":"client"
       },
       {
           "name":"Zika Zikic",
           "email":"zika@gmail.com",
           "username":"zikaz",
           "password":"333",
           "role":"client"
       },
       {
           "name":"Nemanja Nemanjic",
           "email":"nemanja@gmail.com",
           "username":"nemanjan",
           "password":"444",
           "role":"client"
       }
   ];
   
   app.products = [
       {
           "title":"Samsung OLED 24inch",
           "img": "data/tv.png",
           "price": 25000,
           "category":"TV"
       },
       {
           "title":"Philips LED 40inch",
           "img": "data/tv.png",
           "price": 60000,
           "category":"TV"
       },
       {
           "title":"Philips OLED 32inch",
           "img": "data/tv.png",
           "price": 34000,
           "category":"TV"
       },
       {
           "title":"Vox FULL HD 42inch",
           "img": "data/tv.png",
           "price": 75000,
           "category":"TV"
       },
       {
           "title":"Fox FULL HD 44inch",
           "img": "data/tv.png",
           "price": 95000,
           "category":"TV"
       },
       {
           "title":"Grunding LED 32inch",
           "img": "data/tv.png",
           "price": 24000,
           "category":"TV"
       },
       {
           "title":"Samsung FULL HD 60inch",
           "img": "data/tv.png",
           "price": 150000,
           "category":"TV"
       },
       {
           "title":"VOX OLED 47inch",
           "img": "data/tv.png",
           "price": 120000,
           "category":"TV"
       },
       {
           "title":"Philips FULL HD 72inch",
           "img": "data/tv.png",
           "price": 200000,
           "category":"TV"
       },
       {
           "title":"Altos x4 Gamer",
           "img": "data/pc.png",
           "price": 40000,
           "category":"Computer"
       },
       {
           "title":"Hydra x12 Office",
           "img": "data/pc.png",
           "price": 60000,
           "category":"Computer"
       },
       {
           "title":"Predator x24 Gamer",
           "img": "data/pc.png",
           "price": 120000,
           "category":"Computer"
       },
       {
           "title":"Dell office",
           "img": "data/pc.png",
           "price": 24000,
           "category":"Computer"
       },
       {
           "title":"HP Pro Office",
           "img": "data/pc.png",
           "price": 55000,
           "category":"Computer"
       },
       {
           "title":"Hp OMEN",
           "img": "data/pc.png",
           "price": 190000,
           "category":"Computer"
       },
       {
           "title":"Altos Predator PRO Gamer",
           "img": "data/pc.png",
           "price": 90000,
           "category":"Computer"
       },
       {
           "title":"HP Gamer PLUS",
           "img": "data/pc.png",
           "price": 11000,
           "category":"Computer"
       },
       {
           "title":"Altos Office Basic",
           "img": "data/pc.png",
           "price": 17000,
           "category":"Computer"
       },
       {
           "title":"Sony Alpha 12.2px",
           "img": "data/camera.png",
           "price": 80000,
           "category":"Camera"
       },
       {
           "title":"Fujifilm Supreme 23px",
           "img": "data/camera.png",
           "price": 150000,
           "category":"Camera"
       },
       {
           "title":"Sony Pro 24.2px",
           "img": "data/camera.png",
           "price": 240000,
           "category":"Camera"
       },
       {
           "title":"Olympus Ultimate 32px",
           "img": "data/camera.png",
           "price": 320000,
           "category":"Camera"
       },
       {
           "title":"Sony 17.2px",
           "img": "data/camera.png",
           "price": 100000,
           "category":"Camera"
       },
       {
           "title":"Fujifilm Sparkless",
           "img": "data/camera.png",
           "price": 120000,
           "category":"Camera"
       },
       {
           "title":"Sony Basic 11px",
           "img": "data/camera.png",
           "price": 45000,
           "category":"Camera"
       },
       {
           "title":"Fujifilm Basic 14px",
           "img": "data/camera.png",
           "price": 40000,
           "category":"Camera"
       },
       {
           "title":"Olympus Basic 12px",
           "img": "data/camera.png",
           "price": 42500,
           "category":"Camera"
       },
       {
           "title":"Samsung s5",
           "img": "data/cellphone.png",
           "price": 35000,
           "category":"Cell phone"
       },
       {
           "title":"Samsung s6",
           "img": "data/cellphone.png",
           "price": 55000,
           "category":"Cell phone"
       },
       {
           "title":"Samsung s7",
           "img": "data/cellphone.png",
           "price": 65000,
           "category":"Cell phone"
       },
       {
           "title":"Samsung s8",
           "img": "data/cellphone.png",
           "price": 85000,
           "category":"Cell phone"
       },
       {
           "title":"Iphone 5",
           "img": "data/cellphone.png",
           "price": 30000,
           "category":"Cell phone"
       },
       {
           "title":"Iphone 6",
           "img": "data/cellphone.png",
           "price": 40000,
           "category":"Cell phone"
       },
       {
           "title":"Iphone 7",
           "img": "data/cellphone.png",
           "price": 70000,
           "category":"Cell phone"
       },
       {
           "title":"Iphone X",
           "img": "data/cellphone.png",
           "price": 170000,
           "category":"Cell phone"
       },
       {
           "title":"Vkworld S8",
           "img": "data/cellphone.png",
           "price": 25000,
           "category":"Cell phone"
       }
   ];
   
   app.copyOfProducts = [];
   
   app.copyOfProducts = Array.from(app.products);
   
   app.sort = function(value){
       app.products = [];
       
        for(var i = 0; i < app.copyOfProducts.length; i++){
            if(app.copyOfProducts[i].category === value){
                app.products.push(app.copyOfProducts[i]);
            }
        }
   };
   
   app.allSort = function(){
       app.products = [];
       
        for(var i = 0; i < app.copyOfProducts.length; i++){
                app.products.push(app.copyOfProducts[i]);
        }
   };
   
   app.register = function(name, email, username, password){
       app.user = {};
       
       app.user = {
           "name":name,
           "email":email,
           "username":username,
           "password":password,
           "role":"client"
       };
       app.users.push(app.user);
   };
   
   
   app.clientLogin = function(username, password){
       for(var i = 0; i < app.users.length; i++){
           if(username === app.users[i].username && password === app.users[i].password){
              app.userStatus = true;
           }
       }
   };
   
   app.adminLogin = function(username, password){
       for(var i = 0; i < app.admins.length; i++){
           if(username === app.admins[i].username && password === app.admins[i].password){
              app.userStatus = true;
           }
       }
   };
   
   app.change = function(){
       app.userStatus = false;
   };
   
   app.specificElement = function(index){
       app.specificItem = app.products[index];
   };
   
   app.addProduct = function(title, img, price, category){
       app.product = {};
       app.product = {
           "title":title,
           "img": img,
           "price": price,
           "category": category
       };
       
       app.products.push(app.product);
   };
   
   app.sortPriceLowHigh = function(){
     app.tmp = {};  
     
     for(var i = 0; i < app.products.length - 1; i++){
            for(var j = 0; j < app.products.length - 1 - i;j++){
                if(app.products[j+1].price < app.products[j].price){
                    app.tmp = app.products[j];
                    app.products[j] = app.products[j+1];
                    app.products[j+1] = app.tmp;
                }
            }
     }
   };
   
   app.sortPriceHighLow = function(){
     app.tmp = {};  
     
     for(var i = 0; i < app.products.length - 1; i++){
            for(var j = 0; j < app.products.length - 1 - i;j++){
                if(app.products[j+1].price > app.products[j].price){
                    app.tmp = app.products[j];
                    app.products[j] = app.products[j+1];
                    app.products[j+1] = app.tmp;
                }
            }
     }
   };
   
});