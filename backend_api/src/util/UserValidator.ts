import Ajv, {JSONSchemaType} from "ajv";

interface userCreate {
    first_name: string,
    last_name: string,
    password: string,
    email: string
}

const schema: JSONSchemaType<userCreate> = {
    type: "object",
    properties: {
        first_name: {
            type: "string",
            "maxLength": 100
        },
        last_name: {
            type: "string",
            "maxLength": 100
        },
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
    required: ["first_name", "last_name", "email", "password"],
    additionalProperties: false
}

const ajv:Ajv = new Ajv();
export const validator = ajv.compile(schema);