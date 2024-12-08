module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'defaultsecret',
    jwtExpiresIn: '7d', // Token expiration duration
    paginationLimit: 10, // Default pagination limit
  };
  