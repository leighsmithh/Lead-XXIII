const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const express = require('express');

const adminBro = new AdminBro({
  rootPath: '/admin',
});

const app = express();
const router = AdminBroExpress.buildRouter(adminBro);

app.use(adminBro.options.rootPath, router);
app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'));
