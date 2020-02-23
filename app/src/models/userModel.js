const mongoose = require('mongoose');
const Scheema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userScheema = new Scheema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
});

userScheema.methods.toJSON = function(){
  let user = this.toObject();
  delete user.password;
  return user;
};

userScheema.methods.comparePassword = async function(password){
  let result = await bcrypt.compare(password, this.password);
  return result;
};

userScheema.pre('save', async function(next) {
  const user = this;
  
  if(!user.isModified('password')){
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;

  next();
});

mongoose.model('user', userScheema);

module.exports = mongoose.model('user');