const {body} = require("express-validator");

const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("O nome é obrigatório.")
            .isLength({min: 3})
            .withMessage("o nome precisa ter no minino três caracteres"),
        body("email")
            .isString()
            .withMessage("Email é obrigatório")
            .isEmail()
            .withMessage("Insira um e-mail valido"),
        body("password")
            .isString()
            .withMessage(" A senha é obrigatória.")
            .isLength({ min:5 })
            .withMessage("A senha precisa ter no mínimo 5 caracteres."),
        body("confirmPassword")
            .isString()
            .withMessage(" A confirmação da senha é obrigatória")
            .custom((value, {req}) => {
                if(value != req.body.password){
                    throw new Error("As senhas não são iguais")
                }
                return true
            })  
    ]
}

const loginValidation = () =>{
    return [
        body("email")
            .isString()
            .withMessage("o e-mail é obrigatório")
            .isEmail()
            .withMessage("Insira um e-mail válido"),
        body("password")
            .isString()
            .withMessage("A senha é obrigatória")
    ];
};

const userUpdateValidation = () =>{

    return[
        body("name")
            .optional()
            .isLength({min:3})
            .withMessage("Nome precisa ser maior que 3 caracteres"),
        body("password")
            .optional()
            .isLength({min: 5})
            .withMessage("sua senha precisa de mais caracteres")
    ]
}



module.exports ={
 userCreateValidation,
 loginValidation,
 userUpdateValidation,
};