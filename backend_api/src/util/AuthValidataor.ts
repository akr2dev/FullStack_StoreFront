import Ajv, {JSONSchemaType} from "ajv";

interface userAuth {
    password: string,
    email: string
}

const schema: JSONSchemaType<userAuth> = {
    type: "object",
    properties: {
        email:{
            type: "string",
            pattern: "^(.+)@(.+)\.(.+)$",
            "maxLength": 100
        },
        password: {
            type: "string",
            "minLength": 5,
            "maxLength": 20
        }

    },
    required: ["email", "password"],
    additionalProperties: false
}

const ajv:Ajv = new Ajv();
export const validator = ajv.compile(schema);