const app = new Server();

const port = process.env.PORT || 3000;

//  get(path, handler) {
//     this.routes.GET[path] = handler;
//   }
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, pipo!");
});

// post(path, handler) {
//     this.routes.POST[path] = handler;
//   }
app.post("/UserHandler/signup", (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const requestData = JSON.parse(body);

    const sanitizedData = new Sanitizer();
    sanitizedData.trimData(requestData);

    const isStryng = sanitizedData.validateTypeString(requestData);
    const isEmpty = sanitizedData.isDataEmpty(requestData);

    if (!isEmpty && isStryng) {
      let user = Object.assign({}, User);
      user.userName = requestData.userName;
      user.password = requestData.password;

      let dataBaseHandler = new DataBaseHandler();
      let groupH = new GroupHandler(dataBaseHandler);
      let userHandler = new UserHandler(dataBaseHandler, groupH);

      userHandler.create(user);
    //   async create(data) {
    //     const Data = {
    //       paramName1: data.userName,
    //       paramName2: data.password,
    //     };    
    //     await this.DBHandler.executeSPWithData("createUser", Data);    
    //
    //     let userID = await this.getIdByUserName(Data.paramName1);
    //     this.groupH.addUserToGroup(userID, 15); //set user on guest group by default
    //   }

      res.end(JSON.stringify({ value: true }));
    } else {
      res.end(JSON.stringify({ message: "error empty data" }));
    }
  });
});

app.post("/UserHandler/signup/userData", (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const requestData = JSON.parse(body);

    const sanitizedData = new Sanitizer();
    sanitizedData.trimData(requestData);
    console.log(
      `Es tipo string : ${sanitizedData.validateTypeString(requestData)}`
    );
    const isStryng = sanitizedData.validateTypeString(requestData);
    const isEmpty = sanitizedData.isDataEmpty(requestData);
    console.log(isEmpty);

    if (!isEmpty && isStryng) {
      let userData = Object.assign({}, UserData);
      userData.name = requestData.name;
      userData.surname = requestData.surname;
      userData.dni = requestData.dni;
      userData.email = requestData.email;
      userData.gender = requestData.gender;
      userData.phoneNumber = requestData.phonenumber;
      userData.isActive = 1;

      let dataBaseHandler = new DataBaseHandler();
      let groupH = new GroupHandler(dataBaseHandler);
      let userHandler = new UserHandler(dataBaseHandler, groupH);

      userHandler
        .GetLastUserID()
        .then((lastId) => {
          userHandler.createUserData(lastId, userData);
          res.end(JSON.stringify({ message: "success to create userdata" }));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      res.end(JSON.stringify({ message: "error empty data" }));
    }
  });
});

// Iniciar el servidor en el puerto 3000
app.start(port);

// start(port) {
//     const server = http.createServer((req, res) => {
//       this.handleRequest(req, res);
//     });
//     server.listen(port, () => {
//       console.log(`Server listening on port ${port}`);
//     });
//   }

// handleRequest(req, res) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     const { pathname } = url.parse(req.url, true);
//     const method = req.method;
//     const handler = this.routes[method][pathname] || this.routes[method]["*"];
//     if (handler) {
//       handler(req, res);
//     } else {
//       res.statusCode = 404;
//       res.end("Not Found");
//     }
//   }
