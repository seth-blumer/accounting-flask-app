// Hooks
import { useState } from 'react';

// Functions
import { addCategory } from '../../services/api/categories/categories-crud';

// Types
import { Category } from '../../types/Category';

// Styles
import { styles } from './styles/categories-styles';

interface CategoriesProps {
    token: string | null;
    categories: Category[];
    setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const Categories = ({ categories, setCategories }: CategoriesProps) => {
    // Local state to manage the new category input
    const [newCategory, setNewCategory] = useState<Category>({ amount: 0, category: '', id: 0, user_id: 0 });

    // Function to handle adding a new category
    const handleAddCategory = async () => {
        // Check if newCategory is not empty and doesn't already exist in the categories array
        if (newCategory.category.trim() && !categories.some(cat => cat.category === newCategory.category.trim())) {
            // Generate a new ID or fetch it from the server once this is deployed
            const newId = categories.length ? Math.max(...categories.map(cat => cat.id)) + 1 : 1;

            // Create a new category object
            const newCategoryObj: Category = { amount: 0, category: newCategory.category.trim(), id: newId, user_id: 1 };

            setCategories([...categories, newCategoryObj]);

            await addCategory(newCategory.category); // Add the new category to the database

            setNewCategory({ amount: 0, category: '', id: 0, user_id: 0 }); // Reset the input field
        } else if (newCategory.category.trim() === '') {
            alert("Category cannot be empty."); // Alert if input is empty
        } else {
            alert("Category already exists."); // Alert if category already exists
        }
    };

    return (
        <div style={styles.content}>
            {/* TODO: Implement reusable components */}

            {/* Input field for adding a new category */}
            <div style={styles.addCategoryForm}>
                <input
                    type="text"
                    value={newCategory.category}
                    onChange={(e) => setNewCategory({ ...newCategory, category: e.target.value })} // Update local state on input change
                    placeholder="New category"
                    style={styles.input}
                />

                {/* Button to trigger adding the new category */}
                <button onClick={handleAddCategory} style={styles.addButton}>
                    Add
                </button>
            </div>

            {/* List of existing categories */}
            <div style={styles.categoriesList}>
                {categories.map(category => (
                    <div key={category.id} style={styles.categoryItem}>
                        {category.category}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
