const express = require('express');
const sequelize = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/categories', require('./routes/category-routes'));
app.use('/api/products', require('./routes/product-routes'));
app.use('/api/tags', require('./routes/tag-routes'));
app.use('/api/product-tags', require('./routes/product-tag-routes'));

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
