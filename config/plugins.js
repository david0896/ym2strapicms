module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET'),
      },
    },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          service: "hotmail",
          auth: {
            user: "qtequenoswebapp@outlook.com",
            pass: "bnjolnbcizconrfz"
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'qtequenoswebapp@outlook.com',
          defaultReplyTo: 'qtequenoswebapp@outlook.com',
          testAddress: 'qtequenoswebapp@outlook.com',
        },
      },
    },
  });