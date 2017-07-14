//uses with express 
import express from 'express';
import RBAC from 'rbac';
import secure from 'rbac/controllers/express';

// your custom controller for express
function adminController(req, res, next) {
  res.send('Hello admin');
}

const app = express();
const rbac = new RBAC({
  roles: ['admin', 'user']  
}, (err, rbac) => {
  if (err) throw err;

  // setup express routes
  app.use('/admin', secure.hasRole(rbac, 'admin'), adminController);
});

//Checking Permission

rbac.can('admin', 'create', 'article', (err, can) => {
  if (err) {
    throw err; // process error
  }

  if (can) {
    console.log('Admin is able create article');
  }
});

// or you can use instance of admin role

rbac.getRole('admin', (err, admin) => {
  if (err) {
    throw err; // process error
  }

  if (!admin) {
    return console.log('Role does not exists');
  }

  admin.can('create', 'article', (err2, can) => {
    if (err2) throw err2; // process error

    if (can) {
      console.log('Admin is able create article');    
    }
  });
});
