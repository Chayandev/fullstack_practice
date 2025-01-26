//const PORT= isNaN(process.env.PORT)?3000:parseInt(process.env.PORT);
//manual way to validate and create

//usign zod

import {z} from "zod";

const ageSchema=z.number().min(18).max(100).int();
 

