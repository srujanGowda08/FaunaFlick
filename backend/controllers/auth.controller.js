export const signup = async (req, res) => {
  res.json({ message: "Welcome to the FaunaFlick API!" });
};

export const login = async (req, res) => {
  res.json({ message: "Login successful!" });
};

export const logout = async (req, res) => {
  res.json({ message: "Logout successful!" });
};
