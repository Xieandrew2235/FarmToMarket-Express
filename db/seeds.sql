INSERT INTO Users(user_id,userName,password,userType,email,address,city,zipcode,phone)
VALUES(1001,'John Smith','password','Farmer','johnS@gmail.com','25500 Clawiter Rd','Hayward',94545,510-265-8600);

INSERT INTO Users(user_id,userName,password,userType,email,address,city,zipcode,phone)
VALUES(1002,'Janet Fuller','password','Farmer','jFuller@gmail.com','3440 Enterprise Ave','Hayward',94545,510-783-1270);

INSERT INTO Users(user_id,userName,password,userType,email,address,city,zipcode,phone)
VALUES(1003,'Steven Buchnan','password','Farmer','StevenB@gmail.com','15 Poppy House Rd','Rio Vista',94545,707-374-2111);

INSERT INTO Users(user_id,userName,password,userType,email,address,city,zipcode,phone)
VALUES (1004,'Ricky Conner', 'password', 'Farmer','RickyC@gmail.com','6342 Bystrum Rd','Ceres',95307,209-538-3131);

INSERT INTO Users(user_id,userName,password,userType,email,address,city,zipcode,phone)
VALUES (1005,'Mary Wood', 'password', 'Farmer','WoodMary@gmail.com','Farmcom Real','Ceres',95307,559-232-5603);

INSERT INTO Users(user_id,userName,password,userType,email,address,city,zipcode,phone)
VALUES (1006,'Robert King', 'password', 'Farmer','KingR@gmail.com','7798 Vegetable Farms','Sacramento Valley',95307,510-233-5643);

INSERT INTO Users(user_id,userName,password,userType,email,address,city,zipcode,phone)
VALUES (101,'Lucky', 'password','Store','Customerservice@lucky.com','6155 W. Las Positas','Pleasanton',94588,925-462-1520);

INSERT INTO Users(user_id,userName,password,userType,email,address,city,zipcode,phone)
VALUES (102,'Walmart', 'password','Store','Service@walmart.com','15555 Hesperian Blvd','San Leandro',94579,510-351-0108);

INSERT INTO Users(user_id,userName,password,userType,email,address,city,zipcode,phone)
VALUES (103,'Walmart', 'password','Store','CustomerService@safeway.com','5918 Stoneridge Mall Road','Pleasanton',94579,707-374-2111);

INSERT INTO Users(user_id,userName,password,userType,email,address,city,zipcode,phone)
VALUES (104,"Trader's Joe",'password','Store','inquiry@tradersjoe.com','85 Railroad Ave','Danville',94526,925-838-5757);

INSERT INTO Users(user_id,userName,password,userType,email,address,city,zipcode,phone)
VALUES (105,'Whole Foods','password','Store','Servicedesk@wholefoods.com','5200 Dublin Blvd','Dublin',94568,925-452-2226);

INSERT INTO Users(user_id,userName,password,userType,email,address,city,zipcode,phone)
VALUES (106,'Safe Way', 'password','Store','safewaysocialmedia@safeway.com','1701 Santa rita rd','Pleasanton',94566,925-417-5530);

-- PRODUCE TABLE

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1003921-918, 'Broccoli');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1013594-856,'lettuce');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1023425-442,'carrots');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (103333-491,'bellpepper');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1043561-556,'basil');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1053498-824,'okra');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1063668-569,'apples');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1073790-330,'cilantro');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1083668-478,'banana');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1093561-590,'parsley');

INSERT INTO Produce(Prod_id, prod_Name)
VALUES (1103743-623,'garlic');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1123176-600,'oranges');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1133240-812,'grapes');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1143276-900,'almonds');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1153354-622, 'poultry');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1163176-745,'livestock');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1173408-999,'strawberries');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1183298-200,'squash');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1193370-710,'dairy');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1043910-420,'beans');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1043987-583,'tomatoes');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1043888-654,'onions');

INSERT INTO Produces(Prod_id, prod_Name)
VALUES (1043180-945,'potatoes');

-- -- INVENTORY TABLE

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4011,'banana',0.25,200,100);

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4026,'squash',0.75,40,30);

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4013,'strawberry',8.00,75,50);

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4065,'apples',0.25,230,100);

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4019,'oranges',0.20,200,100);

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4027,'tomatoes',0.20,200,150);

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4031,'onions',0.25,250);

-- USER INVENTORY JOINING TABLE

-- INSERT INTO User_Inventories(user_id,prod_Name,stock_remain)
-- VALUES (103,'onions',250);

-- INSERT INTO User_Inventories(user_id,prod_Name,stock_remain)
-- VALUES (102,'tomatoes',140);

-- INSERT INTO User_Inventories(user_id,prod_Name,stock_remain)
-- VALUES (101,'oranges',200);

-- INSERT INTO User_Inventories(user_id,prod_Name,stock_remain)
-- VALUES (104,'apples',175);

-- INSERT INTO User_Inventories(user_id,prod_Name,stock_remain)
-- VALUES (106,'banana',200);

-- USER(farmer) PRODUCE Join TABLE

INSERT INTO farmer_Produces(user_id,prod_id,prod_Name,quantity)
VALUES (1001,1043888-654,'onions',500);

INSERT INTO farmer_Produces(user_id,prod_id,prod_Name,quantity)
VALUES (1006,1173408-999,'strawberries',500);

INSERT INTO farmer_Produces(user_id,prod_id,prod_Name,quantity)
VALUES (1004,1133240-812,'grapes',100);

INSERT INTO farmer_Produces(user_id,prod_id,prod_Name,quantity)
VALUES (1002,1193370-710,'dairy',30);

INSERT INTO farmer_Produces(user_id,prod_id,prod_Name,quantity)
VALUES (1005,1163176-745,'livestock',30);

INSERT INTO farmer_Produces(user_id,prod_id,prod_Name,quantity)
VALUES (1003,1063668-569,'apples',500);


-- USERS(STORES) PRODUCES TABLE



INSERT INTO store_Produces(user_id,prod_id,stock_remain,threshold,price)
VALUES (102,1063668-569,300,250,0.30);

INSERT INTO store_Produces(user_id,prod_id,stock_remain,threshold,price)
VALUES (103,1163176-745,30,15,15,3.00);

INSERT INTO store_Produces(user_id,prod_id,stock_remain,threshold,price)
VALUES (104,1173408-999,30,15,20,3.00);

INSERT INTO store_Produces(user_id,prod_id,stock_remain,threshold,price)
VALUES (101,1193370-710,35,16,15,3.00);

INSERT INTO store_Produces(user_id,prod_id,stock_remain,threshold,price)
VALUES (105,1193370-710,35,16,15,3.00);

















