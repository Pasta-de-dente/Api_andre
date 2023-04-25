const {Item: ItemModel, Item} = require("../models/Item");

const itemController = {

    create: async ( req, res ) => {

        try {
            
            const item = {
                id: req.body.id,
                nome: req.body.nome,
                descricao: req.body.descricao,
            };

            const response = await ItemModel.create(item);

            res.status(201).json({ response, msg: "Item criado com sucesso!" });

        } catch (error) {
            console.log(error)
        }
    },

    getAll: async ( req, res ) => {
        try {
            
            const items = await ItemModel.find();

            res.json(items);

        } catch (error) {
            console.log(error)
        }
    },
     
    get: async ( req, res ) => {
        try {
            const id = req.params.id

            const item = await ItemModel.findById(id);

            if ( !item ) {
                res.status(404).json({ msg: "Item não encontrado." })
                return;
            }

            res.json(item)

        } catch (error) {
            console.log(error)
        }
    },

    delete: async ( req, res ) => {
        try {
            
            const id = req.params.id

            const item = await ItemModel.findById(id)

            if ( !item ) {
                res.status(404).json({ msg: "Item não encontrado." })
                return;
            }

            const deletedItem = await ItemModel.findByIdAndDelete(id);

            res.status(200).json({ deletedItem, msg: "Item excluido com sucesso!" });

        } catch (error) {
            console.log(error)
        }
    },

    update: async ( req, res ) => {
        try {
            
            const id = req.params.id;

            const item = {
                id: req.body.id,
                nome: req.body.nome,
                descricao: req.body.descricao,
            };

            const updatedItem = await ItemModel.findByIdAndUpdate(id, item);

            if ( !updatedItem ) {
                res.status(404).json({ msg: "Item não encontrado." });
                return;
            }

            res.status(200).json({ item, msg: "Item atualizado com sucesso!" });

        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = itemController;