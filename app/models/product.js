const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const productSchema = new mongoose.Schema({
  code: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ""
  },
  images: [
    {
      src: String,
      alt: String
    }
  ],
  options: [
    {
      optionType: String,
      label: String,
      options: [
        {
          label: String,
          price: Number,
          color: String,
          default: Boolean
        }
      ]
    }
  ],
  stock: Number,
  allowPublish: Boolean
});

productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("product", productSchema);
