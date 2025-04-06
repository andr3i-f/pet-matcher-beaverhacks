// Update your API call to use environment variable for the API URL
export const submitSelectedImages = async (selectedImages: string[], location: any) => {
  try {
    // Use absolute URL to ensure consistent behavior in all environments
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    console.log('Using API URL:', apiUrl);
    
    const response = await fetch(`${apiUrl}/api/submit-images`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        selectedImages,
        location,
      }),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', response.status, errorText);
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    return {
      success: true,
      data: data.matches || [],
    };
  } catch (error) {
    console.error('Error submitting images:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};
