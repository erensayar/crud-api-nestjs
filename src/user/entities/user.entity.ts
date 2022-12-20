const mongoose = require("mongoose");

const userSchema = new mngs.Schema(
    {
        id: Number,
        fistName: { type: String, default: null },
        lastName: { type: String, default: null },
        email: { type: String, unique: true },
        password: { type: String },
        age: { type: Number, min: 18, max: 65 },
        token: { type: String },
    },
    { timestamps: true }
);

userSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mngs.model("user", userSchema);