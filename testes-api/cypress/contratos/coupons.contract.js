import Joi from "joi";

const couponsSchema = Joi.object({
    id: Joi.number().required(),
    code: Joi.string().uuid().required(),
    amount: Joi.string().required(),
    status: Joi.string().required(),
    date_created: Joi.string().isoDate().required(),
    date_created_gmt: Joi.string().isoDate().required(),
    date_modified: Joi.string().isoDate().required(),
    date_modified_gmt: Joi.string().isoDate().required(),
    discount_type: Joi.string().required(),
    description: Joi.string().required(),
    date_expires: Joi.string().required(),
    date_expires_gmt: Joi.string().required(),
    usage_count: Joi.number().required(),
    individual_use: Joi.boolean().required(),
    product_ids: Joi.array().required(),
    excluded_product_ids: Joi.array().required(),
    usage_limit: Joi.string().required(),
    usage_limit_per_user: Joi.string().required(),
    limit_usage_to_x_items: Joi.string().required(),
    free_shipping: Joi.boolean().required(),
    product_categories: Joi.array().required(),
    excluded_product_categories: Joi.array().required(),
    exclude_sale_items: Joi.boolean().required(),
    minimum_amount: Joi.string().required(),
    maximum_amount: Joi.string().required(),
    email_restrictions: Joi.array().required(),
    used_by: Joi.array().required(),
    meta_data: Joi.array().required(),
    _links: Joi.object({
        self: Joi.array().items(
            Joi.object({
                href: Joi.string().required()
            })
        ).required(),
        collection: Joi.array().items(
            Joi.object({
                href: Joi.string().required()
            })
        ).required()
    }).required()
}).required()

export default couponsSchema


