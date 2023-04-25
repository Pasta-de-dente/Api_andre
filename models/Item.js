const mongoose = require("mongoose");

const { Schema } = mongoose;

const itemSchema = new Schema({
        id: {
            type: String,
            required: true
        },
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },

    },
    { timestamps: false }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = {
    Item,
    itemSchema,
}
