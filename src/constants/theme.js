// Theme configuration with carefully selected colors for both light and dark modes
export const lightTheme = {
  colors: {
    primary: '#007AFF',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#000000',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    card: '#FFFFFF',
    button: '#007AFF',
    buttonText: '#FFFFFF',
    input: '#FFFFFF',
    inputBorder: '#D1D5DB'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      heading: 'Poppins, sans-serif'
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '24px'
    }
  }
};

export const darkTheme = {
  colors: {
    primary: '#60A5FA',
    background: '#111827',
    surface: '#1F2937',
    text: '#FFFFFF',
    textSecondary: '#9CA3AF',
    border: '#374151',
    card: '#1F2937',
    button: '#60A5FA',
    buttonText: '#FFFFFF',
    input: '#374151',
    inputBorder: '#4B5563'
  },
  spacing: { ...lightTheme.spacing },
  typography: { ...lightTheme.typography }
};
