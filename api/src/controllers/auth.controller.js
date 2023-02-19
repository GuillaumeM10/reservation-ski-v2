const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const transporter = require('../../config/nodemail.config');
const salt = 10;

const TokenResetPassword = require('../models/tokenResetPassword.model')
const TokenGenerator = require('uuid-token-generator');


const AuthController = {
    signin: async(req, res) => {
      const { email, password } = req.body;

      const user = await User.findOne({email})
      if(!user) {
        return res.status(404).send({ message: 'User not found' });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if(!passwordCompare) {
        return res.status(400).send({ message: 'Password is not correct' });
      }

      const accessToken = await jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

      res.send({accessToken});
    },
    signup: async (req, res) => {
      const { email, password } = req.body;
      const hash = await bcrypt.hash(password, salt);
      
      const user = new User({
        email,
        password: hash
      })
      
      try{
        await user.save();

        const mailOptions = {
          from: 'oled@gmail.com',
          to: user.email,
          subject: 'New Account',
          text: `Registration successful, hello ${user.email}`
        }
    
        await transporter.sendMail(mailOptions);

        res.send(user);
      } catch (error) {
        res.status(400).send({ message: error.message });
      }

    },
    getAllToken: async (req, res) => {
      try {
        const tokenResetPassword = await TokenResetPassword.find().populate('user');
        res.send(tokenResetPassword);
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    },
    createToken: async (req, res) => {
      const tokgen = new TokenGenerator(256, TokenGenerator.BASE62);
      const token = tokgen.generate();
  
      try {
        const user = req.body.user

        if(!user) {
          return res.status(404).send({ message: 'User not found' });
        }

        const tokenResetPassword = await TokenResetPassword.create({ token, user });
        res.send({tokenResetPassword});
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    },
    deleteToken: async (req, res) => {
      const { token } = req.params;
      try {
          const tokenResetPassword = await TokenResetPassword.findByIdAndDelete(token);
          res.send(tokenResetPassword);
      } catch (error) {
          res.status(404).send({ message: error });
      }
    }
}

module.exports = AuthController;