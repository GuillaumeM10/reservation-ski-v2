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
    getUser: async (req, res) => {
      const email = req.user.email
      try {
        const user = await User.findOne({ email: email })
        console.log(user);
        res.send(user);
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    },
    forgotPassword: async (req, res) => {
      const { email } = req.body;
      try {
        const user = await User.findOne({ email: email });
        
        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }

        const resetPassword = await TokenResetPassword.findOne({ user: user._id });

        let uuidToken
        if (!resetPassword) {
          uuidToken = new TokenGenerator(256, TokenGenerator.BASE62).generate();
          
          console.log(uuidToken);
          TokenResetPassword.create({ user: user._id, token: uuidToken });
        } else {
          uuidToken = resetPassword.token;
        }

        const mailOptions = {
          from: "ui@esd.com",
          to: email,
          subject: "Reset password link",
          html: `<a href="http://localhost:3000/reset-password/${uuidToken}">Reset password</a>`,
        };

        transporter.sendMail(mailOptions, function (error, info) {

          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }

        });

        res.send({ message: "Reset password link sent to your email" });
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    },
    resetPassword: async (req, res) => {
      try {
        const { id } = req.params;
        const { password } = req.body;
        console.log("id", id);
        console.log("password", password);
      
        const findResetPassword = await TokenResetPassword.findOne({ token: id });
        console.log("findResetPassword", findResetPassword);  
      
        if (!findResetPassword) {
          return response
            .status(404)
            .send({ message: "Reset password link not found" });
        }

        const userId = findResetPassword.user;
        const user = User.findOne({ id: userId });

        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }

        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("hashedPassword", hashedPassword);

        const updateUser = await User.findByIdAndUpdate(userId, {
          password: hashedPassword,
        });

        await updateUser.save();
        await TokenResetPassword.findByIdAndDelete(findResetPassword._id);

        res.send(updateUser);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    }
}

module.exports = AuthController;