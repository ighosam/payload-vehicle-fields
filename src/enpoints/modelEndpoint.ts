import { type Endpoint, type PayloadRequest } from "payload";
import { getModelsByMake } from "../queries/getModels.js";
import { parseRequestBody } from "../utilities/parseReqBody.js";

// Login endpoint for Payload CMS
export const modelEdnpoint: Endpoint = {
    path: "/model",
    method: "get",
    handler: async (req) => {
        const data = await parseRequestBody(req)
        //const make = data?.make
          const make = req.query?.make as string

        const rows = await getModelsByMake(make)
        console.log("result is: ",rows.length)
        return Response.json(rows)
          //return new Response('OK', { status: 200 })
    }
}
