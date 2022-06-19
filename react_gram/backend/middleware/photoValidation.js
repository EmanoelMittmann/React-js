const {body} = require("express-validator")

const photoInsertValidation = () => {
    return[
        body("title")
        .not()
        .equals("undefined")
        .withMessage("o titulo é obrigatório")
        .isString()
        .withMessage("O titulo é obrigatorio")
        .isLength({min: 3})
        .withMessage("O titulo precisa de no mínimo 3 caracteres"),
        body("image").custom((value, {req}) => {
            if(!req.file){
                throw new Error("A imagemé obrigatória.")
            }
            return true
        })

    ]
}

const photoUpdateValidation = () => {
    return[
        body("title")
            .optional()
            .isString()
            .withMessage("O titulo é obrigatorio.")
            .isLength({min: 3})
            .withMessage("O título precisa ter no minino 3 caracteres.")
    ]
}

const commentValidation = () => {
    return [body("comment").isString().withMessage("O comentário é obrigatório")];
};

module.exports = {
    photoInsertValidation,
    photoUpdateValidation,
    commentValidation,

}