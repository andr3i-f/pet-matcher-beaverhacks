
import axios from "axios";


export async function submitSelectedImages(selectedImages, location = null) {
    try {
        const endpointUrl = 'http://localhost:5000/submitForm';
        
        const params = {
            urls: JSON.stringify(selectedImages),  // Convert array to a string for URL compatibility
            location: JSON.stringify(location)  // Convert object to string
          };
          
          console.log("Params: ", params);
          
          const response = await axios.get(endpointUrl, {
            params: params,  // Pass query parameters as an object
            headers: {
              "Content-Type": "application/json"
            }
          });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return {
            success: true,
            data: data
        };

    } catch (error) {
        console.error('Error submitting selected images:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
