import AsyncStorage from '@react-native-async-storage/async-storage';

// Hàm async để lưu giá trị vào bộ nhớ máy dựa vào tên (key) và giá trị (value)
export const setValueToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Value successfully saved to storage.');
  } catch (error) {
    console.log('Error saving value to storage:', error);
  }
};
// Hàm async để lấy giá trị từ bộ nhớ máy dựa vào tên (key)
export const getValueFromStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(value);
    return value;
  } catch (error) {
    console.log('Error getting value from storage:', error);
  }
};

// Hàm async để xóa giá trị từ bộ nhớ máy dựa vào tên (key)
export const removeValueFromStorage = async key => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Value successfully removed from storage.');
  } catch (error) {
    console.log('Error removing value from storage:', error);
  }
};

export const clearAllValueFromStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log('Error clearing value from storage:', error);
  }
};
