import { Router, request, response } from "express";

 const routes = Router();

 routes.post("/test", (request, response) => {
  console.log(request.body.id);

  response.status(200).json({"message": "apenas um test"});

});

 export { routes };
