import Ajv, {JSONSchemaType} from "ajv"

interface category {
    category: string
}

const schema: JSONSchemaType<category> = {
    type: "object",
    properties: {
        category: {
            type: "string",
            enum: ['Laptops', 'Phones', 'Accessories']
        }
    },
    required: ["category"],
    additionalProperties: false
}

const ajv:Ajv = new Ajv();
export const validator = ajv.compile(schema);