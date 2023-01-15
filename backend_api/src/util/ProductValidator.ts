import Ajv, {JSONSchemaType} from "ajv"

interface productCreate {
    productName: string
    price: number
    category: string
}

const schema: JSONSchemaType<productCreate> = {
    type: "object",
    properties: {
        productName: {
            type: "string"
        },
        price: {
            type: "number"
        },
        category: {
            type: "string",
            enum: ['Laptops', 'Phones', 'Accessories']
        }
    },
    required: ["productName", "price", "category"],
    additionalProperties: false
}

const ajv:Ajv = new Ajv();
export const validator = ajv.compile(schema);