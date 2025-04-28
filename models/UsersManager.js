import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Método para comparar la contraseña al hacer login
userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    throw new Error('Error al comparar la contraseña');
  }
};

// Creacion del modelo de usuario
const User = mongoose.model('User', userSchema);

// Obtengo todos los usuarios
export const getAllUsers = async () => {
  return await User.find();
};

// Obtengo un usuario por ID
export const getUserById = async (id) => {
  return await User.findById(id);
};

// Crear un nuevo usuario
export const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

// Actualizar un usuario por ID
export const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

// Eliminar un usuario por ID
export const deleteUser = async (id) => {
  const result = await User.findByIdAndDelete(id);
  return result !== null;
};

// Obtener un usuario por su email
export const getUserByEmail = async (email) => {
    return await User.findOne({ email });
  };
export default User;
