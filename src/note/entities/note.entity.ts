const mngs = require("mongoose");

const noteSchema = new mngs.Schema(
    {
        id: Number,
        userId: Number,
        title: String,
        content: String,
        updated: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

noteSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mngs.model("note", noteSchema);