import Joi from "joi";


const productCategoriesSchema = Joi.array().items(Joi.object({
    "id": Joi.number().required(),
    "name": Joi.string().required(),
    "slug": Joi.string().required(),
    "parent": Joi.number().required(),
    "description": Joi.string().allow('').required(),
    "display": Joi.number().required(),
    "image": Joi.string().allow(null).required(),
    "menu_order": Joi.number().required(),
    "count": Joi.number().required(),
    "_links": Joi.object({
        "self": Joi.array().items(Joi.object({
            "href": Joi.string().required()
        })),
        "colletion": Joi.array().items(Joi.object({
            "href": Joi.string().required()
        }))
    })
}))

export default productCategoriesSchema