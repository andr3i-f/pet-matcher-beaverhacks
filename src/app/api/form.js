import axios from "axios";

export async function submitSelectedImages(selectedImages, location = null) {
  try {
    const endpointUrl = 'http://localhost:5001/submitForm';

    const params = {
      urls: JSON.stringify(selectedImages),  // Convert array to string
      location: JSON.stringify(location)     // Convert object to string
    };

    console.log("Params: ", params);

    const response = await axios.get(endpointUrl, {
      params,
      headers: {
        "Content-Type": "application/json"
      }
    });

    return {
      success: true,
      data: response.data
    };

  } catch (error) {
    console.error('Error submitting selected images:', error);

    return {
      success: false,
      error: error.response?.data?.error || error.message
    };
  }
}
