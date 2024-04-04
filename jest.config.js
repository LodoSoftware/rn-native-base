module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  modulePathIgnorePatterns: ['<rootDir>/example/*', '<rootDir>/lib/'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|expo-asset|expo-constants|@unimodules|react-native-unimodules|expo-font|react-native-svg|@expo/vector-icons|react-native-vector-icons|@react-native-aria/checkbox|@react-native-aria/interactions|@react-native-aria/button|@react-native-aria/switch|@react-native-aria/toggle|@react-native-aria/utils|@react-native-aria/*))',
  ],
  setupFiles: ['<rootDir>/src/jest/mock.ts'],
  watchPathIgnorePatterns: ['node_modules'],
};
