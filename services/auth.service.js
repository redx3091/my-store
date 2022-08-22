const UserService = require('./users.service');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { config } = require('./../config/config');

const service = new UserService();
class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  singToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }

  async sendMail(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: config.email,
        pass: config.emailPass,
      },
    });

    await transporter.sendMail({
      from: config.email, // sender address
      to: `${user.email}`, // list of receivers
      subject: 'Este es un correo de prueba', // Subject line
      text: 'Hola es una prueba', // plain text body
      html: '<b>Hola es una prueba</b>', // html body
    });
    return { message: 'mail sent' };
  }
}

module.exports = AuthService;
