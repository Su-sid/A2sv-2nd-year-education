// Helper function to format ISO timestamps to human readable format
const formatDate = (isoString: string) => {
    if (!isoString) return "N/A";
    
    try {
      const date = new Date(isoString);
      // Format: "Jul 1, 2023"
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (e) {
      return isoString; // Return original string if parsing fails
    }
};

export default formatDate;