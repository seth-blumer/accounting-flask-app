import axiosInstance from "../../axiosInstance";

// Function to get all categories
export const getCategories = async () => {
    const response = await axiosInstance.get('/categories');
    return response.data;  // Returns a list of categories
};

// Function to add a new category
export const addCategory = async (category: string) => {
    const response = await axiosInstance.post('/categories/add', { category });
    return response.data;  // Returns the newly added category
};

// Function to delete a category
export const deleteCategory = async (categoryId: number) => {
    const response = await axiosInstance.delete(`/categories/${categoryId}`);
    return response.data;  // Returns success/failure message
};
