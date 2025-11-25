// theme/theme.ts

export const colors = {
  background: "#FFFFFF",
  surface: "#F5F7FA",

  text: "#2D3748",        // Dark gray for main text
  subtext: "#A0AEC0",     // Light gray for secondary text

  primary: "#47B881",     // Mint green
  primaryDark: "#3AA76D",

  success: "#4CCB61",
  danger: "#FF6B6B",

  border: "#E2E8F0",
};

export const theme = {
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
  },

  shadow: {
    light: {
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },
  },
};

export const text = {
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
  },
  body: {
    fontSize: 16,
    color: colors.text,
  },
  small: {
    fontSize: 14,
    color: colors.subtext,
  },
};

export const buttonStyle = {
  backgroundColor: colors.primary,
  paddingVertical: 14,
  borderRadius: theme.radius.md,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 12,
};

export const buttonText = {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "600",
};

export const inputStyle = {
  backgroundColor: colors.surface,
  borderRadius: theme.radius.md,
  paddingHorizontal: 14,
  paddingVertical: 12,
  fontSize: 16,
  borderWidth: 1,
  borderColor: colors.border,
  marginBottom: 12,
};