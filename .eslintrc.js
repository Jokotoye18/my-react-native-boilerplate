module.exports = {
  root: true,
  // extends: '@react-native-community',
  plugins: ['prettier'],
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  rules: {
    // Allow Prettier to throw errors via ESLint
    'prettier/prettier': 'error',
  },
};
