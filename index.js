const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const express = require('express');
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://localhost:27017/adminbroapp', { useNewUrlParser: true });

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
});

const app = express();
const router = AdminBroExpress.buildRouter(adminBro);

app.use(adminBro.options.rootPath, router);
app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'));
