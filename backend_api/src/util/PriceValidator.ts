import Ajv, {JSONSchemaType} from "ajv"

interface priceUpdate {
    price: number

}

const schema: JSONSchemaType<priceUpdate> = {
    type: "object",
    properties: {
        price: {
            type: "number"
        }
    },
    required: ["price"],
    additionalProperties: false
}

const ajv:Ajv = new Ajv();
export const validator = ajv.compile(schema);